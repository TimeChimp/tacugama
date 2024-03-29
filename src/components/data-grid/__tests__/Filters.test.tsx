import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import * as React from 'react';
import { render, screen, userEvent, waitFor } from '../../../utils/test-utils';
import { DataGrid } from '..';
import { getTimeEntriesQueryMock } from './mockServer';
import { defaultTranslations } from '../defaultTranslations';
import {
  ACCESS_TOKEN,
  COLUMNS,
  DATA_URL,
  SEARCH_INPUT_TEST_ID,
  FILTERS,
  FILTER_BUTTON_TEST_ID,
  LOADER_TEST_ID,
} from './constants';

export const server = setupServer(getTimeEntriesQueryMock);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test.skip('it shows no search bar by default', () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.queryByTestId(SEARCH_INPUT_TEST_ID)).not.toBeInTheDocument();
});

test.skip('it shows a search bar when filtering is enabled', () => {
  render(<DataGrid filtering dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.getByTestId(SEARCH_INPUT_TEST_ID)).toBeInTheDocument();
});

test.skip('it shows no filters by default', () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.queryAllByText(defaultTranslations.lessFilters)).toHaveLength(0);
});

test.skip('it shows only two filters when more than 2 are passed', () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} filters={FILTERS} />);

  expect(screen.queryAllByTestId(FILTER_BUTTON_TEST_ID)).toHaveLength(2);
});

test.skip('it shows all filters when selecting button to show all', () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} filters={FILTERS} />);

  userEvent.click(screen.getByText(defaultTranslations.allFilters));

  expect(screen.queryAllByTestId(FILTER_BUTTON_TEST_ID)).toHaveLength(FILTERS.length);
});

test.skip('it filters on defaultValue when a default value is provided', async () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} filters={FILTERS} />);

  userEvent.click(screen.getByText(defaultTranslations.allFilters));

  await waitFor(() => {
    expect(screen.queryByTestId(LOADER_TEST_ID)).not.toBeInTheDocument();
    expect(screen.queryByText('Active')).toBeInTheDocument();
  });
});
