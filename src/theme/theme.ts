import {
  createLightTheme,
  createDarkTheme,
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
} from 'baseui';
import { CustomThemeType, CustomOverrideType, CustomColors } from 'models';

import { default as basePrimitives } from './primitives';
import { default as baseOverrides } from './overrides';
import { lightColors, darkColors, customColors } from './colors';
import { lightBorders, darkBorders } from './borders';
import { lightLighting, darkLighting } from './lighting';
import { customSizing } from './sizing';

import { toRGBColor, formatHexColor } from '../utils';
import { ThemePrimitives } from 'baseui/theme';

export interface ThemeOptionsProps {
  primary?: string;
  isDarkMode?: boolean;
}

export interface Theme {
  light: CustomThemeType;
  dark: CustomThemeType;
  current: CustomThemeType;
}

const defaultTheme: ThemeOptionsProps = {
  primary: '#6559D2',
  isDarkMode: false,
};

export const getTheme = (options: ThemeOptionsProps = defaultTheme): Theme => {
  const primaryHex = options.primary ? formatHexColor(options.primary) : defaultTheme.primary;
  const primaryRgb = toRGBColor(primaryHex || '#000');

  const lightPrimitives: Partial<ThemePrimitives> = {
    ...basePrimitives,
    primary: primaryHex,
    primary50: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .05)`,
    primary100: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .1)`,
    primary200: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .3)`,
    primary300: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .5)`,
    primary400: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1)`,
    primary500: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .9)`,
    primary600: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .8)`,
    primary700: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .7)`, // TODO make rgb darker?
  };

  const darkPrimitives: Partial<ThemePrimitives> = {
    ...basePrimitives,
    primary: primaryHex,
    primary50: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .05)`,
    primary100: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .1)`,
    primary200: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .3)`,
    primary300: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .5)`,
    primary400: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, 1)`,
    primary500: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .9)`,
    primary600: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .8)`,
    primary700: `rgba(${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}, .7)`, // TODO make rgb darker?
  };

  const darkCustomColors: CustomColors = {
    ...customColors,
    primarySubtle: '#141414',
  };

  const lightOverrides: CustomOverrideType = {
    ...baseOverrides,
    colors: lightColors,
    customSizing,
    borders: lightBorders,
    lighting: lightLighting,
    app: {
      background: customColors.light7,
    },
  };

  const darkOverrides: CustomOverrideType = {
    ...baseOverrides,
    customColors: darkCustomColors,
    customSizing,
    colors: darkColors,
    borders: darkBorders,
    lighting: darkLighting,
    app: {
      background: '#000',
    },
  };

  const light = createLightTheme(lightPrimitives, lightOverrides) as CustomThemeType;
  const dark = createDarkTheme(darkPrimitives, darkOverrides) as CustomThemeType;

  return {
    light,
    dark,
    current: options.isDarkMode ? dark : light,
  };
};

export const themedStyled = createThemedStyled<CustomThemeType>();
export const themedWithStyle = createThemedWithStyle<CustomThemeType>();
export const themedUseStyletron = createThemedUseStyletron<CustomThemeType>();
export { withStyle } from 'baseui';

export default getTheme;
