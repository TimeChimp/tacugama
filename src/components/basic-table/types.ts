import { TableProps } from 'baseui/table-semantic';

export enum BasicTableColumnType {
  Text = 'text',
  Custom = 'custom',
}

export interface BasicTableColumn {
  label: string;
  type: BasicTableColumnType;
  field: string;
}

export interface BasicTableRow {
  [field: string]: any;
}

type OmittedTableProps = 'columns' | 'data';

export interface BasicTableProps extends Omit<TableProps, OmittedTableProps> {
  columns: BasicTableColumn[];
  data: BasicTableRow[];
}