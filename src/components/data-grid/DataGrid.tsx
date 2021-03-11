import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import fetch from 'isomorphic-unfetch';
import { StyledDataGrid, getGridThemeOverrides, StyledDataGridHeader } from './styles';
import { RowActionsCell } from './RowActionsCell';
import { StatusBarRowCount } from './StatusBarRowCount';
import { NoRowsTemplate } from './NoRowsTemplate';
import { HeaderCheckbox } from './HeaderCheckbox';
import { HeaderColumnToggle } from './HeaderColumnToggle';
import { LoadingCellTemplate } from './LoadingCellTemplate';
import { Filters } from './Filters';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { MultiFilterModule } from '@ag-grid-enterprise/multi-filter';
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import {
  GridApi,
  ColumnApi,
  ValueFormatterParams,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  ServerSideStoreType,
  GridReadyEvent,
} from '@ag-grid-community/core';
import {
  formatCurrency,
  formatNumber,
  formatDuration,
  TcDate,
  sortBy,
  nameOf,
} from '@timechimp/timechimp-typescript-helpers';

import {
  DataGridApi,
  DataGridColumn,
  DataGridProps,
  DataGridState,
  DataGridColumnType,
  FilterModel,
  DataGridResponse,
  DataGridView,
  CreateViewInput,
} from './types';
import { useTheme } from '../../providers';
import { TriangleDown, TriangleUp } from '../icons';
import { defaultFormatSettings } from './defaultFormatSettings';
import { defaultTranslations } from './defaultTranslations';
import DataGridViews from './views/DataGridViews';

const DEFAULT_SEARCH_COLUMNS = ['name'];
const DEFAULT_HEIGHT = 'calc(100vh - 200px)';

export const DataGrid = ({
  columns,
  selection,
  filtering,
  filters,
  grouping,
  columnToggling,
  viewing,
  onReady,
  rowActionItems,
  dataUrl,
  accessToken,
  sortableColumns,
  resizeableColumns,
  views,
  onDeactivateView,
  onActivateView,
  onCreateView,
  onDeleteView,
  onRenameView,
  onPinView,
  onUnpinView,
  onSaveViewState,
  searchColumns = DEFAULT_SEARCH_COLUMNS,
  formatSettings = defaultFormatSettings,
  translations = defaultTranslations,
  height = DEFAULT_HEIGHT,
}: DataGridProps) => {
  const [gridApi, setGridApi] = useState<GridApi>(new GridApi());
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>(new ColumnApi());
  const [gridColumns, setGridColumns] = useState<DataGridColumn[]>(columns);
  const [filterModel, setFilterModel] = useState<FilterModel>({});
  const [allViews, setAllViews] = useState<DataGridView[]>([]);

  const { theme } = useTheme();

  useEffect(() => {
    const allViews = views ? sortBy<DataGridView>(views, [nameOf<DataGridView>('name')]) : [];
    const hasActiveView = allViews.some((view) => view.active);

    allViews.unshift({
      id: 'default',
      name: translations.defaultView,
      pinned: true,
      active: !hasActiveView,
    } as DataGridView);

    setAllViews(allViews);
  }, [views, translations]);

  const getGridThemeClassName = () => {
    return theme.current === theme.dark ? 'ag-theme-alpine-dark' : 'ag-theme-alpine';
  };

  const getSelectedRows = (api: GridApi) => {
    return api.getSelectedRows();
  };

  const getSelectedRow = (api: GridApi) => {
    const rows = api.getSelectedRows();
    if (rows.length === 0) {
      throw new Error('No row is selected');
    }
    if (rows.length > 1) {
      throw new Error('More then 1 row selected, use getSelectedRows method instead');
    }

    return api.getSelectedRows()[0];
  };

  const exportAsCsv = (api: GridApi) => {
    return api.exportDataAsCsv();
  };

  const exportAsExcel = (api: GridApi) => {
    return api.exportDataAsExcel();
  };

  const refreshStore = (api: GridApi) => {
    const rowCount = api.getDisplayedRowCount();
    return api.refreshServerSideStore({ purge: rowCount === 0 });
  };

  const onGridSizeChanged = () => {
    gridApi.sizeColumnsToFit();
  };

  const setViewState = (state: string | null) => {
    if (state) {
      const gridState: DataGridState = JSON.parse(state);

      gridColumnApi.setColumnState(gridState.columnState);
      gridColumnApi.setColumnGroupState(gridState.columnGroupState);
      gridApi.setFilterModel(gridState.filterModel);
      setFilterModel(gridState.filterModel);
    } else {
      gridColumnApi.resetColumnState();
      gridColumnApi.resetColumnGroupState();
      gridApi.setFilterModel({});
      setFilterModel({});
    }

    gridApi.sizeColumnsToFit();
  };

  const handleActivateView = async (id: string) => {
    const view = allViews?.find((view) => view.id === id);
    if (view) {
      if (view.id && onActivateView) {
        await onActivateView(view.id);
      } else if (onDeactivateView) {
        // Deactive current view when selecting the default view
        const activeView = allViews.find((view) => view.active);
        if (activeView) {
          await onDeactivateView(activeView.id);
        }

        view.active = true;
        setAllViews([...allViews.filter((x) => x.id !== id), view]);
      }

      setViewState(view.viewState!);
    }
  };

  const handleCreateView = async (input: CreateViewInput) => {
    if (onCreateView) {
      await onCreateView(input);
    }
    return;
  };

  const onFirstDataRendered = () => {
    const activeView = allViews?.find((view) => view.active);
    if (activeView) {
      setViewState(activeView.viewState!);
    }
  };

  const createServerSideDatasource = (): IServerSideDatasource => {
    return {
      getRows: async function (params: IServerSideGetRowsParams) {
        try {
          const response = await fetch(dataUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(params.request),
          });

          const data = (await response.json()) as DataGridResponse;
          const { rowData, rowCount } = data;

          if (!rowData || rowData.length === 0) {
            params.api.showNoRowsOverlay();
          } else {
            params.api.hideOverlay();
          }

          return params.success({ rowData, rowCount });
        } catch (error) {
          return params.fail();
        }
      },
    };
  };

  const onGridReady = async ({ api, columnApi }: GridReadyEvent) => {
    if (onReady) {
      const dataGridApi: DataGridApi = {
        getSelectedRows: () => getSelectedRows(api),
        getSelectedRow: () => getSelectedRow(api),
        exportAsCsv: () => exportAsCsv(api),
        exportAsExcel: () => exportAsExcel(api),
        refreshStore: () => refreshStore(api),
      };
      onReady(dataGridApi);
    }

    setGridApi(api);
    setGridColumnApi(columnApi);

    api.sizeColumnsToFit();

    const datasource = createServerSideDatasource();
    api.setServerSideDatasource(datasource);

    setFilterModel(api.getFilterModel());
  };

  const getRowNodeId = (data: any) => {
    return data.id;
  };

  const onGrouping = (rowGroups: string[]) => {
    let columns = [...gridColumns];
    columns.forEach((c) => {
      c.rowGroup = rowGroups.includes(c.field);
    });
    setGridColumns(columns);
  };

  const onFiltering = (filters: FilterModel) => {
    setFilterModel(filters);
    gridApi.setFilterModel(filters);
    gridApi.onFilterChanged();
  };

  const getSetValues = (value: string, values?: string[]) => {
    if (!values) {
      return [value];
    }

    if (values?.includes(value)) {
      return values.filter((x) => x !== value);
    }
    return [...values, value];
  };

  const onSetFiltering = (column: string, value: string) => {
    const filterInstance = gridApi.getFilterInstance(column);
    const currentValues = filterInstance?.getModel()?.values;
    const values = getSetValues(value, currentValues);
    filterInstance?.setModel({ values });
    // @ts-ignore
    filterInstance.applyModel();
    gridApi.onFilterChanged();
  };

  const getValueFormatter = (params: ValueFormatterParams, type?: DataGridColumnType) => {
    const { currency, numberFormat, dateFormat, language, timeFormat, durationFormat } = formatSettings;
    const defaultDateFormat = defaultFormatSettings.dateFormat as string;

    switch (type) {
      case 'currency':
        return formatCurrency(params.value, currency, numberFormat);
      case 'number':
        return formatNumber(params.value, 2, numberFormat);
      case 'date':
        return new TcDate(params.value).format(dateFormat ?? defaultDateFormat, language);
      case 'time':
        return new TcDate(params.value).format(timeFormat ?? defaultDateFormat, language);
      case 'duration':
        return formatDuration(params.value, durationFormat, numberFormat);
    }
    return params.value;
  };

  const getFilterParams = (params: any, columnField?: string) => {
    let values: string[] = [];
    const columnFilter = filters?.find((filter) => filter.columnField === columnField);
    if (columnFilter && columnFilter.values) {
      values = columnFilter.values;
    }
    params.success(values);
  };

  return (
    <>
      <Filters
        columns={gridColumns}
        filtering={filtering}
        filters={filters}
        grouping={grouping}
        onGrouping={onGrouping}
        onFiltering={onFiltering}
        onSetFiltering={onSetFiltering}
        filterModel={filterModel}
        translations={translations}
        searchColumns={searchColumns}
      />
      <StyledDataGrid $height={height} className={getGridThemeClassName()}>
        {viewing && (
          <StyledDataGridHeader>
            <DataGridViews
              views={allViews}
              onCreateView={handleCreateView}
              onDeleteView={onDeleteView}
              onRenameView={onRenameView}
              onPinView={onPinView}
              onUnpinView={onUnpinView}
              onSaveViewState={onSaveViewState}
              onActivateView={handleActivateView}
              translations={translations}
              gridApi={gridApi}
              gridColumnApi={gridColumnApi}
            />
            {/* <DataGridActions translations={translations} /> TODO include when in sprint */}
          </StyledDataGridHeader>
        )}
        <style>{getGridThemeOverrides(theme.current)}</style>
        <AgGridReact
          rowSelection="multiple"
          rowModelType="serverSide"
          serverSideStoreType={ServerSideStoreType.Partial}
          noRowsOverlayComponent="noRowsTemplate"
          loadingCellRenderer="loadingCellTemplate"
          animateRows
          suppressAggFuncInHeader
          autoGroupColumnDef={{
            cellRendererParams: {
              suppressCount: false,
              checkbox: false,
            },
          }}
          pagination
          suppressPaginationPanel
          onGridReady={onGridReady}
          getRowNodeId={getRowNodeId}
          onFirstDataRendered={onFirstDataRendered}
          onGridSizeChanged={onGridSizeChanged}
          cacheBlockSize={1000}
          maxBlocksInCache={10}
          blockLoadDebounceMillis={100}
          headerHeight={36}
          frameworkComponents={{
            moreActionsCell: RowActionsCell,
            statusBarRowCount: StatusBarRowCount,
            noRowsTemplate: () => <NoRowsTemplate translations={translations} />,
            headerCheckbox: HeaderCheckbox,
            headerColumnToggle: HeaderColumnToggle,
            loadingCellTemplate: LoadingCellTemplate,
          }}
          icons={{
            sortAscending: () =>
              ReactDOMServer.renderToStaticMarkup(<TriangleDown size={theme.current.sizing.scale200} />),
            sortDescending: () =>
              ReactDOMServer.renderToStaticMarkup(<TriangleUp size={theme.current.sizing.scale200} />),
          }}
          modules={[
            ServerSideRowModelModule,
            RowGroupingModule,
            CsvExportModule,
            ExcelExportModule,
            StatusBarModule,
            SetFilterModule,
            MultiFilterModule,
          ]}
          statusBar={{
            statusPanels: [
              {
                statusPanel: 'statusBarRowCount',
                statusPanelParams: {
                  translations,
                },
                align: 'left',
              },
            ],
          }}
        >
          <AgGridColumn
            hide={!selection}
            headerName={''}
            field={''}
            checkboxSelection={selection}
            headerComponent={selection ? 'headerCheckbox' : ''}
            minWidth={40}
            maxWidth={40}
            sortable={false}
            resizable={false}
          />
          {gridColumns.map((column) => (
            <AgGridColumn
              key={column.field}
              headerName={column.label}
              field={column.field}
              width={column.width}
              rowGroup={column.rowGroup}
              hide={column.rowGroup}
              sort={column.sort}
              filter="agMultiColumnFilter"
              filterParams={{ values: (params: any) => getFilterParams(params, column.field) }}
              valueFormatter={(params: ValueFormatterParams) => getValueFormatter(params, column.type)}
              aggFunc={column.aggFunc}
              sortable={sortableColumns}
              resizable={resizeableColumns}
            />
          ))}
          <AgGridColumn
            headerName={''}
            field={''}
            headerComponent={columnToggling ? 'headerColumnToggle' : ''}
            headerComponentParams={{
              translations,
            }}
            cellRenderer={rowActionItems ? 'moreActionsCell' : ''}
            cellRendererParams={{ items: rowActionItems }}
            type="rightAligned"
            minWidth={60}
            maxWidth={60}
            sortable={false}
            resizable={false}
          />
        </AgGridReact>
      </StyledDataGrid>
    </>
  );
};

export default DataGrid;
