import { delay } from '@timechimp/timechimp-typescript-helpers';
import { rest } from 'msw';
import { DataGridRequest, DataGridResponse } from './types';

const timeEntries = [
  {
    id: 'ACC-BBB-CCC-DDD-EEE',
    name: 'Analysis',
    description: 'This is a description',
    client: 'Apple',
    project: 'Testing',
  },
  {
    id: 'ACC-BBB-CCC-DDD-EE2',
    name: 'Design',
    description: 'This is a description',
    client: 'Microsoft',
    project: 'Development',
  },
  {
    id: 'ACC-BBB-CCC-DDD-EE3',
    name: 'Development',
    description: 'This is a description',
    client: 'Amazon',
    project: 'Design',
  },
];

export const DATA_URL = '/timetracking';

const getLastRowIndex = (startRow: number, endRow: number, results: any): number => {
  if (!results) {
    return 0;
  }
  const currentLastRow = startRow + results.length;
  return currentLastRow < endRow ? currentLastRow : 0;
};

export const getTimeEntriesQueryMock = rest.post(DATA_URL, async (req, res, ctx) => {
  const { startRow, endRow } = req.body as DataGridRequest;

  const rowsForBlock = timeEntries.slice(startRow, endRow);
  const lastRow = getLastRowIndex(startRow, endRow, rowsForBlock);

  const result: DataGridResponse = {
    rowData: rowsForBlock,
    rowCount: lastRow,
  };

  await delay(500);
  return res(ctx.status(200), ctx.json(result));
});
