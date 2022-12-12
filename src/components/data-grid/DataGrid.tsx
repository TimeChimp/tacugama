import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import {
  StyledDataGrid,
  getGridThemeOverrides,
  StyledDataGridHeader,
  StyledAgGridReact,
  StyledDataGridDivider,
} from './styles';
import { RowActionsCell } from './row-actions-cell';
import { FooterRowCount } from './footer-row-count';
import { FooterPagination } from './footer-pagination';
import { FooterPageSize } from './footer-page-size';
import { NoRowsTemplate } from './no-rows-template';
import { HeaderComponentFramework } from './header-component-framework';
import { HeaderCheckbox } from './header-checkbox';
import { HeaderColumnToggle } from './header-column-toggle';
import { LoadingCellTemplate } from './loading-cell-template';
import { Filters } from './filters';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
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
import { SortAscendingIcon } from './sort-ascending-icon';
import { SortDescendingIcon } from './sort-descending-icon';
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
import { ArrowDown, Pencil } from '../icons';

const DEFAULT_SEARCH_COLUMNS = ['name'];
const DEFAULT_ROW_MODEL_TYPE = RowModelType.serverSide;
const DEFAULT_HEIGHT = 'calc(100vh - 200px)';

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
  sortableColumns,
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
  onRowEdit,
  onRowEditIcon,
  rowModelType = DEFAULT_ROW_MODEL_TYPE,
  searchColumns = DEFAULT_SEARCH_COLUMNS,
  formatSettings = defaultFormatSettings,
  translations = defaultTranslations,
  height = DEFAULT_HEIGHT,
  hideDownload = false,
  hideDelete = false,
  treeData = false,
  groupIncludeFooter = false,
  groupIncludeTotalFooter = false,
  enableExport = false,
  suppressRowHoverHighlight = false,
  suppressRowClickSelection = false,
  getServerSideGroupKey,
  getDataPath,
  onSelectionChangedHandler,
  onRowDataUpdated,
  onRowDataChanged,
  onModalClose,
  onModalOpen,
  debouncedSearch = false,
}: DataGridProps) => {
  const datagridRef = useRef<HTMLDivElement>(null);
  const [gridApi, setGridApi] = useState<GridApi>(new GridApi());
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>(new ColumnApi());
  const [gridColumns, setGridColumns] = useState<DataGridColumn[]>(columns);
  const [allViews, setAllViews] = useState<DataGridView[]>([]);
  const [selectedFilterIds, setSelectedFilterIds] = useState<SelectedFilterIds>({});
  const [rowsSelected, setRowsSelected] = useState<number>(0);
  const [isGridColumnApiLoaded, setIsGridColumnApiLoaded] = useState<boolean>(false);
  const [filterModel, setFilterModel] = useState<{ [key: string]: any }>({});

  const { theme } = useTheme();

  const {
    theme: {
      current: {
        sizing: { scale300, scale500 },
        customColors: { dark1 },
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

  const refreshCells = (api: GridApi) => api.refreshCells();

  const onGridSizeChanged = () => {
    gridApi?.sizeColumnsToFit();
  };

  const setViewFilterIds = useCallback(
    (filterModel: FilterModel) => {
      setSelectedFilterIds({});

      let filterIds: SelectedFilterIds = {};
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

      setViewFilterIds({});
      if (setDates) {
        setDates(getInitialDateRange());
      }
    },
    [setDates, setViewFilterIds, filterModel],
  );

  const setViewState = useCallback(
    (api: GridApi, columnApi: ColumnApi, state: string | null) => {
      if (state) {
        const gridState: DataGridState = JSON.parse(state);

        columnApi.setColumnState(gridState.columnState);
        columnApi.setColumnGroupState(gridState.columnGroupState);
        api?.setFilterModel(gridState.filterModel);
        setViewFilterIds(gridState.filterModel);
      } else {
        resetGrid(api, columnApi);
      }

      api?.onFilterChanged();
      api?.sizeColumnsToFit();
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

      setViewState(gridApi, gridColumnApi, view.viewState!);
    }
  };

  const handleCreateView = async (input: CreateViewInput) => {
    if (onCreateView) {
      await onCreateView(input);
    }
  };

  const onFiltering = useCallback(
    (filters: FilterModel) => {
      setFilterModel(filters);
      gridApi.onFilterChanged();
      if (rowModelType === RowModelType.clientSide) {
        gridApi.setFilterModel(filters);
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
            const response = await fetch(dataUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
              },
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

    api?.sizeColumnsToFit();

    if (rowModelType === RowModelType.serverSide) {
      const datasource = createServerSideDatasource();
      api.setServerSideDatasource(datasource);
    }
  };

  useEffect(() => {
    if (gridApi) {
      gridApi.setServerSideDatasource(createServerSideDatasource());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterModel]);

  const getRowNodeId = (data: any) => {
    return data.hierarchy ?? data.id;
  };

  const onGrouping = (rowGroups: string[]) => {
    let columns = [...gridColumns];
    columns.forEach((c) => {
      c.rowGroup = rowGroups.includes(c.field);
    });
    setGridColumns(columns);
  };

  const clearFilterModel = (columnFilter: string) => {
    setFilterModel((model) => ({ ...model, [columnFilter]: undefined }));
    gridApi.onFilterChanged();
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
      return 'agTextColumnFilter';
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

    if (!values || type === FilterType.select) {
      return [value];
    }

    if (values?.includes(value)) {
      return values.filter((x) => x !== value);
    }
    return [...values, value];
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
        return gridApi.onFilterChanged();
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
        if (!currentIds[columnField] || type === FilterType.select) {
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
        if (defaultValue) {
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

  const isServerSideGroup = (dataItem: any) => {
    return !!dataItem.children?.length;
  };

  const columnCellRenderer = useMemo(() => {
    if (rowActionItems || !!onRowEdit) {
      return 'moreActionsCell';
    }
    return '';
  }, [rowActionItems, onRowEdit]);

  const showDataGridHeader = useMemo(() => viewing || (selection && !(hideDelete && hideDownload)), [
    viewing,
    selection,
    hideDelete,
    hideDownload,
  ]);

  const dataGridHeight = useMemo(() => {
    const headerHeight = showDataGridHeader ? 45 : 0;
    return `calc(100% - ${headerHeight}px)`;
  }, [showDataGridHeader]);

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
        icon: column.rowGroup ? <Pencil size={scale500} /> : <></>,
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
        grouping={grouping}
        onGrouping={onGrouping}
        onFiltering={setFilterModel}
        translations={translations}
        searchColumns={searchColumns}
        dateFormat={formatSettings.dateFormat ?? (defaultFormatSettings.dateFormat as string)}
        selectedFilterIds={selectedFilterIds}
        setSelectedFilterIds={setSelectedFilterIds}
        filterOnValue={filterOnValue}
        filterOnDate={filterOnDate}
        debouncedSearch={debouncedSearch}
        clearFilterModel={clearFilterModel}
      />
      <StyledDataGrid $height={height} className={getGridThemeClassName()}>
        {showDataGridHeader && (
          <StyledDataGridHeader $justifyContent={selection && !viewing ? 'flex-end' : 'space-between'}>
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
            <FlexItem width="auto">
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
                  <StyledDataGridDivider />
                  <FlexItem width="auto">
                    <ParagraphSmall marginRight={scale500}>{translations.groupBy}</ParagraphSmall>
                    <Dropdown items={options}>
                      <Button kind="tertiary">
                        <ParagraphSmall $style={{ cursor: 'pointer' }} color={dark1}>
                          {selectedGroupOption?.label ?? translations.none}
                        </ParagraphSmall>
                        <FlexItem marg4={scale500}>
                          <ArrowDown size={scale300} color={dark1} />
                        </FlexItem>
                      </Button>
                    </Dropdown>
                  </FlexItem>
                </>
              )}
              <StyledDataGridDivider />
              {isGridColumnApiLoaded && (
                <HeaderColumnToggle api={gridApi} columnApi={gridColumnApi} translations={translations} />
              )}
            </FlexItem>
          </StyledDataGridHeader>
        )}
        <style>{getGridThemeOverrides(theme.current)}</style>
        <StyledAgGridReact
          $height={dataGridHeight}
          // @ts-expect-error - ag-grid-react typings are wrong
          ref={datagridRef}
          rowData={rowData}
          rowSelection="multiple"
          rowModelType={rowModelType}
          immutableData={rowModelType === RowModelType.clientSide}
          serverSideStoreType={ServerSideStoreType.Partial}
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
          pagination
          paginationPageSize={25}
          suppressPaginationPanel
          suppressRowHoverHighlight={suppressRowHoverHighlight}
          suppressRowClickSelection={suppressRowClickSelection}
          enableCellTextSelection
          onGridReady={onGridReady}
          onRowDataUpdated={onRowDataUpdated}
          onRowDataChanged={onRowDataChanged}
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
            footerRowCount: FooterRowCount,
            footerPagination: FooterPagination,
            footerPageSize: FooterPageSize,
            noRowsTemplate: () => <NoRowsTemplate translations={translations} />,
            headerCheckbox: HeaderCheckbox,
            loadingCellTemplate: LoadingCellTemplate,
            rowSelect: RowSelect,
            groupRowInnerRenderer: GroupRowInnerRenderer,
            groupRowInnerTagRenderer: GroupRowInnerTagRenderer,
          }}
          icons={{
            sortAscending: () =>
              ReactDOMServer.renderToStaticMarkup(<SortAscendingIcon color={theme.current.colors.colorPrimary} />),
            sortDescending: () =>
              ReactDOMServer.renderToStaticMarkup(<SortDescendingIcon color={theme.current.colors.colorPrimary} />),
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
              {
                statusPanel: 'footerRowCount',
                statusPanelParams: {
                  translations,
                },
                align: 'left',
              },
              {
                statusPanel: 'footerPagination',
                statusPanelParams: {
                  translations,
                },
                align: 'center',
              },
              {
                statusPanel: 'footerPageSize',
                statusPanelParams: {
                  translations,
                },
                align: 'right',
              },
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
            minWidth={40}
            maxWidth={40}
            sortable={false}
            resizable={false}
            lockPosition
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
              customHeaderComponent,
              customComponent,
              rowSelectProps,
              ...rest
            }) => (
              <AgGridColumn
                cellRendererFramework={customComponent}
                cellRenderer={!!rowSelectProps ? 'rowSelect' : undefined}
                cellRendererParams={!!rowSelectProps ? { ...rowSelectProps } : undefined}
                headerComponentFramework={() => <HeaderComponentFramework label={label} />}
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
              data: { items: rowActionItems, onEdit: onRowEdit, icon: onRowEditIcon, api: gridApi },
            }}
            type="rightAligned"
            minWidth={60}
            maxWidth={rowActionItems?.length || columnToggling ? 60 : 0}
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
