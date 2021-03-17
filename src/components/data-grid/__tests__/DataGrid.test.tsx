import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import * as React from 'react';
import { configure, render, screen, waitFor } from '../../../utils/test-utils';
import { DataGrid } from '..';
import { getTimeEntriesQueryMock } from './mockServer';
import { ACCESS_TOKEN, CHECKBOX_TEST_ID, COLUMNS, DATA_URL, LOADER_TEST_ID } from './constants';

export const server = setupServer(getTimeEntriesQueryMock);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
