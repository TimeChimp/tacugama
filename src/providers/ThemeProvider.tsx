import React, { useState, useEffect, createContext, useContext } from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { BaseProvider } from 'baseui';
import { ThemeOptionsProps, getTheme, Theme } from '../theme';

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (options?: ThemeOptionsProps) => void;
}

export const defaultThemeContextProps: ThemeContextProps = {
  theme: getTheme(),
  setTheme: () => null,
};

export const ThemeContext = createContext(defaultThemeContextProps);

const engine = new Styletron();

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

  const debug = process.env.NODE_ENV === 'production' ? void 0 : new DebugEngine();

  return (
    <StyletronProvider value={engine} debug={debug}>
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
