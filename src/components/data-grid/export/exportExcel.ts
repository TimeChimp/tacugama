import { GridApi } from '@ag-grid-community/core';
import { generateFilename } from '../../../utils';

export const exportExcel = (gridApi: GridApi, fileName?: string) => {
  const allDisplayedColumns = gridApi.getAllDisplayedColumns();
  const columns = allDisplayedColumns?.map((displayedColumnn) => displayedColumnn.getColDef());

  gridApi.exportDataAsExcel({
    fileName: fileName ?? generateFilename(gridApi),
    onlySelectedAllPages: true,
    columnKeys: columns?.map((column) => column.colId ?? column.field) as string[],
  });
};
