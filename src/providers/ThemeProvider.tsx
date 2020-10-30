import React, { useState, useEffect, createContext, useContext } from 'react';
import { BaseProvider } from 'baseui';
import { ThemeOptionsProps, getTheme, Theme } from '../theme';
import { debug, styletron, StyletronProvider } from './styletron';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (options?: ThemeOptionsProps) => void;
}

export const defaultThemeContextProps: ThemeContextProps = {
  theme: getTheme(),
  setTheme: () => null,
};

export const ThemeContext = createContext(defaultThemeContextProps);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeContext, setThemeContext] = useState(defaultThemeContextProps);

  useEffect(() => {
    setThemeContext((state) => ({
      ...state,
      setTheme,
    }));
  }, []); // eslint-disable-line

  function setTheme(options?: ThemeOptionsProps) {
    const theme = getTheme(options);
    setThemeContext((prevState) => ({ ...prevState, theme }));
  }

  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <ThemeContext.Provider value={themeContext}>
        <BaseProvider
          theme={themeContext.theme.current}
          overrides={{
            AppContainer: {
              style: { height: '100%' },
            },
          }}
        >
          {children}
        </BaseProvider>
      </ThemeContext.Provider>
    </StyletronProvider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default useTheme;
