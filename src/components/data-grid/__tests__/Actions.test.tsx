import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import * as React from 'react';
import { render, screen } from '../../../utils/test-utils';
import { DataGrid } from '..';
import { getTimeEntriesQueryMock } from './mockServer';
import { ACCESS_TOKEN, COLUMNS, DATA_URL, DELETE_BUTTON_TEST_ID, EXPORT_BUTTON_TEST_ID } from './constants';

export const server = setupServer(getTimeEntriesQueryMock);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('it shows no actions by default', () => {
  render(<DataGrid dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.queryByTestId(DELETE_BUTTON_TEST_ID)).not.toBeInTheDocument();
});

test('it shows actions when selection is enabled', () => {
  render(<DataGrid selection dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.getByTestId(DELETE_BUTTON_TEST_ID)).toBeInTheDocument();
  expect(screen.getByTestId(EXPORT_BUTTON_TEST_ID)).toBeInTheDocument();
});

test('actions are disabled when no selection is made', () => {
  render(<DataGrid selection dataUrl={DATA_URL} columns={COLUMNS} accessToken={ACCESS_TOKEN} />);

  expect(screen.getByTestId(DELETE_BUTTON_TEST_ID)).toBeDisabled();
  expect(screen.getByTestId(EXPORT_BUTTON_TEST_ID)).toBeDisabled();
});
