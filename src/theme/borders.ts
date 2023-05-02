import { Theme } from 'baseui/theme';
import { DeepPartial } from '../utils';
import { customColors } from './colors';

export const lightBorders: DeepPartial<Theme['borders']> = {
  border300: {
    borderColor: customColors.light2,
    borderStyle: 'solid',
    borderWidth: '1px',
  },
};

export const darkBorders: DeepPartial<Theme['borders']> = {};
