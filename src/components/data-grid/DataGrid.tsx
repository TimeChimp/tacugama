import React, { useCallback, useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { StyledDataGrid, getGridThemeOverrides, StyledDataGridHeader } from './styles';
import { RowActionsCell } from './RowActionsCell';
import { StatusBarRowCount } from './StatusBarRowCount';
import { NoRowsTemplate } from './NoRowsTemplate';
import { HeaderCheckbox } from './HeaderCheckbox';
import { HeaderColumnToggle } from './HeaderColumnToggle';
import { LoadingCellTemplate } from './LoadingCellTemplate';
import { Filters } from './filters';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { SetFilterModel, SetFilterModule } from '@ag-grid-enterprise/set-filter';
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
  DateFilterModel,
  SelectionChangedEvent,
} from '@ag-grid-community/core';
import {
  formatCurrency,
  formatNumber,
  formatDuration,
  TcDate,
  sortBy,
  nameOf,
  SupportedLocale,
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
  IFilterType,
  SelectedFilterIds,
} from './types';
import { useTheme } from '../../providers';
import { defaultFormatSettings } from './defaultFormatSettings';
import { defaultTranslations } from './defaultTranslations';
import DataGridViews from './views/DataGridViews';
import { SortAscendingIcon } from './SortAscendingIcon';
import { SortDescendingIcon } from './SortDescendingIcon';
import ReactDOMServer from 'react-dom/server';
import DataGridActions from './DataGridActions';

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
  dates,
  setDates,
  onDeactivateView,
  onActivateView,
  onCreateView,
  onDeleteView,
  onRenameView,
  onPinView,
  onUnpinView,
  onSaveViewState,
  onBulkDelete,
  searchColumns = DEFAULT_SEARCH_COLUMNS,
  formatSettings = defaultFormatSettings,
  translations = defaultTranslations,
  height = DEFAULT_HEIGHT,
}: DataGridProps) => {
  const [gridApi, setGridApi] = useState<GridApi>(new GridApi());
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>(new ColumnApi());
  const [gridColumns, setGridColumns] = useState<DataGridColumn[]>(columns);
  const [allViews, setAllViews] = useState<DataGridView[]>([]);
  const [selectedFilterIds, setSelectedFilterIds] = useState<SelectedFilterIds>({});
  const [rowsSelected, setRowsSelected] = useState<number>(0);

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

  const setViewFilterIds = (filterModel: FilterModel) => {
    setSelectedFilterIds({});

    let filterIds: SelectedFilterIds = {};
    Object.keys(filterModel).forEach((filterName) => {
      const filter = filterModel[filterName];
      if (filter.filterType === 'set') {
        const setFilter = filter as SetFilterModel;
        if (setFilter.values) {
          const values = setFilter.values.filter((value) => typeof value === 'string') as string[];
          filterIds[filterName] = values;
        }
      }

      if (filter.filterType === 'date') {
        const { dateFrom, dateTo } = filter as DateFilterModel;
        if (setDates && dateFrom && dateTo) {
          setDates([new TcDate(dateFrom).toDate(), new TcDate(dateTo).toDate()]);
        }
      }
    });
    setSelectedFilterIds(filterIds);
  };

  const getInitialDateRange = () => {
    const tcDate = new TcDate();
    const startOfMonth = tcDate.startOf('month').toDate();
    const endOfMonth = tcDate.endOf('month').toDate();

    return [startOfMonth, endOfMonth];
  };

  const resetGrid = () => {
    gridColumnApi.resetColumnState();
    gridColumnApi.resetColumnGroupState();

    const filterModel = gridApi.getFilterModel();
    Object.keys(filterModel).forEach((filter) => {
      gridApi.destroyFilter(filter);
    });

    setViewFilterIds({});
    if (setDates) {
      setDates(getInitialDateRange());
    }
  };

  const setViewState = (state: string | null) => {
    if (state) {
      const gridState: DataGridState = JSON.parse(state);

      gridColumnApi.setColumnState(gridState.columnState);
      gridColumnApi.setColumnGroupState(gridState.columnGroupState);
      gridApi.setFilterModel(gridState.filterModel);
      setViewFilterIds(gridState.filterModel);
    } else {
      resetGrid();
    }

    gridApi.onFilterChanged();
    gridApi.sizeColumnsToFit();
  };

  const handleActivateView = async (id: string) => {
    const view = allViews?.find((view) => view.id === id);
    if (view) {
      if (view.id === 'default' && onDeactivateView) {
        // Deactivate current view when selecting the default view
        const activeView = allViews.find((view) => view.active);
        if (activeView) {
          await onDeactivateView(activeView.id);
        }

        view.active = true;
        setAllViews([...allViews.filter((x) => x.id !== id), view]);
      } else if (onActivateView) {
        await onActivateView(view.id);
      }

      setViewState(view.viewState!);
    }
  };

  const handleCreateView = async (input: CreateViewInput) => {
    if (onCreateView) {
      await onCreateView(input);
    }
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

  const createDataGridApi = useCallback(
    (api: GridApi) => {
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
    },
    [onReady],
  );

  const onGridReady = async ({ api, columnApi }: GridReadyEvent) => {
    createDataGridApi(api);

    setGridApi(api);
    setGridColumnApi(columnApi);

    api.sizeColumnsToFit();

    const datasource = createServerSideDatasource();
    api.setServerSideDatasource(datasource);
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
    gridApi.setFilterModel(filters);
    gridApi.onFilterChanged();
  };

  const getValueFormatter = (params: ValueFormatterParams, type?: DataGridColumnType) => {
    if (!params.value) {
      return;
    }
    const { currency, numberFormat, dateFormat, language, timeFormat, durationFormat } = formatSettings;
    const defaultDateFormat = defaultFormatSettings.dateFormat as string;
    const defaultLanguage = defaultFormatSettings.language as SupportedLocale;

    switch (type) {
      case 'currency':
        return formatCurrency(params.value, currency, numberFormat);
      case 'number':
        return formatNumber(params.value, 2, numberFormat);
      case 'date':
        return new TcDate(new Date(params.value)).format(dateFormat ?? defaultDateFormat, language ?? defaultLanguage);
      case 'time':
        if (params.data?.durationOnly) {
          return '';
        }
        return new TcDate(new Date(params.value)).format(timeFormat ?? defaultDateFormat, language ?? defaultLanguage);
      case 'duration':
        return formatDuration(params.value, durationFormat, numberFormat);
    }
    return params.value;
  };

  const getFilterParams = (params: any, columnField?: string) => {
    if (!params) {
      return;
    }
    let values: string[] = [];
    const columnFilter = filters?.find((filter) => filter.columnField === columnField);
    if (columnFilter && columnFilter.values) {
      values = columnFilter.values;
    }
    params.success(values);
  };

  const checkIfSearchColumn = (columnField: string) => searchColumns.includes(columnField);

  const getFilterType = (columnField: string, type?: DataGridColumnType): IFilterType | undefined => {
    const isSearchColumn = checkIfSearchColumn(columnField);
    if (isSearchColumn) {
      return 'agTextColumnFilter';
    }

    if (type === 'date') {
      return 'agDateColumnFilter';
    }
    return 'agSetColumnFilter';
  };

  const onSelectionChanged = (event: SelectionChangedEvent) => {
    const selected = event.api.getSelectedNodes().length;
    setRowsSelected(selected);
  };

  return (
    <>
      <Filters
        api={gridApi}
        columns={gridColumns}
        filtering={filtering}
        filters={filters}
        dates={dates}
        setDates={setDates}
        grouping={grouping}
        onGrouping={onGrouping}
        onFiltering={onFiltering}
        translations={translations}
        searchColumns={searchColumns}
        dateFormat={formatSettings.dateFormat ?? (defaultFormatSettings.dateFormat as string)}
        selectedFilterIds={selectedFilterIds}
        setSelectedFilterIds={setSelectedFilterIds}
      />
      <StyledDataGrid $height={height} className={getGridThemeClassName()}>
        {(viewing || selection) && (
          <StyledDataGridHeader $justifyContent={selection && !viewing ? 'flex-end' : 'space-between'}>
            {viewing && (
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
            )}
            {selection && (
              <DataGridActions
                api={gridApi}
                rowsSelected={rowsSelected}
                translations={translations}
                onBulkDelete={onBulkDelete}
              />
            )}
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
          onSelectionChanged={onSelectionChanged}
          suppressDragLeaveHidesColumns
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
              ReactDOMServer.renderToStaticMarkup(<SortAscendingIcon color={theme.current.colors.colorPrimary} />),
            sortDescending: () =>
              ReactDOMServer.renderToStaticMarkup(<SortDescendingIcon color={theme.current.colors.colorPrimary} />),
          }}
          modules={[
            ServerSideRowModelModule,
            RowGroupingModule,
            CsvExportModule,
            ExcelExportModule,
            StatusBarModule,
            SetFilterModule,
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
          {gridColumns.map(({ field, label, width, rowGroup, hide, sort, type, aggFunc }) => (
            <AgGridColumn
              key={field}
              headerName={label}
              field={field}
              width={width}
              rowGroup={rowGroup}
              hide={hide || rowGroup}
              sort={sort}
              filter={getFilterType(field, type)}
              filterParams={{ values: (params: any) => getFilterParams(params, field) }}
              valueFormatter={(params: ValueFormatterParams) => getValueFormatter(params, type)}
              aggFunc={aggFunc}
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
            pinned={'right'}
          />
        </AgGridReact>
      </StyledDataGrid>
    </>
  );
};

export default DataGrid;
