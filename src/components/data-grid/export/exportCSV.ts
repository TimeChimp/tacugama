import { GridApi } from '@ag-grid-community/core';
import { generateFilename } from '../../../utils';
import { DataGridColumn } from '../types';

export const exportCSV = (gridApi: GridApi, columns: DataGridColumn[]) =>
  gridApi.exportDataAsCsv({
    fileName: generateFilename(gridApi),
    onlySelectedAllPages: true,
    columnKeys: columns.map((column) => column.colId ?? column.field),
  });
