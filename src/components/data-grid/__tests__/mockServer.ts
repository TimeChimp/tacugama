import { delay } from '@timechimp/timechimp-typescript-helpers';
import { rest } from 'msw';
import { DataGridRequest, DataGridResponse } from '../types';
import { DATA_URL, TIME_ENTRIES } from './constants';

const getLastRowIndex = (startRow: number, endRow: number, results: any): number => {
  if (!results) {
    return 0;
  }
  const currentLastRow = startRow + results.length;
  return currentLastRow <= endRow ? currentLastRow : 0;
};

export const getTimeEntriesQueryMock = rest.post(DATA_URL, async (req, res, ctx) => {
  const { startRow, endRow } = (await req.json()) as DataGridRequest;
  const rowsForBlock = TIME_ENTRIES.slice(startRow, endRow);
  const lastRow = getLastRowIndex(startRow, endRow, rowsForBlock);

  const result: DataGridResponse = {
    rowData: rowsForBlock,
    rowCount: lastRow,
  };

  await delay(500);
  return res(ctx.status(200), ctx.json(result));
});
