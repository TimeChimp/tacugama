import { GridApi } from '@ag-grid-community/core';
import { generateFilename } from '../../../utils';
import { DataGridColumn } from '../types';
import { processCellCallback } from './processCellCallback';

export const exportExcel = (gridApi: GridApi, columns: DataGridColumn[], fileName?: string) =>
  gridApi.exportDataAsExcel({
    fileName: fileName ?? generateFilename(gridApi),
    onlySelectedAllPages: true,
    columnKeys: columns.map((column) => column.colId ?? column.field),
    processCellCallback,
  });
