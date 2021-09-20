import '@testing-library/jest-dom';
import * as React from 'react';
import { configure, render, screen } from '../../utils/test-utils';
import { Select } from '.';

const SKELETON_TEST_ID = 'loader';
const LOADER_TITLE = 'Loading';
export const OPTIONS = [
  { name: 'AliceBlue', id: '#F0F8FF', color: '#F0F8FF' },
  { name: 'AntiqueWhite', id: '#FAEBD7', color: '#FAEBD7' },
  { name: 'Aqua', id: '#00FFFF', color: '#00FFFF' },
  { name: 'Aquamarine', id: '#7FFFD4', color: '#7FFFD4' },
  { name: 'Azure', id: '#F0FFFF', color: '#F0FFFF' },
  { name: 'Beige', id: '#F5F5DC', color: '#F5F5DC' },
];

test('it shows a skeleton', () => {
  render(<Select options={OPTIONS} showSkeleton onChangeHandler={() => {}} />);

  // baseweb has set the loader test id in the following format: `testid`
  configure({ testIdAttribute: 'testid' });

  expect(screen.getByTestId(SKELETON_TEST_ID)).toBeInTheDocument();
});

test('it shows a loading indicator when loading', () => {
  render(<Select options={OPTIONS} isLoading onChangeHandler={() => {}} />);

  expect(screen.getAllByTitle(LOADER_TITLE)).not.toBeNull();
});
