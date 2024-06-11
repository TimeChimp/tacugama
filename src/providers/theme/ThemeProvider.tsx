import React, { useState, useEffect, useContext } from 'react';
import { BaseProvider } from 'baseui';
import { ThemeOptionsProps, getTheme } from '../../theme';
import { styletron, StyletronProvider } from '../styletron/StyletronProvider';
import { defaultThemeContextProps, ThemeContext, ThemeProviderProps } from './types';
import { IconContext } from '@phosphor-icons/react';

export const ThemeProvider = ({ children, theme: themeOptions }: ThemeProviderProps) => {
  const [themeContext, setThemeContext] = useState(defaultThemeContextProps);
  const [currentTheme, setCurrentTheme] = useState(getTheme(themeOptions).current);

  useEffect(() => {
    setThemeContext((state) => ({
      ...state,
      setTheme,
    }));
  }, []);

  function setTheme(options?: ThemeOptionsProps) {
    const theme = getTheme(options);
    setCurrentTheme(theme.current);
    setThemeContext((prevState) => ({ ...prevState, theme }));
  }

  return (
    <StyletronProvider value={styletron} debugAfterHydration>
      <ThemeContext.Provider value={themeContext}>
        <BaseProvider
          theme={currentTheme}
          overrides={{
            AppContainer: {
              style: { height: '100%' },
            },
          }}
        >
          <IconContext.Provider
            value={{
              size: 16,
            }}
          >
            {children}
          </IconContext.Provider>
        </BaseProvider>
      </ThemeContext.Provider>
    </StyletronProvider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default useTheme;
