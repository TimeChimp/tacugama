import { Theme } from 'baseui/theme';
import { CustomColors } from 'models';
import { DeepPartial } from '../utils';

export const customColors: CustomColors = {
  // Primary
  primaryDarker: '#473E93',
  primaryMain: '#6559D2',
  primaryLighter: '#BAB4EA',
  primarySubtle: '#F7F7FD',

  // Dark
  dark0: '#0F1020',
  dark1: '#1B1C2B',
  dark2: '#3F404D',
  dark3: '#575863',
  dark4: '#87878F',

  // Light
  light0: '#CFCFD2',
  light1: '#DBDBDD',
  light2: '#E7E7E9',
  light3: '#F3F3F4',
  light4: '#FFFFFF',

  // Red
  red0: '#E53535',
  red1: '#FF3B3B',
  red2: '#FF5C5C',
  red3: '#FF8080',
  red4: '#FFE5E5',

  // Green
  green0: '#05A660',
  green1: '#06C270',
  green2: '#39D98A',
  green3: '#57EBA1',
  green4: '#E3FFF1',

  // Blue
  blue0: '004FC4',
  blue1: '0063F7',
  blue2: '5B8DEF',
  blue3: '9DBFF9',
  blue4: 'E5F0FF',

  // Yellow
  yellow0: '#E5B800',
  yellow1: '#FFCC00',
  yellow2: '#FDDD48',
  yellow3: '#FDED72',
  yellow4: '#FFFEE5',

  // Purple
  purple0: '#3D357E',
  purple1: '#5147A8',
  purple2: '#6559D2',
  purple3: '#9E97E2',
  purple4: '#F0EEFA',

  // Outlines
  darkOutline: '#3F404D',
  lightOutline: '#CFCFD2',
  redOutline: '#FF3B3B',
  greenOutline: '#06C270',
  blueOutline: '#0063F7',
  yellowOutline: '#FFCC00',
  purpleOutline: '#5147A8',
};

export const lightColors: DeepPartial<Theme['colors']> = {
  contentPrimary: customColors.dark0,
  contentSecondary: customColors.dark3,
  contentTertiary: '#9F9FA6',
  contentStateDisabled: customColors.light0,
  contentAccent: customColors.purple2,
  buttonSecondaryFill: customColors.light4,
  buttonSecondaryText: customColors.dark0,
  backgroundNegative: customColors.red1,
  backgroundPositive: customColors.green1,

  borderError: customColors.red3,
  inputFillError: customColors.red4,

  accent: 'none',
};

export const darkColors: DeepPartial<Theme['colors']> = {
  buttonPrimaryText: '#e2e2e2',

  borderError: customColors.red3,
  inputFillError: customColors.red4,

  accent: 'none',
};
