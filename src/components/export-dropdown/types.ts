import { ConfigOptions } from 'export-to-csv';
import { DropdownItem } from '../dropdown';
import { BasicTableColumn } from '../basic-table';
import { ActionButtonProps } from '../action-button/types';

export interface ExportDropdownProps {
  exportToCsv: DropdownItem & { config?: ConfigOptions; fileName?: string };
  exportToExcel: DropdownItem & { fileName?: string };
  rows: any[];
  columns: BasicTableColumn[];
  label: string;
  actionButtonProps?: ActionButtonProps;
}
