import { delay } from '@timechimp/timechimp-typescript-helpers';
import { rest } from 'msw';
import { DataGridRequest, DataGridResponse } from '../types';
import { DATA_URL, TIME_ENTRIES } from './constants';

export const getTimeEntriesQueryMock = rest.post(DATA_URL, async (req, res, ctx) => {
  const { startRow, endRow } = (await req.json()) as DataGridRequest;
  const rowsForBlock = TIME_ENTRIES.slice(startRow, endRow);

  const result: DataGridResponse = {
    rowData: rowsForBlock,
    rowCount: TIME_ENTRIES.length,
  };

  await delay(500);
  return res(ctx.status(200), ctx.json(result));
});
