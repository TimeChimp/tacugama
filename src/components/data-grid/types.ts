import {
  ColumnApi,
  ColumnState,
  DateFilterModel,
  GridApi,
  ICombinedSimpleModel,
  NumberFilterModel,
  TextFilterModel,
} from '@ag-grid-community/core';
import { Dispatch, SetStateAction } from 'react';
import { DropdownItem } from '../dropdown';

export interface DataGridApi {
  getSelectedRows: () => any[];
  getSelectedRow: () => any;
  exportAsCsv: () => void;
  exportAsExcel: () => void;
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
  rowCountText: (count: number) => JSX.Element;
  noRowsTitle: string;
  noRowsSubtext: string;
  groupBy: string;
  search: string;
  defaultView: string;
  viewOptions: string;
  addView: string;
  viewName: string;
  saveColumns: string;
  searchColumns: string;
  saveGrouping: string;
  saveFilters: string;
  saveView: string;
  cancel: string;
  unpinView: string;
  pinView: string;
  renameView: string;
  updateView: string;
  deleteView: string;
  deleteViewConfirmation: string;
  defaultViewTooltip: string;
}

export interface DataGridProps {
  id: string;
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
  accessToken?: string;
  sortableColumns?: boolean;
  resizeableColumns?: boolean;
  formatSettings?: FormatSettings;
  translations?: Translations;
  views?: DataGridView[];
  height?: string;
  onDeactivateView?: (id: string) => Promise<void>;
  onActivateView?: (id: string) => Promise<void>;
  onCreateView?: (view: CreateViewInput) => Promise<void>;
  onDeleteView?: (id: string) => Promise<void>;
  onPinView?: (id: string) => Promise<void>;
  onUnpinView?: (id: string) => Promise<void>;
  onRenameView?: (id: string, name: string) => Promise<void>;
  onSaveViewState?: (id: string, state: string) => Promise<void>;
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
  viewType: string;
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
  translations: Translations;
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
  dataGridId: string;
  translations: Translations;
  views?: DataGridView[];
  onCreateView?: (input: CreateViewInput) => Promise<void>;
  onDeleteView?: (id: string) => Promise<void>;
  onPinView?: (id: string) => Promise<void>;
  onUnpinView?: (id: string) => Promise<void>;
  onRenameView?: (id: string, name: string) => Promise<void>;
  onSaveViewState?: (id: string, state: string) => Promise<void>;
  onActivateView?: (id: string) => void;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
}

export interface CreateViewModalProps {
  dataGridId: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleCreateView: (input: CreateViewInput) => Promise<void>;
  translations: Translations;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
}

export interface SaveViewModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleSaveView: (id: string, viewState: string) => Promise<void>;
  translations: Translations;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  view: DataGridView;
}

export interface RenameViewModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
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
}
