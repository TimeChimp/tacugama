import '@testing-library/jest-dom';
import * as React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { configure, render, screen, waitFor } from '../../utils/test-utils';
import { DataGrid } from './';
import { DataGridColumn, DataGridRequest, DataGridResponse } from './types';
import { delay } from '@timechimp/timechimp-typescript-helpers';

const tasks = [
  {
    id: 'ACC-BBB-CCC-DDD-EEE',
    name: 'Analysis',
  },
  {
    id: 'ACC-BBB-CCC-DDD-EE2',
    name: 'Design',
  },
  {
    id: 'ACC-BBB-CCC-DDD-EE3',
    name: 'Development',
  },
];

const DATA_URL = '/tasks';
const ACCESS_TOKEN = '';
const COLUMNS: DataGridColumn[] = [
  {
    field: 'name',
    label: 'Name',
  },
];
const SEARCH_INPUT_TEST_ID = 'data-grid-search';
const CHECKBOX_TEST_ID = 'data-grid-select-all';
const LOADER_TEST_ID = 'loader';

const getLastRowIndex = (startRow: number, endRow: number, results: any): number => {
  if (!results) {
    return 0;
  }
  const currentLastRow = startRow + results.length;
  return currentLastRow < endRow ? currentLastRow : 0;
};

const getTasksQueryMock = rest.post(DATA_URL, async (req, res, ctx) => {
  const { startRow, endRow } = req.body as DataGridRequest;

  const rowsForBlock = tasks.slice(startRow, endRow);
  const lastRow = getLastRowIndex(startRow, endRow, rowsForBlock);

  const result: DataGridResponse = {
    rowData: rowsForBlock,
    rowCount: lastRow,
  };

  await delay(500);
  return res(ctx.status(200), ctx.json(result));
});

const server = setupServer(getTasksQueryMock);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('it shows no search bar by default', () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.queryByTestId(SEARCH_INPUT_TEST_ID)).not.toBeInTheDocument();
});

test('it shows a search bar when filtering is enabled', () => {
  render(<DataGrid filtering dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.getByTestId(SEARCH_INPUT_TEST_ID)).toBeInTheDocument();
});

test('it shows no select all by default', () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.queryByTestId(CHECKBOX_TEST_ID)).not.toBeInTheDocument();
});

test('it shows select all when selection is enabled', async () => {
  render(<DataGrid selection dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  await waitFor(() => {
    expect(screen.getByTestId(CHECKBOX_TEST_ID)).toBeInTheDocument();
  });
});

test('it shows a loading indicator', async () => {
  render(<DataGrid selection dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  // baseweb has set the loader test id in the following format: `testid`
  configure({ testIdAttribute: 'testid' });

  await waitFor(() => {
    expect(screen.getByTestId(LOADER_TEST_ID)).toBeInTheDocument();
  });
});

test('it does not show a loader once results have loaded', async () => {
  render(<DataGrid selection dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  // baseweb has set the loader test id in the following format: `testid`
  configure({ testIdAttribute: 'testid' });

  await waitFor(() => {
    expect(screen.queryByTestId(LOADER_TEST_ID)).not.toBeInTheDocument();
  });
});
