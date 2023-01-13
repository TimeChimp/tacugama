import { Theme } from 'baseui/theme';
import { DeepPartial } from '../utils';
import { customColors } from './colors';

export const lightBorders: DeepPartial<Theme['borders']> = {
  border300: {
    // @ts-ignore - For some reason, the type definition for borderColor is not correct
    borderColor: customColors.light2,
    borderStyle: 'solid',
    // @ts-ignore - For some reason, the type definition for borderColor is not correct
    borderWidth: '1px',
  },
};

export const darkBorders: DeepPartial<Theme['borders']> = {};
