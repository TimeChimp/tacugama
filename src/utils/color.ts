import { ColorTokens } from 'baseui/themes';
import { ButtonType, CustomColors, CustomThemeType } from '../models';

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

export const toRGBAColorString = (hex: string, opacity: number) => {
  const rgb = toRGBColor(hex);
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})`;
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

interface GetInputColorParams {
  error?: boolean;
  success?: boolean;
  isFocused?: boolean;
  hover?: boolean;
  disabled?: boolean;
  customColors: CustomColors;
  colors: ColorTokens;
  hasValue?: boolean;
}

export function getInputBackgroundColor({
  disabled,
  customColors: { light3 },
  colors: { primaryB },
}: GetInputColorParams) {
  if (disabled) {
    return light3;
  }

  return primaryB;
}

export const getInputTextColor = ({ isFocused, hasValue, customColors: { dark1, dark4 } }: GetInputColorParams) => {
  if (isFocused || hasValue) {
    return dark1;
  }

  return dark4;
};

export const getInputBorderColor = ({
  error,
  success,
  disabled,
  isFocused,
  hover,
  customColors: { red0, green0, light2 },
  colors: { primary },
}: GetInputColorParams) => {
  if (disabled) {
    return light2;
  }
  if (error) {
    return red0;
  }
  if (success) {
    return green0;
  }
  if (isFocused || hover) {
    return primary;
  }
  return light2;
};

export const getButtonBackgroundColor = (
  type: ButtonType,
  { green1, red0 }: CustomColors,
  { primary }: ColorTokens,
) => {
  const colors = {
    default: primary,
    success: green1,
    error: red0,
  };

  return colors[type];
};

export const getButtonBackgroundHoverColor = (type: ButtonType, { primary }: ColorTokens) => {
  const colors = {
    default: primary,
    success: '#06C270',
    error: '#BF2828',
  };

  return colors[type];
};

export const getRadioBorderColor = (disabled: boolean, checked: boolean, theme: CustomThemeType) => {
  if (disabled) {
    return theme.customColors.dark4;
  }
  if (checked) {
    return theme.colors.primary;
  }
  return theme.customColors.dark4;
};

export const getRadioBackgroundColor = (disabled: boolean, checked: boolean, theme: CustomThemeType) => {
  if (checked) {
    if (disabled) {
      return theme.customColors.dark4;
    }
    return theme.colors.primary;
  }
  return 'transparent';
};
