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

export interface DataGridProps {
  columns: DataGridColumn[];
  selection?: boolean;
  filtering?: boolean;
  grouping?: boolean;
  columnToggling?: boolean;
  onReady?: (dataGridApi: DataGridApi) => void;
  rowActionItems?: DropdownItem[];
  state?: string;
  dataUrl: string;
  accessToken: string;
  sortableColumns?: boolean;
  resizeableColumns?: boolean;
  formatSettings?: FormatSettings;
  noRowsTitle?: string;
  noRowsSubtext?: string;
  groupByLabel?: string;
  rowCountText?: (count: number) => JSX.Element;
}

export interface FiltersProps {
  columns: DataGridColumn[];
  grouping?: boolean;
  filtering?: boolean;
  onGrouping: (rowGroups: string[]) => void;
  onFiltering: (filters: FilterModel) => void;
  filterModel: FilterModel;
  groupByLabel?: string;
}
export interface StatusBarRowCountProps {
  api: GridApi;
  rowCountText?: (count: number) => JSX.Element;
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
  noRowsTitle?: string;
  noRowsSubtext?: string;
}
