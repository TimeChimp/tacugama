import { Theme } from 'baseui/theme';
import { DeepPartial } from '../utils';

export const lightLighting: DeepPartial<Theme['lighting']> = {
  shadow400: '0px 1px 2px rgba(0, 0, 0, 0.08)',
  shadow500: '0px 4px 16px rgba(0, 0, 0, 0.12)',
};

export const darkLighting: DeepPartial<Theme['lighting']> = {};
