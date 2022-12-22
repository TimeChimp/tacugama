import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, configure } from '@testing-library/react';
import { ThemeProvider } from '../providers';
import { DATA_TEST_ID } from '../models';
require('core-js/stable');

configure({ testIdAttribute: DATA_TEST_ID });

// @ts-expect-error - TODO: fix this
const Providers: FC = ({ children }: { children: any }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

export { customRender as render };
