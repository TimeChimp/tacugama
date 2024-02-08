import { BasicTableRow } from 'components/basic-table/types';

export interface BasicTableBuilderProps {
  emptyMessage?: string;
  isEmbeddedTable?: boolean;
  children: React.ReactElement[];
  data: BasicTableRow[];
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type SortOrderType = SortOrder.ASC | SortOrder.DESC | null;
