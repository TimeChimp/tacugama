import React, { createContext } from 'react';
import { ThemeOptionsProps, getTheme, Theme } from '../../theme';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (options?: ThemeOptionsProps) => void;
}

export const defaultThemeContextProps: ThemeContextProps = {
  theme: getTheme(),
  setTheme: () => null,
};

export const ThemeContext = createContext(defaultThemeContextProps);

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ThemeOptionsProps;
}
