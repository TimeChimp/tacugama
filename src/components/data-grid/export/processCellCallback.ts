import { ValueFormatterParams } from '@ag-grid-community/core';
import { ProcessCellForExportParams } from '../types';

export const processCellCallback = (params: ProcessCellForExportParams) => {
  const colDef = params.column.getColDef();
  // try to reuse valueFormatter from the colDef
  if (colDef.valueFormatter && typeof colDef.valueFormatter === 'function' && params.node) {
    const valueFormatterParams: ValueFormatterParams = {
      ...params,
      data: params.node && params.node.data,
      node: params.node,
      colDef,
    };

    return colDef.valueFormatter(valueFormatterParams);
  }
  return params.value;
};
