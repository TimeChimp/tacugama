import '@testing-library/jest-dom';
import * as React from 'react';
import { configure, render, screen } from '../../utils/test-utils';
import { Select } from '.';
import { OPTIONS } from './test-data';

const SKELETON_TEST_ID = 'loader';
const LOADER_TITLE = 'Loading';

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
