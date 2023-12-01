import React, { Dispatch, SetStateAction, ComponentType } from 'react';
import {
  ColDef,
  ColumnApi,
  ColumnState,
  DateFilterModel,
  GridApi,
  ICombinedSimpleModel,
  IFilterComp,
  NumberFilterModel,
  RowDataUpdatedEvent,
  RowNode,
  TextFilterModel,
  ValueFormatterParams,
  ProvidedFilterModel,
} from '@ag-grid-community/core';
import { DurationFormat, NumberFormat, SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DropdownItem } from '../dropdown';
import { SVGProps as IconProps } from '..';
import { SetFilterModel } from '@ag-grid-enterprise/set-filter';
import { AgGridColumnProps } from '@ag-grid-community/react';
import { DatepickerRangeTranslations } from '../datepicker';
import { AgGridReact } from '@ag-grid-community/react/lib/agGridReact';

export enum RowModelType {
  clientSide = 'clientSide',
  serverSide = 'serverSide',
}

export enum CustomFilterTypes {
  ids = 'ids',
  text = 'text',
  set = 'set',
}

export interface DataGridApi {
  getSelectedRows: () => any[];
  getSelectedRow: () => any;
  deselectAll: () => void;
  sizeColumnsToFit: () => void;
  exportAsCsv: () => void;
  exportAsExcel: () => void;
  refreshStore: () => void;
  refreshCells: () => void;
  setViewState: (viewState: string | null) => void;
  datagridRef: React.RefObject<AgGridReact>;
}

export type DataGridColumnValueType = 'number' | 'integer' | 'currency' | 'date' | 'time' | 'datetime' | 'duration';
export type DataGridAggFunc = 'sum';

export interface DataGridColumn extends AgGridColumnProps {
  field: string;
  label?: string;
  width?: number;
  rowGroup?: boolean;
  valueType?: DataGridColumnValueType;
  groupable?: boolean;
  sortable?: boolean;
  hide?: boolean;
  customMap?: (value: any) => any;
  customComponent?: React.FunctionComponent<{ data: any; value: any }>;
  customHeaderComponent?: React.FunctionComponent;
}

export interface IdsFilterModel extends ProvidedFilterModel {
  ids: (string | null)[];
}

export type FilterTypeModel = TextFilterModel | NumberFilterModel | DateFilterModel | SetFilterModel;
export interface FilterModel {
  [key: string]: FilterTypeModel | ICombinedSimpleModel<FilterTypeModel>;
}

export type IFilterType =
  | string
  | {
      new (): IFilterComp;
    }
  | boolean;

export enum FilterType {
  date = 'date',
  multi = 'multi',
  multiVirtual = 'multiVirtual',
  single = 'single',
  settings = 'settings',
}

export interface FilterValue {
  value: string | boolean | number | null;
  label: string;
  icon?: JSX.Element;
}

export interface ExtraFilter {
  name: string;
  values: object;
}

export interface Filter {
  type: FilterType;
  columnField: string;
  values?: FilterValue[] | string[];
  defaultValue?: string | boolean;
  valuesLoading?: boolean;
  title: string;
  icon?: ComponentType<IconProps>;
  searchPlaceholder?: string;
  hide?: boolean;
  byId?: boolean;
  clearable?: boolean;
  customFilterMap?: (values: FilterValue['value'][]) => any;
  customGetValuerMap?: (filterModel: any) => any;
  setExtraFilterModelValue?: (values: FilterValue['value'][]) => ExtraFilter[];
}

export interface GetServerSideGroupKey {
  (dataItem: any): string;
}

export interface GetDataPath {
  (data: any): string[];
}

export interface DataGridState {
  columnState: ColumnState[];
  columnGroupState: {
    groupId: string;
    open: boolean;
  }[];
  filterModel: FilterModel;
}

export interface FormatSettings {
  durationFormat?: DurationFormat;
  dateFormat?: string;
  numberFormat?: NumberFormat;
  currency?: string;
  language?: SupportedLocale;
  timeFormat?: string;
}

export interface Translations {
  rowCountText: (count: number, totalCount: number) => JSX.Element;
  rowCountSelectedText: (count: number) => JSX.Element;
  rowActionItems?: DropdownItem[];
  onRowEdit?: (data: RowActionsCellData) => void;
  noRowsTitle: string;
  noRowsSubtext: string;
  groupBy: string;
  search: string;
  searchBar: string;
  defaultView: string;
  viewOptions: string;
  addView: string;
  viewsExplanation: string;
  saveViewDescription: string;
  viewName: string;
  saveColumns: string;
  searchColumns: string;
  saveGrouping: string;
  saveFilters: string;
  saveView: string;
  cancel: string;
  save: string;
  unpinView: string;
  pinView: string;
  renameView: string;
  updateView: string;
  deleteView: string;
  deleteViewConfirmation: string;
  defaultViewTooltip: string;
  lessFilters: string;
  allFilters: string;
  applyFilters: string;
  showResultsBy: string;
  paginationPrevious: string;
  paginationNext: string;
  paginationOutOf: string;
  paginationOutOfLong: (currentPage: number, pageCount: number) => string;
  deleteEntries: string;
  deleteEntriesCount: (count: number) => JSX.Element;
  delete: string;
  export: string;
  none: string;
  clearFilters: string;
  add: string;
}

export interface DataGridSetting {
  id: string;
  label: string;
  action?: () => void;
  value?: boolean;
}
export interface DataGridProps {
  licenseKey?: string;
  rowModelType?: RowModelType;
  rowData?: any[] | undefined;
  columns: DataGridColumn[];
  filters?: Filter[];
  selection?: boolean;
  enableExport?: boolean;
  filtering?: boolean;
  grouping?: boolean;
  viewing?: boolean;
  columnToggling?: boolean;
  onReady?: (dataGridApi: DataGridApi) => void;
  rowActionItems?: DropdownItem[];
  autoGroupColumnDef?: ColDef;
  state?: string;
  dataUrl?: string;
  accessToken?: string;
  customHeaders?: HeadersInit;
  sortableColumns?: boolean;
  resizeableColumns?: boolean;
  formatSettings?: FormatSettings;
  translations?: Translations;
  datepickerTranslations?: DatepickerRangeTranslations;
  views?: DataGridView[];
  height?: string;
  dates?: Date[];
  hideDownload?: boolean;
  hideDelete?: boolean;
  hideActionWithNoItems?: boolean;
  setDates?: (dates: Date[]) => void;
  onDeactivateView?: (id: string) => Promise<void>;
  onActivateView?: (id: string) => Promise<void>;
  onCreateView?: (view: CreateViewInput) => Promise<void>;
  searchColumns?: string[];
  onDeleteView?: (id: string) => Promise<void>;
  onPinView?: (id: string) => Promise<void>;
  onUnpinView?: (id: string) => Promise<void>;
  onRenameView?: (id: string, name: string) => Promise<void>;
  onSaveViewState?: (id: string, state: string) => Promise<void>;
  onBulkDelete?: () => Promise<void>;
  onSelectionChangedHandler?: (data: RowNode[]) => void;
  treeData?: boolean;
  getServerSideGroupKey?: GetServerSideGroupKey | undefined;
  getDataPath?: GetDataPath | undefined;
  groupIncludeFooter?: boolean;
  groupIncludeTotalFooter?: boolean;
  onRowDataChanged?: (e: RowDataUpdatedEvent) => void;
  onRowDataUpdated?: (e: RowDataUpdatedEvent) => void;
  onModalOpen?: () => void;
  onModalClose?: () => void;
  suppressRowHoverHighlight?: boolean;
  suppressRowClickSelection?: boolean;
  debouncedSearch?: boolean;
  settings?: DataGridSetting[];
  showPagination?: boolean;
  paginationPageSize?: number;
  hasPaginationPanel?: boolean;
  hasFooterRowCount?: boolean;
  isRowDragManaged?: boolean;
  rowHeight?: number;
  getRowHeight?: (params: any) => number;
  onFilterModelChange?: (filterModel: { [key: string]: any }) => void;
  showClearFilters?: boolean;
  customActionsCellRender?: (props: any) => any;
  initialShowLessFilters?: boolean;
  onShowLessFiltersChange?: (showLessFilters: boolean) => void;
  setFiltersHeight?: (filtersHeight: number) => void;
  hasStoredFilters?: boolean;
}

export interface DataGridView {
  id: string;
  name: string;
  pinned: boolean;
  viewState: string;
  viewType: string;
  active: boolean;
}

export interface CreateViewInput {
  name: string;
  viewState: string;
}

export interface SelectedFilterIds {
  [key: string]: FilterValue['value'][];
}

export interface FiltersProps {
  api: GridApi;
  filters?: Filter[];
  dates?: Date[];
  setDates?: (dates: Date[]) => void;
  filtering?: boolean;
  translations: Translations;
  datepickerTranslations?: DatepickerRangeTranslations;
  dateFormat: string;
  locale?: SupportedLocale;
  selectedFilterIds: SelectedFilterIds;
  setSelectedFilterIds: Dispatch<SetStateAction<SelectedFilterIds>>;
  filterOnValue: (columnField: string, value: FilterValue['value'], type: FilterType) => void;
  filterOnMultiValues: (columnField: string, values: FilterValue['value'][]) => void;
  filterOnDate: (columnField: string, selectedDates: Date[]) => void;
  debouncedSearch?: boolean;
  clearFilterModel: (columnFilter: string) => void;
  onSearch?: (searchTerm: string) => void;
  showClearFilters?: boolean;
  initialShowLessFilters?: boolean;
  onShowLessFiltersChange?: (showLessFilters: boolean) => void;
  setFiltersHeight?: (filtersHeight: number) => void;
}

export interface ColumnFiltersProps {
  filters?: Filter[];
  dates?: Date[];
  setDates?: (dates: Date[]) => void;
  api: GridApi;
  translations: Translations;
  datepickerTranslations?: DatepickerRangeTranslations;
  dateFormat: string;
  locale?: SupportedLocale;
  selectedFilterIds: SelectedFilterIds;
  setSelectedFilterIds: Dispatch<SetStateAction<SelectedFilterIds>>;
  filterOnValue: (columnField: string, value: FilterValue['value'], type: FilterType) => void;
  filterOnMultiValues: (columnField: string, values: FilterValue['value'][]) => void;
  filterOnDate: (columnField: string, selectedDates: Date[]) => void;
  clearFilterModel: (columnFilter: string) => void;
  showClearFilters?: boolean;
  initialShowLessFilters?: boolean;
  onShowLessFiltersChange?: (showLessFilters: boolean) => void;
}
export interface FooterRowCountProps {
  api: GridApi;
  translations: Translations;
}
export interface RowActionsCellData {
  items: DropdownItem[];
  id: string;
  [key: string]: any;
}
export interface RowActionsCellProps {
  api?: GridApi;
  data: RowActionsCellData;
  hideWithNoItems?: boolean;
  propOverrides?: {
    listProps?: () => object;
    optionProps?: () => object;
    bodyProps?: () => object;
  };
}

export interface RowEditCellProps {
  onClick: () => void;
  icon?: ComponentType<IconProps>;
}

export interface HeaderCheckboxProps {
  api: GridApi;
  displayName: string;
}

export interface HeaderColumnToggleProps {
  api: GridApi;
  columnApi: ColumnApi;
}
export interface HeaderColumnSettingsProps {
  settings: DataGridSetting[];
}

export interface DataGridRequest {
  startRow: number;
  endRow: number;
  rowGroupCols: DataGridRequestColumn[];
  valueCols: DataGridRequestColumn[];
  pivotCols: DataGridRequestColumn[];
  pivotMode: boolean;
  groupKeys: string[];
  filterModel: any;
  sortModel: any;
}

export interface DataGridRequestColumn {
  id: string;
  displayName: string;
  field?: string;
  aggFunc?: string;
}

export interface DataGridResponse {
  rowData: any[];
  rowCount: number;
}

export interface NoRowsTemplateProps {
  translations: Translations;
}

export interface HeaderComponentFrameworkProps {
  label: string | undefined;
}

export interface DataGridViewsProps {
  translations: Translations;
  views?: DataGridView[];
  onCreateView?: (input: CreateViewInput) => Promise<void>;
  onDeleteView?: (id: string) => Promise<void>;
  onPinView?: (id: string) => Promise<void>;
  onUnpinView?: (id: string) => Promise<void>;
  onRenameView?: (id: string, name: string) => Promise<void>;
  onSaveViewState?: (id: string, state: string) => Promise<void>;
  onActivateView?: (id: string) => void;
  onModalOpen?: () => void;
  onModalClose?: () => void;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  filterModel: Record<string, any>;
}

export interface CreateViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleCreateView: (input: CreateViewInput) => Promise<void>;
  translations: Translations;
  gridColumnApi: ColumnApi;
  filterModel: Record<string, any>;
}

export interface SaveViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSaveView: (id: string, viewState: string) => Promise<void>;
  translations: Translations;
  gridColumnApi: ColumnApi;
  view: DataGridView;
  filterModel: Record<string, any>;
}

export interface RenameViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleRenameView: (id: string, name: string) => Promise<void>;
  translations: Translations;
  view: DataGridView;
}

export interface DataGridViewOptionsProps {
  translations: Translations;
  views?: DataGridView[];
  setEditView: Dispatch<SetStateAction<DataGridView | undefined>>;
  setDeleteModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setCreateModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setRenameModalIsOpen: Dispatch<SetStateAction<boolean>>;
  setSaveModalIsOpen: Dispatch<SetStateAction<boolean>>;
  onPinView?: (id: string) => Promise<void>;
  onUnpinView?: (id: string) => Promise<void>;
  handleActivateView: (id: string) => Promise<void>;
}

export interface DataGridIconProps {
  color: string;
}

export interface DataGridActionsProps {
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  columns: DataGridColumn[];
  rowsSelected: number;
  translations: Translations;
  onBulkDelete?: () => Promise<void>;
  hideDownload?: boolean;
  hideDelete?: boolean;
}

export type PageOrientation = 'portrait' | 'landscape';

export interface PrintParams {
  PDF_HEADER_COLOR?: string;
  PDF_INNER_BORDER_COLOR?: string;
  PDF_OUTER_BORDER_COLOR?: string;
  PDF_ODD_BKG_COLOR?: string;
  PDF_EVEN_BKG_COLOR?: string;
  PDF_HEADER_HEIGHT?: number;
  PDF_ROW_HEIGHT?: number;
  PDF_PAGE_ORIENTATION?: PageOrientation;
  PDF_WITH_CELL_FORMATTING?: boolean;
  PDF_WITH_COLUMNS_AS_LINKS?: boolean;
  PDF_SELECTED_ROWS_ONLY?: boolean;
  PDF_WITH_HEADER_IMAGE?: boolean;
  PDF_WITH_FOOTER_PAGE_COUNT?: boolean;
  PDF_LOGO?: string;
}

export interface PdfCell {
  text?: string;
  style?: string;
  link?: string;
  color?: string;
  decoration?: string;
}

export type PdfTableCell = PdfCell;

export interface PdfHeaderCell extends PdfCell {
  valueFormatter?: string | ((params: ValueFormatterParams) => string) | undefined;
  colDef?: ColDef;
  colSpan?: string;
  colId: string | null;
  sort?: string;
}

export interface ProcessCellForExportParams {
  value: any;
  node?: RowNode | null;
  column: any;
  api: GridApi | null | undefined;
  columnApi: ColumnApi | null | undefined;
  context: any;
  type: string;
}

export type Margins = number | [number, number] | [number, number, number, number];

export type Alignment = 'left' | 'right' | 'justify' | 'center';

export const MODEL_UPDATED_EVENT = 'modelUpdated';
export const PAGINATION_CHANGED_EVENT = 'paginationChanged';
export const SELECTION_CHANGED_EVENT = 'selectionChanged';
export const ROW_SELECTED_EVENT = 'rowSelected';
