import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import fetch from 'isomorphic-unfetch';
import { StyledDataGrid, getGridThemeOverrides, StyledDataGridHeader } from './StyledDataGrid';
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

export const DataGrid = ({
  id,
  columns,
  selection,
  filtering,
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
  height,
  onDeactivateView,
  onActivateView,
  onCreateView,
  onDeleteView,
  onRenameView,
  onPinView,
  onUnpinView,
  onSaveViewState,
  formatSettings = defaultFormatSettings,
  translations = defaultTranslations,
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
      setViewState(view?.viewState!);

      if (view.id && onActivateView) {
        await onActivateView(view.id);
      } else if (onDeactivateView) {
        const activeView = allViews.find((view) => view.active);
        if (activeView) {
          await onDeactivateView(activeView.id);
        }

        view.active = true;
        setAllViews([...allViews.filter((x) => x.id !== id), view]);
      }
    }
  };

  const handleCreateView = async (input: CreateViewInput) => {
    if (onCreateView && onPinView && onActivateView) {
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

  const getValueFormatter = (params: ValueFormatterParams, type?: DataGridColumnType) => {
    const { currency, numberFormat, dateFormat, language, timeFormat, durationFormat } = formatSettings;
    switch (type) {
      case 'currency':
        return formatCurrency(params.value, currency, numberFormat);
      case 'number':
        return formatNumber(params.value, 2, numberFormat);
      case 'date':
        return new TcDate(params.value).format(dateFormat, language);
      case 'time':
        return new TcDate(params.value).format(timeFormat, language);
      case 'duration':
        return formatDuration(params.value, durationFormat, numberFormat);
    }
    return params.value;
  };

  return (
    <>
      <Filters
        columns={gridColumns}
        filtering={filtering}
        grouping={grouping}
        onGrouping={onGrouping}
        onFiltering={onFiltering}
        filterModel={filterModel}
        translations={translations}
      />
      <StyledDataGrid $height={height} className={getGridThemeClassName()}>
        {viewing && (
          <StyledDataGridHeader>
            <DataGridViews
              dataGridId={id}
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
          modules={[ServerSideRowModelModule, RowGroupingModule, CsvExportModule, ExcelExportModule, StatusBarModule]}
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
