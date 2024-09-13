import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { SetFilterModule } from '@ag-grid-enterprise/set-filter';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { LicenseManager } from '@ag-grid-enterprise/core';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import {
  GridApi,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  GridReadyEvent,
  DateFilterModel,
  SelectionChangedEvent,
  ColDef,
  IGroupCellRendererParams,
  StatusPanelDef,
  GetRowIdParams,
} from '@ag-grid-community/core';
import { TcDate, sortBy, nameOf, SupportedLocale } from '@timechimp/timechimp-typescript-helpers';

import {
  DataGridApi,
  DataGridColumn,
  DataGridProps,
  DataGridState,
  FilterModel,
  DataGridResponse,
  DataGridView,
  CreateViewInput,
  SelectedFilterIds,
  FilterValue,
  FilterType,
  RowModelType,
  CustomFilterTypes,
  Filter,
} from './types';
import { useTheme } from '../../providers';
import { defaultFormatSettings } from './defaultFormatSettings';
import { defaultTranslations } from './defaultTranslations';
import { DataGridViews } from './views/data-grid-views';
import ReactDOMServer from 'react-dom/server';
import DataGridActions from './DataGridActions';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { GroupRowInnerRenderer } from './group-row-inner-renderer';
import { GroupRowInnerTagRenderer } from './group-row-inner-tag-renderer';
import { FlexItem } from '../flex-item';
import { ParagraphSmall } from '../typography';
import { Button } from '../button';
import { Dropdown, DropdownItem } from '../dropdown';
import { ButtonKind, QuickSelectDateOption } from '../../models';
import { HeaderColumnSettings } from './header-column-settings';
import { CaretDown, CaretUp, DotsSix } from '@phosphor-icons/react';

const DEFAULT_SEARCH_COLUMNS = ['name'];
const DEFAULT_ROW_MODEL_TYPE = RowModelType.serverSide;
const DEFAULT_HEIGHT = 'calc(100vh - 200px)';
const DEFAULT_ROW_HEIGHT = 40;
const PINNED_COLUMN_WIDTH = 54;
const EMPTY_GROUP = 'EmptyGroup';

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
  enableExport = false,
  suppressRowHoverHighlight = false,
  suppressRowClickSelection = false,
  hideActionWithNoItems = false,
  getServerSideGroupKey,
  getDataPath,
  onSelectionChangedHandler,
  onRowDataUpdated,
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
  defaultDateQuickSelect = QuickSelectDateOption.THIS_YEAR,
  exportFileName,
  setIsGrouping,
  defaultSearch,
}: DataGridProps) => {
  const [gridApi, setGridApi] = useState<GridApi>(new GridApi());
  const [gridColumns, setGridColumns] = useState<DataGridColumn[]>(columns || []);
  const selectedGroupOption = useMemo(
    () => gridColumns?.filter((x) => x?.groupable)?.find((column) => column?.rowGroup),
    [gridColumns],
  );

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
      minWidth: 150,
      flex: 1,
      suppressHeaderMenuButton: true,
      lockPinned: true,
    };
  }, []);

  const defaultAutoGroupColumnDef = useMemo<ColDef>(() => {
    return {
      headerName: selectedGroupOption?.headerName,
      field: selectedGroupOption?.field,
      minWidth: 200,
      cellRenderer: 'agGroupCellRenderer',
      headerCheckboxSelection: true,
      pinned: true,
      resizable: false,
      cellRendererParams: {
        checkbox: true,
      } as IGroupCellRendererParams,
    };
  }, [selectedGroupOption]);

  const checkboxColumn: DataGridColumn = useMemo(() => {
    return {
      field: '',
      headerName: '',
      minWidth: PINNED_COLUMN_WIDTH,
      maxWidth: PINNED_COLUMN_WIDTH,
      sortable: false,
      resizable: false,
      pinned: 'left',
      editable: false,
      lockPosition: true,
      checkboxSelection: true,
      headerComponent: 'headerCheckbox',
      hide: selectedGroupOption || !selection ? true : false,
    };
  }, [selectedGroupOption, selection]);

  const rowActionColumn: DataGridColumn = useMemo(() => {
    return {
      field: '',
      headerName: '',
      minWidth: PINNED_COLUMN_WIDTH,
      maxWidth: PINNED_COLUMN_WIDTH,
      sortable: false,
      resizable: false,
      pinned: 'right',
      editable: false,
      lockPosition: true,
      headerComponentParams: { translations },
      cellRenderer: 'moreActionsCell',
      cellRendererParams: {
        data: { items: rowActionItems, api: gridApi },
      },
      hide: rowActionItems?.length ? false : true,
    };
  }, [rowActionItems]);

  const columnDefs: ColDef[] = useMemo(() => {
    const updatedColumns = gridColumns?.map((column) => {
      const newColumn = { ...column };
      delete newColumn?.groupable;
      delete newColumn?.rowGroupField;
      return newColumn;
    });

    return [checkboxColumn, ...updatedColumns, rowActionColumn];
  }, [checkboxColumn, rowActionColumn, gridColumns]);

  const [allViews, setAllViews] = useState<DataGridView[]>(views ?? []);
  const [selectedFilterIds, setSelectedFilterIds] = useState<SelectedFilterIds>({});
  const [rowsSelected, setRowsSelected] = useState<number>(0);
  const [isGridColumnApiLoaded, setIsGridColumnApiLoaded] = useState<boolean>(false);
  const [isDataRendered, setIsDataRendered] = useState<boolean>(false);
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
    // Deselect all rows when refreshing
    api?.deselectAll();
    return api?.refreshServerSide({ purge: true });
  };

  const refreshCells = (api: GridApi) => api.refreshCells();

  const resetGrid = useCallback(
    (api: GridApi) => {
      api?.resetColumnState();
      api?.resetColumnGroupState();
    },
    [setDates, filterModel],
  );

  const setViewState = useCallback(
    (api: GridApi, state: string | null) => {
      if (!api) {
        return;
      }
      if (state) {
        const gridState: DataGridState = JSON.parse(state);

        try {
          api?.applyColumnState({ state: gridState.columnState, applyOrder: true });
          api?.setColumnGroupState(gridState.columnGroupState);
          if (gridState?.pageSize) {
            api?.setGridOption('paginationPageSize', gridState.pageSize);
          }
        } catch (e) {
          console.error('Error while setting grid state', e);
        }
      } else {
        resetGrid(api);
      }

      api?.onFilterChanged();
    },
    [resetGrid],
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

      setViewState(gridApi, view.viewState);
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
          const rowGroupCols = gridColumns
            ?.filter((x) => x?.rowGroup)
            ?.map((column) => {
              return {
                id: column?.rowGroupField || column?.field,
                displayName: column?.headerName || '',
                field: column?.rowGroupField || column?.field,
              };
            });
          const groupKeys = params?.parentNode?.data ? [params?.parentNode?.data[rowGroupCols[0]?.field]] : [];
          try {
            const body = {
              ...params.request,
              filterModel,
              rowGroupCols,
              groupKeys,
            };
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

            const rowDataCopy = rowData?.map((item) => {
              if (selectedGroupOption && item[selectedGroupOption.field] === EMPTY_GROUP) {
                item[selectedGroupOption?.field] = translations?.emptyGroup[selectedGroupOption?.field];
                return item;
              }
              return item;
            });

            return params.success({
              rowData: rowDataCopy,
              rowCount,
            });
          } catch (error) {
            return params.fail();
          }
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
          deselectAll: () => deselectAll(api),
          sizeColumnsToFit: () => sizeColumnsToFit(api),
          exportAsCsv: () => exportAsCsv(api),
          exportAsExcel: () => exportAsExcel(api),
          refreshStore: () => refreshStore(api),
          refreshCells: () => refreshCells(api),
          setViewState: (state: string | null) => setViewState(api, state),
          api,
        };
        onReady(dataGridApi);
      }
    },
    [onReady, setViewState],
  );

  const onGridReady = async ({ api }: GridReadyEvent) => {
    setGridApi(api);
    createDataGridApi(api);
    setIsGridColumnApiLoaded(true);
  };

  useEffect(() => {
    if (isGridColumnApiLoaded) {
      onFirstDataRendered();
      setIsDataRendered(true);
    }
  }, [isGridColumnApiLoaded]);

  useEffect(() => {
    if (isDataRendered && rowModelType === RowModelType.serverSide) {
      const datasource = createServerSideDatasource();
      gridApi?.setGridOption('serverSideDatasource', datasource);
    }
  }, [isDataRendered, filterModel, dataUrl]);

  const getRowId = (params: GetRowIdParams) => {
    return params.data.id;
  };

  const onGrouping = (rowGroups: string[]) => {
    const groupColumns = [...gridColumns];
    groupColumns?.forEach((c) => {
      c.rowGroup = rowGroups?.includes(c?.field);
      c.hide = rowGroups?.includes(c?.field);
      c.sort = null;
    });
    setGridColumns(groupColumns);
    gridApi?.deselectAll();
  };

  const clearFilterModel = (columnFilter: string) => {
    setFilterModel((model) => ({ ...model, [columnFilter]: undefined }));

    const filter = filters?.find((filter) => filter.columnField === columnFilter);

    if (filter?.setExtraFilterModelValue) {
      const currentFilters = filter?.setExtraFilterModelValue([]);

      if (currentFilters) {
        currentFilters.map((item) => (filterModel[item.name] = item.values ?? undefined));
      }
    }
    gridApi?.onFilterChanged();
  };

  const onSelectionChanged = (event: SelectionChangedEvent) => {
    const selected = event?.api?.getSelectedNodes();
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
        filter: searchTerm?.trim(),
      };
    });
    onFiltering(filterModel);
  };

  const getSetFilterObject = (values: (string | number | boolean | null)[], filterObject?: Filter) => {
    if (filterObject?.customFilterMap) {
      return filterObject?.customFilterMap(values);
    }
    if (filterObject?.byId) {
      return {
        ids: values,
        filterType: CustomFilterTypes.ids,
      };
    }
    return {
      values,
      filterType: CustomFilterTypes.set,
    };
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

      if (filter?.setExtraFilterModelValue) {
        const currentFilters = filter?.setExtraFilterModelValue(values);

        if (currentFilters) {
          currentFilters.map((item) => (filterModel[item.name] = item.values ?? undefined));
        }
      }

      if (!values.length) {
        setFilterModel((model) => ({ ...model, [columnField]: undefined }));
        return gridApi?.onFilterChanged();
      }
      const filterObject = filters?.find((filter) => filter.columnField === columnField);
      filterModel[columnField] = getSetFilterObject(values, filterObject);

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

  const filterOnMultiValues = useCallback(
    (columnField: string, values: FilterValue['value'][]) => {
      if (!values.length) {
        console.log('setFilterModel4', filterModel, columnField);
        setFilterModel((model) => ({ ...model, [columnField]: undefined }));
        return gridApi?.onFilterChanged();
      }
      const filterObject = filters?.find((filter) => filter.columnField === columnField);

      filterModel[columnField] = getSetFilterObject(values, filterObject);

      const filter = filters?.find((filter) => filter.columnField === columnField);

      if (filter?.setExtraFilterModelValue) {
        const currentFilters = filter?.setExtraFilterModelValue(values);

        if (currentFilters) {
          currentFilters.map((item) => (filterModel[item.name] = item.values ?? undefined));
        }
      }

      onFiltering(filterModel);

      setSelectedFilterIds((currentIds) => ({
        ...currentIds,
        [columnField]: values,
      }));
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
      setViewState(gridApi, activeView.viewState);
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
      // Set filter to undefined if filter is present in the filter model but not in the filters array
      // Ignore search columns if search is enabled
      if (!filters?.find((filter) => filter.columnField === key) && (!searchColumns?.includes(key) || !filtering)) {
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

  const showDataGridHeader = useMemo(
    () => viewing || settings?.length || (selection && !(hideDelete && hideDownload)),
    [viewing, selection, hideDelete, hideDownload, settings],
  );

  const options: DropdownItem[] = gridColumns
    ?.filter((x) => x.groupable)
    ?.map((column) => {
      return {
        id: column?.field,
        label: column?.headerName || '',
        isBold: column?.rowGroup,
        action: () => onGrouping([column?.field]),
      };
    });

  const noneOption = {
    id: 'none',
    label: translations.none,
    isBold: !selectedGroupOption,
    action: () => onGrouping([]),
  };

  const statusBar = useMemo<{
    statusPanels: StatusPanelDef[];
  }>(() => {
    return {
      statusPanels: [
        ...(hasFooterRowCount
          ? [
              {
                statusPanel: FooterRowCount,
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
                statusPanel: FooterPagination,
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
                statusPanel: FooterPageSize,
                statusPanelParams: {
                  translations,
                },
                align: 'right',
              },
            ]
          : []),
      ],
    };
  }, [hasFooterRowCount, showPagination, paginationPageSize]);

  useEffect(() => {
    if (setIsGrouping) {
      setIsGrouping(!!selectedGroupOption);
    }
  }, [setIsGrouping, selectedGroupOption]);

  return (
    <>
      <Filters
        api={gridApi}
        filtering={filtering}
        filters={filters}
        dates={dates}
        setDates={setDates}
        translations={translations}
        datepickerTranslations={datepickerTranslations}
        dateFormat={formatSettings.dateFormat ?? (defaultFormatSettings.dateFormat as string)}
        locale={formatSettings.language ?? (defaultFormatSettings.language as SupportedLocale)}
        selectedFilterIds={selectedFilterIds}
        setSelectedFilterIds={setSelectedFilterIds}
        filterOnValue={filterOnValue}
        filterOnMultiValues={filterOnMultiValues}
        filterOnDate={filterOnDate}
        debouncedSearch={debouncedSearch}
        clearFilterModel={clearFilterModel}
        onSearch={onSearch}
        showClearFilters={showClearFilters}
        initialShowLessFilters={initialShowLessFilters}
        onShowLessFiltersChange={onShowLessFiltersChange}
        setFiltersHeight={setFiltersHeight}
        defaultDateQuickSelect={defaultDateQuickSelect}
        defaultSearch={defaultSearch}
        isGridColumnApiLoaded={isGridColumnApiLoaded}
      />
      <StyledDataGrid $height={height} className={getGridThemeClassName()}>
        {showDataGridHeader && (
          <StyledDataGridHeader $justifyContent={!selection ? 'flex-end' : 'space-between'}>
            {(selection || enableExport) && (
              <DataGridActions
                gridApi={gridApi}
                columns={gridColumns}
                rowsSelected={rowsSelected}
                translations={translations}
                onBulkDelete={onBulkDelete}
                hideDownload={hideDownload}
                hideDelete={hideDelete}
                exportFileName={exportFileName}
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
                  onModalClose={onModalClose}
                  onModalOpen={onModalOpen}
                />
              )}
              {grouping && (
                <>
                  <FlexItem width="auto">
                    <ParagraphSmall marginRight={scale500}>{translations.groupBy}</ParagraphSmall>
                    <Dropdown items={[noneOption, ...options]}>
                      <Button kind={ButtonKind.tertiary} endEnhancer={() => <CaretDown color={dark1} />}>
                        <ParagraphSmall color={dark1}>
                          {selectedGroupOption?.headerName ?? noneOption.label}
                        </ParagraphSmall>
                      </Button>
                    </Dropdown>
                  </FlexItem>
                </>
              )}
              {isGridColumnApiLoaded && columnToggling && (
                <HeaderColumnToggle api={gridApi} selectedGroupOption={selectedGroupOption} />
              )}
              {!!settings?.length && <HeaderColumnSettings settings={settings} />}
            </FlexItem>
          </StyledDataGridHeader>
        )}
        <style>{getGridThemeOverrides(theme.current)}</style>
        <StyledAgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          rowSelection="multiple"
          rowModelType={rowModelType}
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
          autoGroupColumnDef={autoGroupColumnDef ?? defaultAutoGroupColumnDef}
          groupSelectsChildren={!!selectedGroupOption}
          pagination={showPagination}
          paginationPageSize={paginationPageSize}
          suppressPaginationPanel={hasPaginationPanel}
          suppressRowHoverHighlight={suppressRowHoverHighlight}
          suppressRowClickSelection={suppressRowClickSelection}
          enableCellTextSelection
          onGridReady={onGridReady}
          onRowDataUpdated={onRowDataUpdated}
          getRowId={getRowId}
          onSelectionChanged={onSelectionChanged}
          suppressDragLeaveHidesColumns
          cacheBlockSize={paginationPageSize}
          maxBlocksInCache={10}
          blockLoadDebounceMillis={100}
          headerHeight={40}
          rowHeight={rowHeight}
          getRowHeight={getRowHeight}
          components={{
            moreActionsCell: (props: any) =>
              !customActionsCellRender ? (
                <RowActionsCell {...props} hideWithNoItems={hideActionWithNoItems} />
              ) : (
                customActionsCellRender(props)
              ),
            noRowsTemplate: () => <NoRowsTemplate translations={translations} />,
            headerCheckbox: HeaderCheckbox,
            loadingCellTemplate: LoadingCellTemplate,
            groupRowInnerRenderer: GroupRowInnerRenderer,
            groupRowInnerTagRenderer: GroupRowInnerTagRenderer,
          }}
          icons={{
            rowDrag: () => ReactDOMServer.renderToStaticMarkup(<DotsSix color={theme.current.colors.primaryA} />),
            sortAscending: () =>
              ReactDOMServer.renderToStaticMarkup(<CaretDown color={theme.current.colors.primaryA} />),
            sortDescending: () =>
              ReactDOMServer.renderToStaticMarkup(<CaretUp color={theme.current.colors.primaryA} />),
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
          statusBar={statusBar}
          tooltipShowDelay={0}
          colResizeDefault="shift"
          reactiveCustomComponents
        ></StyledAgGridReact>
      </StyledDataGrid>
    </>
  );
};

export default DataGrid;
