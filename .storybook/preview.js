import React from 'react';
import { ThemeProvider } from '../src/providers';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Welcome', 'Components'],
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

// .storybook/preview.js
