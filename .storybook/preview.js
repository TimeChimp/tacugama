import React from 'react';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { ThemeProvider } from 'providers';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const styletron = new Styletron();

export const decorators = [
  (Story) => (
    <StyletronProvider value={styletron}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </StyletronProvider>
  ),
];
