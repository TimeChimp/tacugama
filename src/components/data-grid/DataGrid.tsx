import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import { StyledDataGrid, getGridThemeOverrides, StyledDataGridHeader, StyledAgGridReact } from './styles';
import { RowActionsCell } from './row-actions-cell';
import { FooterRowCount } from './footer-row-count';
import { FooterPagination } from './footer-pagination';
import { FooterPageSize } from './footer-page-size';
import { NoRowsTemplate } from './no-rows-template';
import { HeaderCheckbox } from './header-checkbox';
import { HeaderColumnToggle } from './header-column-toggle';
import { LoadingCellTemplate } from './loading-cell-template';
import { Filters } from './filters';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { AgGridReact } from '@ag-grid-community/react/lib/agGridReact';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { SetFilterModel, SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { AgGridColumn } from '@ag-grid-community/react';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { LicenseManager } from '@ag-grid-enterprise/core';
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
  FilterModel,
  DataGridResponse,
  DataGridView,
  CreateViewInput,
  IFilterType,
  SelectedFilterIds,
  FilterValue,
  FilterType,
  RowModelType,
  DataGridColumnValueType,
  CustomFilterTypes,
} from './types';
import { useTheme } from '../../providers';
import { defaultFormatSettings } from './defaultFormatSettings';
import { defaultTranslations } from './defaultTranslations';
import { DataGridViews } from './views/data-grid-views';
import ReactDOMServer from 'react-dom/server';
import DataGridActions from './DataGridActions';
import { RowSelect } from '../row-select';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { GroupRowInnerRenderer } from './group-row-inner-renderer';
import { GroupRowInnerTagRenderer } from './group-row-inner-tag-renderer';
import { FlexItem } from '../flex-item';
import { ParagraphSmall } from '../typography';
import { Button } from '../button';
import { Dropdown, DropdownItem } from '../dropdown';
import { ButtonKind } from '../../models';
import { CaretDownIcon, CaretUpIcon, DragDropIcon } from '../icons';
import { HeaderColumnSettings } from './header-column-settings';

const DEFAULT_SEARCH_COLUMNS = ['name'];
const DEFAULT_ROW_MODEL_TYPE = RowModelType.serverSide;
const DEFAULT_HEIGHT = 'calc(100vh - 200px)';
const DEFAULT_ROW_HEIGHT = 40;
const PINNED_COLUMN_WIDTH = 54;

export const DataGrid = ({
  licenseKey,
  rowData,
  columns,
  selection,
  filtering,
  filters,
  grouping,
  viewing,
  onReady,
  dataUrl,
  autoGroupColumnDef,
  rowActionItems,
  columnToggling,
  accessToken,
  customHeaders,
  sortableColumns,
  views,
  settings,
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
  rowModelType = DEFAULT_ROW_MODEL_TYPE,
  searchColumns = DEFAULT_SEARCH_COLUMNS,
  formatSettings = defaultFormatSettings,
  translations = defaultTranslations,
  datepickerTranslations,
  height = DEFAULT_HEIGHT,
  hideDownload = false,
  hideDelete = false,
  treeData = false,
  groupIncludeFooter = false,
  groupIncludeTotalFooter = false,
  enableExport = false,
  suppressRowHoverHighlight = false,
  suppressRowClickSelection = false,
  hideActionWithNoItems = false,
  getServerSideGroupKey,
  getDataPath,
  onSelectionChangedHandler,
  onRowDataUpdated,
  onRowDataChanged,
  onModalClose,
  onModalOpen,
  onFilterModelChange,
  debouncedSearch = false,
  showPagination = true,
  paginationPageSize = 25,
  hasPaginationPanel = true,
  hasFooterRowCount = true,
  isRowDragManaged = false,
  rowHeight = DEFAULT_ROW_HEIGHT,
  getRowHeight,
  showClearFilters = true,
  customActionsCellRender,
  initialShowLessFilters,
  onShowLessFiltersChange,
  setFiltersHeight,
}: DataGridProps) => {
  const datagridRef = useRef<AgGridReact>(null);
  const [gridApi, setGridApi] = useState<GridApi>(new GridApi());
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>(new ColumnApi());
  const [gridColumns, setGridColumns] = useState<DataGridColumn[]>(columns);
  const [allViews, setAllViews] = useState<DataGridView[]>([]);
  const [selectedFilterIds, setSelectedFilterIds] = useState<SelectedFilterIds>({});
  const [rowsSelected, setRowsSelected] = useState<number>(0);
  const [isGridColumnApiLoaded, setIsGridColumnApiLoaded] = useState<boolean>(false);
  const [filterModel, setFilterModel] = useState<Record<string, any>>({});

  const { theme } = useTheme();

  const {
    theme: {
      current: {
        customColors: { dark1 },
        sizing: { scale300, scale500 },
      },
    },
  } = useTheme();

  // note: setting the license key is not working in use effect. Downside is that setLicenseKey is now called multiple times.
  if (licenseKey) {
    LicenseManager.setLicenseKey(licenseKey);
  }

  useEffect(() => {
    if (licenseKey) {
      LicenseManager.setLicenseKey(licenseKey);
    }
  }, [licenseKey]);

  useEffect(() => {
    if (onFilterModelChange) {
      onFilterModelChange(filterModel);
    }
  }, [filterModel, Object.keys(filterModel), Object.values(filterModel)]);

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

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
      minWidth: 150,
      flex: 1,
      suppressMenu: true,
    };
  }, []);

  const getGridThemeClassName = () => {
    return theme.current === theme.dark ? 'ag-theme-alpine-dark' : 'ag-theme-alpine';
  };

  const getSelectedRows = (api: GridApi) => {
    return api.getSelectedRows();
  };

  const deselectAll = (api: GridApi) => {
    return api.deselectAll();
  };

  const sizeColumnsToFit = (api: GridApi) => {
    return api.sizeColumnsToFit();
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
    const rowCount = api?.getDisplayedRowCount();
    // Deselect all rows when refreshing
    api?.deselectAll();
    return api?.refreshServerSideStore({ purge: rowCount === 0 });
  };

  const refreshCells = (api: GridApi) => api.refreshCells();

  const setViewFilterIds = useCallback(
    (filterModel: FilterModel) => {
      setSelectedFilterIds({});

      const filterIds: SelectedFilterIds = {};
      Object.keys(filterModel).forEach((filterName) => {
        const filter = filterModel[filterName];
        if (filter.filterType === 'set') {
          const setFilter = filter as SetFilterModel;
          if (setFilter.values) {
            filterIds[filterName] = setFilter.values;
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
    },
    [setDates],
  );

  const getInitialDateRange = () => {
    const tcDate = new TcDate();
    const startOfMonth = tcDate.startOf('month').toDate();
    const endOfMonth = tcDate.endOf('month').toDate();

    return [startOfMonth, endOfMonth];
  };

  const resetGrid = useCallback(
    (api: GridApi, columnApi: ColumnApi) => {
      columnApi.resetColumnState();
      columnApi.resetColumnGroupState();
      Object.keys(filterModel).forEach((filter) => {
        api.destroyFilter(filter);
      });

      //setViewFilterIds({});
      if (setDates) {
        setDates(getInitialDateRange());
      }
    },
    [setDates, setViewFilterIds, filterModel],
  );

  const setViewState = useCallback(
    (api: GridApi, columnApi: ColumnApi, state: string | null) => {
      if (!api || !columnApi) {
        return;
      }
      if (state) {
        const gridState: DataGridState = JSON.parse(state);

        try {
          columnApi.setColumnState(gridState.columnState);
          columnApi.setColumnGroupState(gridState.columnGroupState);
          //api?.setFilterModel(gridState.filterModel);
          //setViewFilterIds(gridState.filterModel);
        } catch (e) {
          console.error('Error while setting grid state', e);
        }
      } else {
        resetGrid(api, columnApi);
      }

      api?.onFilterChanged();
    },
    [setViewFilterIds, resetGrid],
  );

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
      //setViewFilterIds
      setViewState(gridApi, gridColumnApi, view.viewState);
    }
  };

  const handleCreateView = async (input: CreateViewInput) => {
    if (onCreateView) {
      await onCreateView(input);
    }
  };

  const onFiltering = useCallback(
    (filters: FilterModel) => {
      try {
        setFilterModel(filters);
        gridApi?.onFilterChanged();
        if (rowModelType === RowModelType.clientSide) {
          gridApi?.setFilterModel(filters);
        }
      } catch (error) {
        console.error(error);
      }
    },
    [gridApi, rowModelType],
  );

  const createServerSideDatasource = (): IServerSideDatasource => {
    return {
      getRows: async function (params: IServerSideGetRowsParams) {
        if (dataUrl) {
          try {
            const body = { ...params.request, filterModel };
            let headers: HeadersInit = {
              'Content-Type': 'application/json',
            };

            if (accessToken) {
              headers['Authorization'] = `Bearer ${accessToken}`;
            }

            if (customHeaders) {
              headers = { ...headers, ...customHeaders };
            }

            const response = await fetch(dataUrl, {
              method: 'POST',
              headers,
              body: JSON.stringify(body),
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
        }
      },
    };
  };

  const createDataGridApi = useCallback(
    (api: GridApi, columnApi: ColumnApi) => {
      if (onReady) {
        const dataGridApi: DataGridApi = {
          getSelectedRows: () => getSelectedRows(api),
          getSelectedRow: () => getSelectedRow(api),
          deselectAll: () => deselectAll(api),
          sizeColumnsToFit: () => sizeColumnsToFit(api),
          exportAsCsv: () => exportAsCsv(api),
          exportAsExcel: () => exportAsExcel(api),
          refreshStore: () => refreshStore(api),
          refreshCells: () => refreshCells(api),
          setViewState: (state: string | null) => setViewState(api, columnApi, state),
          datagridRef,
        };
        onReady(dataGridApi);
      }
    },
    [onReady, setViewState],
  );

  const onGridReady = async ({ api, columnApi }: GridReadyEvent) => {
    createDataGridApi(api, columnApi);

    setGridApi(api);
    setGridColumnApi(columnApi);
    setIsGridColumnApiLoaded(true);

    if (rowModelType === RowModelType.serverSide) {
      const datasource = createServerSideDatasource();
      api?.setServerSideDatasource(datasource);
    }
  };

  useEffect(() => {
    if (gridApi) {
      gridApi.setServerSideDatasource(createServerSideDatasource());
    }
  }, [filterModel]);

  const getRowNodeId = (data: any) => {
    return data.hierarchy ?? data.id;
  };

  const onGrouping = (rowGroups: string[]) => {
    const columns = [...gridColumns];
    columns.forEach((c) => {
      c.rowGroup = rowGroups.includes(c.field);
    });
    setGridColumns(columns);
  };

  const clearFilterModel = (columnFilter: string) => {
    setFilterModel((model) => ({ ...model, [columnFilter]: undefined }));
    gridApi?.onFilterChanged();
  };

  const getValueFormatter = (
    params: ValueFormatterParams,
    type?: DataGridColumnValueType,
    customMap?: (value: any) => any,
  ) => {
    const { currency, numberFormat, dateFormat, language, timeFormat, durationFormat } = formatSettings;
    const defaultDateFormat = defaultFormatSettings.dateFormat as string;
    const defaultTimeFormat = defaultFormatSettings.timeFormat as string;
    const defaultLanguage = defaultFormatSettings.language as SupportedLocale;

    if (customMap) {
      params.value = customMap(params);
    }

    if (params.value == null) {
      return '';
    }

    switch (type) {
      case 'currency':
        return formatCurrency(params.value, currency, numberFormat);
      case 'integer':
        return formatNumber(params.value, 0, numberFormat);
      case 'number':
        return formatNumber(params.value, 2, numberFormat);
      case 'date':
        return new TcDate(params.value).format(dateFormat ?? defaultDateFormat, language ?? defaultLanguage);
      case 'time':
        return new TcDate(params.value).format(timeFormat ?? defaultTimeFormat, language ?? defaultLanguage);
      case 'datetime': {
        const date = new TcDate(params.value).format(dateFormat ?? defaultDateFormat, language ?? defaultLanguage);
        const time = new TcDate(params.value).format(timeFormat ?? defaultTimeFormat, language ?? defaultLanguage);
        return `${date} ${time}`;
      }
      case 'duration':
        return formatDuration(params.value, durationFormat, numberFormat);
    }
    return params.value;
  };

  const getFilterParams = (params: any, columnField: string) => {
    if (!params) {
      return;
    }
    let values: FilterValue['value'][] = [];
    const columnFilter = filters?.find((filter) => filter.columnField === columnField);

    if (columnFilter?.values) {
      const columnValues: (FilterValue | string)[] = columnFilter.values;
      values = columnValues.map((value: FilterValue | string) =>
        value && typeof value === 'object' ? value.value : value,
      );
    }
    params.success([...values, '']);
  };

  const checkIfSearchColumn = (columnField: string) => searchColumns.includes(columnField);

  const getFilterType = (columnField: string, type?: DataGridColumnValueType): IFilterType | undefined => {
    if (type === 'date' || type === 'time') {
      return 'agDateColumnFilter';
    }

    const isSearchColumn = checkIfSearchColumn(columnField);
    if (isSearchColumn) {
      return 'agMultiColumnFilter';
    }

    return 'agSetColumnFilter';
  };

  const onSelectionChanged = (event: SelectionChangedEvent) => {
    const selected = event.api.getSelectedNodes();
    onSelectionChangedHandler && onSelectionChangedHandler(selected);
    setRowsSelected(selected.length);
  };

  const getSetValues = (value: FilterValue['value'], type: FilterType, values?: FilterValue['value'][]) => {
    if (!value) {
      return [];
    }

    if (!values || type === FilterType.single) {
      return [value];
    }

    if (values?.includes(value)) {
      return values.filter((x) => x !== value);
    }
    return [...values, value];
  };

  const onSearch = (searchTerm: string) => {
    searchColumns?.forEach((columnField) => {
      filterModel[columnField] = {
        filterType: 'text',
        type: 'contains',
        filter: searchTerm,
      };
    });
    onFiltering(filterModel);
  };

  const onSetFiltering = useCallback(
    (columnField: string, type: FilterType, value: FilterValue['value']) => {
      let currentValues;
      const filter = filters?.find((filter) => filter.columnField === columnField);
      if (filter?.customGetValuerMap) {
        currentValues = filter?.customGetValuerMap?.(filterModel?.[columnField]);
      } else {
        currentValues = filter?.byId ? filterModel?.[columnField]?.ids : filterModel?.[columnField]?.values;
      }

      const values = getSetValues(value, type, currentValues);
      if (!values.length) {
        setFilterModel((model) => ({ ...model, [columnField]: undefined }));
        return gridApi?.onFilterChanged();
      }
      const filterObject = filters?.find((filter) => filter.columnField === columnField);

      let setFilter;
      if (filterObject?.customFilterMap) {
        setFilter = filterObject?.customFilterMap(values);
      } else if (filterObject?.byId) {
        setFilter = {
          ids: values,
          filterType: CustomFilterTypes.ids,
        };
      } else {
        setFilter = {
          values,
          filterType: CustomFilterTypes.set,
        };
      }

      filterModel[columnField] = setFilter;

      onFiltering(filterModel);
    },
    [gridApi, filters, filterModel, onFiltering],
  );

  const filterOnValue = useCallback(
    (columnField: string, value: FilterValue['value'], type: FilterType) => {
      onSetFiltering(columnField, type, value);

      setSelectedFilterIds((currentIds) => {
        if (!currentIds[columnField] || type === FilterType.single) {
          return {
            ...currentIds,
            [columnField]: [value],
          };
        }
        if (value && currentIds[columnField].includes(value)) {
          return {
            ...currentIds,
            [columnField]: currentIds[columnField].filter((currentId) => currentId !== value),
          };
        }
        return { ...currentIds, [columnField]: [...currentIds[columnField], value] };
      });
    },
    [setSelectedFilterIds, onSetFiltering],
  );

  // Date format that is send as part of the query request
  const getDateFormat = useCallback((date: Date) => new TcDate(date).getDateWithoutTimeAsUTC().toISOString(), []);

  const filterOnDate = useCallback(
    (columnField: string, selectedDates: Date[]) => {
      const dateFilter: DateFilterModel = {
        filterType: 'date',
        type: 'inRange',
        dateFrom: getDateFormat(selectedDates[0]),
        dateTo: getDateFormat(selectedDates[1]),
      };

      filterModel[columnField] = dateFilter;
      onFiltering(filterModel);
    },
    [getDateFormat, filterModel, onFiltering],
  );

  const setFilterDefaultValues = useCallback(() => {
    const defaultFilterValues = filters?.filter((filter) => !!filter.defaultValue);
    const dateFilters = filters?.filter((filter) => filter.type === FilterType.date);

    if (dates?.length && dateFilters?.length) {
      filterOnDate(dateFilters[0].columnField, dates);
    }

    if (defaultFilterValues?.length) {
      defaultFilterValues.forEach(({ columnField, defaultValue, type }) => {
        if (Array.isArray(defaultValue) && defaultValue.length > 0) {
          defaultValue.forEach((val) => {
            filterOnValue(columnField, val, type);
          });
        } else if (defaultValue) {
          filterOnValue(columnField, defaultValue, type);
        }
      });
    }
  }, [filterOnValue, filterOnDate, filters, dates]);

  const onFirstDataRendered = () => {
    const activeView = allViews?.find((view) => view.active);
    if (activeView && activeView.viewState) {
      return setViewState(gridApi, gridColumnApi, activeView.viewState);
    }

    return setFilterDefaultValues();
  };

  useEffect(() => {
    const filterModelKeys = Object.keys(filterModel);
    let needFilterUpdate = false;

    filters?.map((filter) => {
      if (filter.type === FilterType.settings) {
        const values = getSetValues(filter.defaultValue || '', filter.type, filter.values as FilterValue['value'][]);

        if (!filterModelKeys.find((item) => item === filter.columnField) || !filterModel[filter.columnField]) {
          setFilterModel((model) => ({
            ...model,
            [filter.columnField]: filter.customFilterMap ? filter.customFilterMap(values || []) : filter,
          }));

          needFilterUpdate = true;
        }
      }
    });

    filterModelKeys.map((key) => {
      if (!filters?.find((filter) => filter.columnField === key)) {
        setFilterModel((model) => ({ ...model, [key]: undefined }));
        needFilterUpdate = true;
      }
    });

    if (!filters?.length && filterModelKeys.length) {
      setFilterModel({});
      needFilterUpdate = true;
    }

    if (needFilterUpdate) {
      gridApi?.onFilterChanged();
    }
  }, [filters]);

  const isServerSideGroup = (dataItem: any) => {
    return !!dataItem.children?.length;
  };

  const columnCellRenderer = useMemo(() => {
    if (rowActionItems?.length) {
      return 'moreActionsCell';
    }
    return '';
  }, [rowActionItems]);

  const showDataGridHeader = useMemo(
    () => viewing || settings?.length || (selection && !(hideDelete && hideDownload)),
    [viewing, selection, hideDelete, hideDownload, settings],
  );

  const selectedGroupOption = columns.filter((x) => x.groupable).find((column) => column.rowGroup);

  const handleGrouping = (field: string) => {
    if (selectedGroupOption?.field === field) {
      onGrouping([]);
    } else {
      onGrouping([field]);
    }
  };

  const options: DropdownItem[] = columns
    .filter((x) => x.groupable)
    .map((column) => {
      return {
        id: column.field,
        label: column.label || '',
        isBold: column.rowGroup,
        action: () => handleGrouping(column.field),
      };
    });

  return (
    <>
      <Filters
        api={gridApi}
        columns={gridColumns}
        filtering={filtering}
        filters={filters}
        dates={dates}
        setDates={setDates}
        onFiltering={setFilterModel}
        translations={translations}
        datepickerTranslations={datepickerTranslations}
        searchColumns={searchColumns}
        dateFormat={formatSettings.dateFormat ?? (defaultFormatSettings.dateFormat as string)}
        selectedFilterIds={selectedFilterIds}
        setSelectedFilterIds={setSelectedFilterIds}
        filterOnValue={filterOnValue}
        filterOnDate={filterOnDate}
        debouncedSearch={debouncedSearch}
        clearFilterModel={clearFilterModel}
        onSearch={onSearch}
        showClearFilters={showClearFilters}
        initialShowLessFilters={initialShowLessFilters}
        onShowLessFiltersChange={onShowLessFiltersChange}
        setFiltersHeight={setFiltersHeight}
      />
      <StyledDataGrid $height={height} className={getGridThemeClassName()}>
        {showDataGridHeader && (
          <StyledDataGridHeader $justifyContent={!selection ? 'flex-end' : 'space-between'}>
            {(selection || enableExport) && (
              <DataGridActions
                gridApi={gridApi}
                gridColumnApi={gridColumnApi}
                columns={gridColumns}
                rowsSelected={rowsSelected}
                translations={translations}
                onBulkDelete={onBulkDelete}
                hideDownload={hideDownload}
                hideDelete={hideDelete}
              />
            )}
            <FlexItem width="auto" gap={scale300}>
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
                  onModalClose={onModalClose}
                  onModalOpen={onModalOpen}
                />
              )}
              {grouping && (
                <>
                  <FlexItem width="auto">
                    <ParagraphSmall marginRight={scale500}>{translations.groupBy}</ParagraphSmall>
                    <Dropdown items={options}>
                      <Button kind={ButtonKind.tertiary}>
                        {selectedGroupOption?.label ?? translations.none}
                        <FlexItem marg4={scale500}>
                          <CaretDownIcon color={dark1} />
                        </FlexItem>
                      </Button>
                    </Dropdown>
                  </FlexItem>
                </>
              )}
              {isGridColumnApiLoaded && columnToggling && (
                <HeaderColumnToggle api={gridApi} columnApi={gridColumnApi} />
              )}
              {!!settings?.length && <HeaderColumnSettings settings={settings} />}
            </FlexItem>
          </StyledDataGridHeader>
        )}
        <style>{getGridThemeOverrides(theme.current)}</style>
        <StyledAgGridReact
          ref={datagridRef}
          rowData={rowData}
          rowSelection="multiple"
          rowModelType={rowModelType}
          immutableData={rowModelType === RowModelType.clientSide}
          serverSideStoreType={ServerSideStoreType.Partial}
          defaultColDef={defaultColDef}
          rowDragManaged={isRowDragManaged}
          treeData={treeData}
          isServerSideGroup={isServerSideGroup}
          getServerSideGroupKey={getServerSideGroupKey}
          getDataPath={getDataPath}
          noRowsOverlayComponent="noRowsTemplate"
          loadingCellRenderer="loadingCellTemplate"
          animateRows
          suppressAggFuncInHeader
          autoGroupColumnDef={
            autoGroupColumnDef ?? {
              cellRendererParams: {
                suppressCount: false,
                checkbox: false,
              },
            }
          }
          groupIncludeFooter={groupIncludeFooter}
          groupIncludeTotalFooter={groupIncludeTotalFooter}
          groupSelectsChildren={!treeData && true}
          pagination={showPagination}
          paginationPageSize={paginationPageSize}
          suppressPaginationPanel={hasPaginationPanel}
          suppressRowHoverHighlight={suppressRowHoverHighlight}
          suppressRowClickSelection={suppressRowClickSelection}
          enableCellTextSelection
          onGridReady={onGridReady}
          onRowDataUpdated={onRowDataUpdated}
          onRowDataChanged={onRowDataChanged}
          getRowNodeId={getRowNodeId}
          onFirstDataRendered={onFirstDataRendered}
          onSelectionChanged={onSelectionChanged}
          suppressDragLeaveHidesColumns
          cacheBlockSize={paginationPageSize}
          maxBlocksInCache={10}
          blockLoadDebounceMillis={100}
          headerHeight={40}
          rowHeight={rowHeight}
          getRowHeight={getRowHeight}
          frameworkComponents={{
            moreActionsCell: (props: any) =>
              !customActionsCellRender ? (
                <RowActionsCell {...props} hideWithNoItems={hideActionWithNoItems} />
              ) : (
                customActionsCellRender(props)
              ),
            footerRowCount: hasFooterRowCount ? FooterRowCount : null,
            footerPagination: showPagination ? FooterPagination : null,
            footerPageSize: paginationPageSize ? FooterPageSize : null,
            noRowsTemplate: () => <NoRowsTemplate translations={translations} />,
            headerCheckbox: HeaderCheckbox,
            loadingCellTemplate: LoadingCellTemplate,
            rowSelect: RowSelect,
            groupRowInnerRenderer: GroupRowInnerRenderer,
            groupRowInnerTagRenderer: GroupRowInnerTagRenderer,
          }}
          icons={{
            rowDrag: () => ReactDOMServer.renderToStaticMarkup(<DragDropIcon color={theme.current.colors.primaryA} />),
            sortAscending: () =>
              ReactDOMServer.renderToStaticMarkup(<CaretDownIcon color={theme.current.colors.primaryA} />),
            sortDescending: () =>
              ReactDOMServer.renderToStaticMarkup(<CaretUpIcon color={theme.current.colors.primaryA} />),
          }}
          modules={[
            ClientSideRowModelModule,
            ServerSideRowModelModule,
            RowGroupingModule,
            CsvExportModule,
            ExcelExportModule,
            StatusBarModule,
            SetFilterModule,
          ]}
          statusBar={{
            statusPanels: [
              ...(hasFooterRowCount
                ? [
                    {
                      statusPanel: 'footerRowCount',
                      statusPanelParams: {
                        translations,
                      },
                      align: 'left',
                    },
                  ]
                : []),
              ...(showPagination
                ? [
                    {
                      statusPanel: 'footerPagination',
                      statusPanelParams: {
                        translations,
                      },
                      align: 'center',
                    },
                  ]
                : []),
              ...(paginationPageSize
                ? [
                    {
                      statusPanel: 'footerPageSize',
                      statusPanelParams: {
                        translations,
                      },
                      align: 'right',
                    },
                  ]
                : []),
            ],
          }}
          tooltipShowDelay={0}
          colResizeDefault="shift"
        >
          <AgGridColumn
            hide={!selection}
            headerName={''}
            field={''}
            checkboxSelection={selection}
            headerComponent={selection ? 'headerCheckbox' : ''}
            minWidth={PINNED_COLUMN_WIDTH}
            maxWidth={PINNED_COLUMN_WIDTH}
            sortable={false}
            resizable={false}
            lockPosition
            pinned={'left'}
          />
          {gridColumns.map(
            ({
              field,
              label,
              width,
              rowGroup,
              hide,
              sort,
              sortable,
              valueType,
              aggFunc,
              customMap,
              customComponent,
              rowSelectProps,
              ...rest
            }) => (
              <AgGridColumn
                cellRendererFramework={customComponent}
                cellRenderer={rowSelectProps ? 'rowSelect' : undefined}
                cellRendererParams={rowSelectProps ? { ...rowSelectProps } : undefined}
                key={field}
                headerName={label}
                field={field}
                width={width}
                rowGroup={rowGroup}
                hide={hide || rowGroup}
                sort={sort}
                filter={getFilterType(field, valueType)}
                filterParams={{ values: (params: any) => getFilterParams(params, field) }}
                valueFormatter={(params: ValueFormatterParams) => getValueFormatter(params, valueType, customMap)}
                aggFunc={aggFunc}
                sortable={sortable ?? sortableColumns}
                cellClass={valueType === 'currency' ? 'ag-right-aligned-cell' : ''}
                headerClass={valueType === 'currency' ? 'ag-right-aligned-header' : ''}
                resizable
                {...rest}
              />
            ),
          )}
          <AgGridColumn
            headerName={''}
            field={''}
            headerComponent={''}
            headerComponentParams={{
              translations,
            }}
            cellRenderer={columnCellRenderer}
            cellRendererParams={{
              data: { items: rowActionItems, api: gridApi },
            }}
            type="rightAligned"
            minWidth={PINNED_COLUMN_WIDTH}
            maxWidth={rowActionItems?.length || columnToggling ? PINNED_COLUMN_WIDTH : 0}
            sortable={false}
            resizable={false}
            pinned={'right'}
          />
        </StyledAgGridReact>
      </StyledDataGrid>
    </>
  );
};

export default DataGrid;
