import { BasicTableRow } from 'components/basic-table/types';

export interface BasicTableBuilderProps {
  emptyMessage?: string;
  isEmbeddedTable?: boolean;
  children: React.ReactElement[];
  data: BasicTableRow[];
}
