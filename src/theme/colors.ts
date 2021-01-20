import { Theme } from 'baseui/theme';
import { CustomColors } from 'models';
import { DeepPartial } from '../utils';

export const lightColors: DeepPartial<Theme['colors']> = {
  contentPrimary: '#0F1020',
  contentSecondary: '#575863',
  contentTertiary: '#9F9FA6',
  contentStateDisabled: '#CFCFD2',
  buttonSecondaryFill: '#FFF',
  buttonSecondaryText: '#0F1020',
  backgroundNegative: '#FF0035',
  backgroundPositive: '#21A453',
};

export const darkColors: DeepPartial<Theme['colors']> = {
  buttonPrimaryText: '#e2e2e2',
};

export const customColors: CustomColors = {
  // Red
  red0: '#E53535',
  red1: '#FF3B3B',
  red2: '#FF5C5C,',
  red3: '#FF8080',
  red4: '#FFE5E5',
};
