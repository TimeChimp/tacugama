import { TableProps } from 'baseui/table';
import { BasicTableColumn, BasicTableRow } from 'components/basic-table';

type OmittedTableProps = 'columns' | 'data';

export interface MovableTableProps extends Omit<TableProps, OmittedTableProps> {
  columns: BasicTableColumn[];
  data: BasicTableRow[];
  setData?: (data: BasicTableRow[]) => void;
  entityRows: any[];
}
