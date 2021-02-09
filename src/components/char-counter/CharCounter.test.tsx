import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '../../utils/test-utils'
import { CharCounter } from '.';

const TITLE = 'test';
const CHAR_COUNT = 60;
const LABEL_TEXT = `${TITLE} (${CHAR_COUNT})`;

test('it shows number of characters when error', () => {
  render(<CharCounter error charCount={CHAR_COUNT} title={TITLE} />)

  expect(screen.getAllByText(LABEL_TEXT)).toBeInTheDocument()
})

test('it shows no characters when no error', () => {
  render(<CharCounter error={false} charCount={CHAR_COUNT} title={TITLE} />)

  expect(screen.queryAllByText(LABEL_TEXT)).not.toBeInTheDocument()
});
