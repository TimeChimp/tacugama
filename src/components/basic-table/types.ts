import { TableProps } from 'baseui/table-semantic';

export enum BasicTableColumnType {
  Text = 'text',
  Custom = 'custom',
}

export interface BasicTableColumn {
  title: string;
  type: BasicTableColumnType;
  dataKey: string;
}

export interface BasicTableRow {
  [dataKey: string]: any;
}

type OmittedTableProps = 'columns' | 'data';

export interface BasicTableProps extends Omit<TableProps, OmittedTableProps> {
  columns: BasicTableColumn[];
  data: BasicTableRow[];
}
