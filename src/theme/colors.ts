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
  dark1: '#2E2E2E',
  dark2: '#595959',
  dark3: '#858D9F',
  dark4: '#A2AABD',

  // Light
  light0: '#CCCCCC',
  light1: '#DBDBDD',
  light2: '#CFD6E4',
  light3: '#F3F3F4',
  light4: '#FFFFFF',
  light5: '#B8B8B8',
  light6: '#EEEEEE',
  light7: '#F9FAFB',

  // Red
  red0: '#E53535',
  red1: '#FF3B3B',
  red2: '#FF5C5C',
  red3: '#FF8080',
  red4: '#FFE5E5',
  red5: '#E11900',
  red6: '#AB1300',

  // Green
  green0: '#048848',
  green1: '#06C270',
  green2: '#39D98A',
  green3: '#57EBA1',
  green4: '#E6F2ED',
  green5: '#34785C',
  green6: '#06C167',

  // Blue
  blue0: '#004FC4',
  blue1: '#0063F7',
  blue2: '#5B8DEF',
  blue3: '#9DBFF9',
  blue4: '#E5F0FF',
  blue5: '#5B91F5',

  // Yellow
  yellow0: '#E5B800',
  yellow1: '#FFCC00',
  yellow2: '#FDDD48',
  yellow3: '#FDED72',
  yellow4: '#FFFEE5',
  yellow5: '#FFA502',
  yellow6: '#FFC043',
  yellow7: '#BC8B2C',

  // Purple
  purple0: '#3D357E',
  purple1: '#5147A8',
  purple2: '#6559D2',
  purple3: '#9E97E2',
  purple4: '#F0EEFA',
  purple5: '#E0DEF6',

  // Outlines
  darkOutline: '#3F404D',
  lightOutline: '#CFCFD2',
  redOutline: '#FF3B3B',
  greenOutline: '#06C270',
  blueOutline: '#0063F7',
  yellowOutline: '#FFCC00',
  purpleOutline: '#5147A8',

  // Brand
  brand700: '#3F3787',
};

export const lightColors: DeepPartial<Theme['colors']> = {
  contentPrimary: customColors.dark1,
  contentSecondary: customColors.dark2,
  contentTertiary: customColors.dark4,

  contentInversePrimary: customColors.light4,
  contentInverseSecondary: customColors.light2,
  contentInverseTertiary: customColors.light0,

  contentStateDisabled: customColors.light0,

  contentAccent: customColors.purple2,

  buttonSecondaryFill: customColors.light4,
  buttonSecondaryText: customColors.dark1,

  backgroundNegative: customColors.red1,
  backgroundPositive: customColors.green1,

  inputFillError: customColors.red4,

  accent: customColors.primaryMain,
};

export const darkColors: DeepPartial<Theme['colors']> = {
  buttonPrimaryText: '#e2e2e2',

  inputFillError: customColors.red4,

  accent: customColors.primaryMain,
};
