import { TableProps } from 'baseui/table-semantic';

export enum BasicTableColumnType {
  Text = 'text',
  Custom = 'custom',
  Financial = 'financial',
}

export interface BasicTableColumn {
  label: string | React.ReactNode;
  field: string;
  type?: BasicTableColumnType;
  width?: string;
  sortable?: boolean;
}

export interface BasicTableRow {
  [field: string]: string | number | React.ReactElement;
}

type OmittedTableProps = 'columns' | 'data';

export interface BasicTableProps extends Omit<TableProps, OmittedTableProps> {
  columns: BasicTableColumn[];
  data: BasicTableRow[];
  emptyMessage?: string;
  setData?: (data: BasicTableRow[]) => void;
}
