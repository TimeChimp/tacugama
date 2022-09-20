import { GridApi, ValueFormatterParams } from '@ag-grid-community/core';
import { generateFilename } from '../../../utils';
import { DataGridColumn } from '../types';

export const exportExcel = (gridApi: GridApi, columns: DataGridColumn[]) =>
  gridApi.exportDataAsExcel({
    fileName: generateFilename(gridApi),
    onlySelectedAllPages: true,
    columnKeys: columns.map((column) => column.colId ?? column.field),
    processCellCallback: (params) => {
      const colDef = params.column.getColDef();
      // try to reuse valueFormatter from the colDef
      if (colDef.valueFormatter && typeof colDef.valueFormatter === 'function') {
        const valueFormatterParams: ValueFormatterParams = {
          ...params,
          data: params.node && params.node.data,
          node: params.node!,
          colDef,
        };

        return colDef.valueFormatter(valueFormatterParams);
      }
      return params.value;
    },
  });
