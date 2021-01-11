import { Borders, Colors } from 'baseui/theme';
import { ButtonType } from '../models';

const padZeroRight = (input: string, length: number) => input + '0'.repeat(length - input.length);
const padZeroLeft = (input: string, length: number) => ('0'.repeat(length) + input).slice(-length);

export const formatHexColor = (hex: string) => {
  return hex.substring(0, 1) === '#' ? hex : `#${hex}`;
};

interface HexColorParseOptions {
  autoComplete?: boolean;
}

export const parseHexColor = (hex: string, options?: HexColorParseOptions) => {
  hex = hex.replace(/[^0-9a-fA-F]/, '').substring(0, 6);

  if (hex.length < 6 && options?.autoComplete) {
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    } else {
      hex = padZeroRight(hex, 6);
    }
  }
  return hex;
};

type RGBColor = {
  r: number;
  g: number;
  b: number;
};

export const toRGBColor = (hex: string): RGBColor => {
  hex = parseHexColor(hex, { autoComplete: true });

  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
};

interface HexColorInverseOptions {
  blackWhite?: boolean;
  lightColor?: string;
  darkColor?: string;
}

const defaultHexColorInverseOptions: HexColorInverseOptions = {
  blackWhite: false,
  lightColor: '#ffffff',
  darkColor: '#000000',
};

export const invertHexColor = (hex: string, options?: HexColorInverseOptions) => {
  options = { ...defaultHexColorInverseOptions, ...options };
  hex = parseHexColor(hex, { autoComplete: true });

  const thressHold = 186;

  // http://stackoverflow.com/a/3943023/112731

  const rgb = toRGBColor(hex);

  if (options.blackWhite) {
    return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > thressHold ? options.darkColor : options.lightColor;
  }

  // invert color components
  const newR = (255 - rgb.r).toString(16),
    newG = (255 - rgb.g).toString(16),
    newB = (255 - rgb.b).toString(16);

  const newHex = padZeroLeft(newR, 2) + padZeroLeft(newG, 2) + padZeroLeft(newB, 2);

  return newHex;
};

export function getInputContainerColors($error: boolean, colors: Colors) {
  /**
   * This helper is based on BaseWeb's internal helper, which can be used more dynamically.
   * Source: https://github.com/uber/baseweb/blob/eebaf24fecc2d0b54133af41d31604fc54b6b3e3/src/input/styled-components.js#L329
   */

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillError,
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.backgroundPrimary,
  };
}

export const getInputBorderColor = (
  error: boolean,
  isFocused: boolean,
  { borderError, primary }: Colors,
  { border300: { borderColor } }: Borders,
) => {
  if (error) {
    return borderError;
  }
  if (isFocused) {
    return primary;
  }
  return borderColor;
};

export const getInputTextColor = (disabled: boolean, { contentPrimary, contentStateDisabled }: Colors) => {
  if (disabled) {
    return contentStateDisabled;
  }
  return contentPrimary;
};

export const getInputPlaceholderTextColor = (
  disabled: boolean,
  isFocused: boolean,
  { contentSecondary, contentTertiary, contentStateDisabled }: Colors,
) => {
  if (disabled) {
    return contentStateDisabled;
  }

  if (isFocused) {
    return contentSecondary;
  }

  return contentTertiary;
};

export const getButtonBackgroundColor = (type: ButtonType, { primary400, backgroundPositive }: Colors) => {
  const colors = {
    default: primary400,
    success: backgroundPositive,
    error: '#FF5C5C',
  };

  return colors[type];
};

export const getButtonBackgroundHoverColor = (type: ButtonType) => {
  const colors = {
    default: '#5147A8',
    success: '#06C270',
    error: '#FF3B3B',
  };

  return colors[type];
};
