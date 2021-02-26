import {
  ColumnApi,
  ColumnState,
  DateFilterModel,
  GridApi,
  ICombinedSimpleModel,
  NumberFilterModel,
  TextFilterModel,
} from '@ag-grid-community/core';
import { DropdownItem } from '../dropdown';

export interface DataGridApi {
  getSelectedRows: () => any[];
  getSelectedRow: () => any;
  exportAsCsv: () => void;
  exportAsExcel: () => void;
  getState: () => string;
  refreshStore: () => void;
}

export type DataGridColumnType = 'number' | 'currency' | 'date' | 'time' | 'duration';
export type DataGridAggFunc = 'sum';

export interface DataGridColumn {
  field: string;
  label?: string;
  width?: number;
  rowGroup?: boolean;
  type?: DataGridColumnType;
  groupable?: boolean;
  aggFunc?: DataGridAggFunc;
  sort?: string;
}

export type FilterTypeModel = TextFilterModel | NumberFilterModel | DateFilterModel;
export interface FilterModel {
  [key: string]: FilterTypeModel | ICombinedSimpleModel<FilterTypeModel>;
}

export interface DataGridState {
  columnState: ColumnState[];
  columnGroupState: {
    groupId: string;
    open: boolean;
  }[];
  filterModel: FilterModel;
}

export type NumberFormat = 'space' | 'dot' | 'comma' | 'apostrophe' | undefined;
export type Language = 'nl-NL' | 'en-US' | 'en-GB' | undefined;
export type DurationFormat = 'HH:mm:ss' | 'HH:mm' | 'decimal' | undefined;

export interface FormatSettings {
  durationFormat: DurationFormat;
  dateFormat: string;
  numberFormat: NumberFormat;
  currency: string;
  language: Language;
  timeFormat: string;
}

export interface Translations {
  rowCountText?: (count: number) => JSX.Element;
  noRowsTitle?: string;
  noRowsSubtext?: string;
  groupBy?: string;
  search?: string;
  defaultView?: string;
  viewOptions?: string;
  addView?: string;
  viewName?: string;
  saveColumn?: string;
  saveGrouping?: string;
  saveFilters?: string;
  saveView?: string;
  cancel?: string;
  unpinView?: string;
  renameView?: string;
  updateView?: string;
  deleteView?: string;
  deleteViewConfirmation?: string;
}

export interface DataGridProps {
  columns: DataGridColumn[];
  selection?: boolean;
  filtering?: boolean;
  grouping?: boolean;
  viewing?: boolean;
  columnToggling?: boolean;
  onReady?: (dataGridApi: DataGridApi) => void;
  rowActionItems?: DropdownItem[];
  state?: string;
  dataUrl: string;
  accessToken: string;
  sortableColumns?: boolean;
  resizeableColumns?: boolean;
  formatSettings?: FormatSettings;
  translations?: Translations;
  views?: DataGridView[];
  onCreateView?: (view: DataGridView) => void;
  onDeleteView?: (view: DataGridView) => void;
  onUpdateView?: (view: DataGridView) => void;
}

export interface DataGridView {
  id?: string;
  name: string;
  pinned: boolean;
  order: number;
  viewState: string;
}

export interface FiltersProps {
  columns: DataGridColumn[];
  grouping?: boolean;
  filtering?: boolean;
  onGrouping: (rowGroups: string[]) => void;
  onFiltering: (filters: FilterModel) => void;
  filterModel: FilterModel;
  translations: Translations;
}
export interface StatusBarRowCountProps {
  api: GridApi;
  translations: Translations;
}

export interface RowActionsCellProps {
  items: DropdownItem[];
  api: GridApi;
}

export interface HeaderCheckboxProps {
  api: GridApi;
  displayName: string;
}

export interface HeaderColumnToggleProps {
  api: GridApi;
  columnApi: ColumnApi;
  searchPlaceholder?: string;
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

export interface DataGridViewsProps {
  translations: Translations;
  views?: DataGridView[];
  onCreateView?: (view: DataGridView) => void;
  onDeleteView?: (view: DataGridView) => void;
  onUpdateView?: (view: DataGridView) => void;
}
