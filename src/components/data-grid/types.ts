import { Dispatch, SetStateAction, ComponentType } from 'react';
import {
  ColDef,
  ColumnState,
  DateFilterModel,
  GridApi,
  ICombinedSimpleModel,
  IFilterComp,
  NumberFilterModel,
  RowDataUpdatedEvent,
  TextFilterModel,
  ValueFormatterParams,
  ProvidedFilterModel,
  SetFilterModel,
  IRowNode,
} from '@ag-grid-community/core';
import { DurationFormat, NumberFormat, SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DropdownItem } from '../dropdown';
import { SVGProps as IconProps } from '..';
import { DatepickerRangeTranslations } from '../datepicker';
import { QuickSelectDateOption } from '../../models';

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
  api: GridApi;
}

export type DataGridColumnValueType = 'number' | 'integer' | 'currency' | 'date' | 'time' | 'datetime' | 'duration';
export type DataGridAggFunc = 'sum';

export interface DataGridColumn extends ColDef {
  field: string;
  rowGroupField?: string;
  groupable?: boolean;
}

export interface IdsFilterModel extends ProvidedFilterModel {
  ids: (string | null)[];
}

export type FilterTypeModel = TextFilterModel | NumberFilterModel | DateFilterModel | IdsFilterModel | SetFilterModel;
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
  color?: string;
}

export interface ExtraFilter {
  name: string;
  values: object | null;
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
  pageSize: number;
}

export interface FormatSettings {
  durationFormat?: DurationFormat;
  dateFormat?: string;
  numberFormat?: NumberFormat;
  currency?: string;
  language?: SupportedLocale;
  timeFormat?: string;
}

interface EmptyGroup {
  [key: string]: string;
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
  emptyGroup: EmptyGroup;
  exportTooltipNoSelection: string;
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
  onSelectionChangedHandler?: (data: IRowNode[]) => void;
  treeData?: boolean;
  getServerSideGroupKey?: GetServerSideGroupKey | undefined;
  getDataPath?: GetDataPath | undefined;
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
  /**
   * @deprecated The prop should not be used and will be removed in the future.
   */
  hasStoredFilters?: boolean;
  defaultDateQuickSelect?: QuickSelectDateOption;
  exportFileName?: string;
  setIsGrouping?: (isGrouping: boolean) => void;
  defaultSearch?: string;
  exportTypes?: ExportType[];
  exportColumnKeys?: string[];
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
  defaultDateQuickSelect: QuickSelectDateOption;
  defaultSearch?: string;
  isGridColumnApiLoaded?: boolean;
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
  searchIsShown?: boolean;
  defaultDateQuickSelect: QuickSelectDateOption;
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
  selectedGroupOption?: DataGridColumn;
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
}

export interface CreateViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleCreateView: (input: CreateViewInput) => Promise<void>;
  translations: Translations;
  gridApi: GridApi;
}

export interface SaveViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleSaveView: (id: string, viewState: string) => Promise<void>;
  translations: Translations;
  gridApi: GridApi;
  view: DataGridView;
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

export type ExportType = 'csv' | 'excel' | 'pdf';

export interface DataGridActionsProps {
  gridApi: GridApi;
  columns: DataGridColumn[];
  rowsSelected: number;
  translations: Translations;
  onBulkDelete?: () => Promise<void>;
  hideDownload?: boolean;
  hideDelete?: boolean;
  exportFileName?: string;
  exportTypes?: ExportType[];
  exportColumnKeys?: string[];
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

export type Margins = number | [number, number] | [number, number, number, number];

export type Alignment = 'left' | 'right' | 'justify' | 'center';

export const MODEL_UPDATED_EVENT = 'modelUpdated';
export const PAGINATION_CHANGED_EVENT = 'paginationChanged';
export const SELECTION_CHANGED_EVENT = 'selectionChanged';
export const ROW_SELECTED_EVENT = 'rowSelected';
