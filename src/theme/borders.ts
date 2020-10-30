import { Theme } from 'baseui/theme';
import { DeepPartial } from '../utils';

export const lightBorders: DeepPartial<Theme['borders']> = {
  border300: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#E7E7E9',
  },
};

export const darkBorders: DeepPartial<Theme['borders']> = {};
