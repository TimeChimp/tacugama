import { GridApi } from '@ag-grid-community/core';
import { generateFilename } from '../../../utils';

export const exportCSV = (gridApi: GridApi, fileName?: string, exportColumnKeys?: string[]) => {
  const allDisplayedColumns = gridApi.getAllDisplayedColumns();
  const columns = allDisplayedColumns?.map((displayedColumnn) => displayedColumnn.getColDef());

  gridApi.exportDataAsCsv({
    fileName: fileName ?? generateFilename(gridApi),
    onlySelectedAllPages: true,
    columnKeys: exportColumnKeys ?? (columns?.map((column) => column.colId ?? column.field) as string[]),
  });
};
