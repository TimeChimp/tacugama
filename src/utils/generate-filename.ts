import { GridApi } from '@ag-grid-community/core';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { calculateMaxAndMinDate } from './calculate-max-and-min-date';

export const generateFilename = (gridApi: GridApi): string => {
  const selectedRows = gridApi.getSelectedRows();
  let maxDate: Date | undefined = undefined;
  let minDate: Date | undefined = undefined;

  selectedRows.forEach((node) => {
    const { updatedMaxDate, updatedMinDate } = calculateMaxAndMinDate(node.start, maxDate, minDate);
    maxDate = updatedMaxDate;
    minDate = updatedMinDate;
  });

  return `${new TcDate(minDate).format('yyyyMMdd')}-${new TcDate(maxDate).format(
    'yyyyMMdd',
  )}_Timechimp-Registration-Export`;
};
