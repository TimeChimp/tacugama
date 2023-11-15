import { DropdownItem } from '../dropdown';
import { BasicTableColumn } from '../basic-table';
import { ActionButtonProps } from '../action-button/types';

export interface ExportDropdownProps {
  exportToCsv?: DropdownItem & { fileName?: string };
  exportToExcel?: DropdownItem & { fileName?: string };
  rows: any[];
  columns: BasicTableColumn[];
  label: string;
  actionButtonProps?: ActionButtonProps;
}
