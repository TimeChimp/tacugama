import React, { FC, ReactElement } from 'react';
import { render, RenderOptions, configure } from '@testing-library/react';
import { ThemeProvider } from '../providers';
import { DATA_TEST_ID } from '../models';

configure({ testIdAttribute: DATA_TEST_ID });

const Providers: FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options });

export * from '@testing-library/react';

export { customRender as render };
