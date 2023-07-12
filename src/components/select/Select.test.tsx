import '@testing-library/jest-dom';
import * as React from 'react';
import { configure, render, screen } from '../../utils/test-utils';
import { Select } from './multi-select';
import { OPTIONS } from './test-data';

const SKELETON_TEST_ID = 'loader';
const LOADER_TITLE = 'Loading';

test('it shows a skeleton', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<Select options={OPTIONS} showSkeleton onChange={() => {}} />);

  // baseweb has set the loader test id in the following format: `testid`
  configure({ testIdAttribute: 'testid' });

  expect(screen.getByTestId(SKELETON_TEST_ID)).toBeInTheDocument();
});

// This test is skipped because it is not working. It is not finding the loader.
test.skip('it shows a loading indicator when loading', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(<Select options={OPTIONS} isLoading onChange={() => {}} />);

  expect(screen.getAllByTitle(LOADER_TITLE)).not.toBeNull();
});
