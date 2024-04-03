import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import { FormatSettings } from './types';

export const defaultFormatSettings: FormatSettings = {
  timeFormat: 'HH:mm',
  durationFormat: 'HH:mm',
  dateFormat: 'dd/MM/yyyy',
  currency: 'USD',
  numberFormat: NumberFormat.Dot,
  language: 'en',
};
