import React, { useState, useEffect, useContext } from 'react';
import { BaseProvider } from 'baseui';
import { ThemeOptionsProps, getTheme } from '../../theme';
import { debug, styletron, StyletronProvider } from '../styletron/StyletronProvider';
import { defaultThemeContextProps, ThemeContext, ThemeProviderProps } from './types';

export const ThemeProvider = ({ children, theme: themeOptions }: ThemeProviderProps) => {
  const [themeContext, setThemeContext] = useState(defaultThemeContextProps);
  const [currentTheme, setCurrentTheme] = useState(getTheme(themeOptions).current);

  useEffect(() => {
    setThemeContext((state) => ({
      ...state,
      setTheme,
    }));
  }, []); // eslint-disable-line

  function setTheme(options?: ThemeOptionsProps) {
    const theme = getTheme(options);
    setCurrentTheme(theme.current);
    setThemeContext((prevState) => ({ ...prevState, theme }));
  }

  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <ThemeContext.Provider value={themeContext}>
        <BaseProvider
          theme={currentTheme}
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
