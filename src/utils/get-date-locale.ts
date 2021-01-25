import { SupportedLocale } from '../types/SupportedLocale';
import { enUS, nl } from 'date-fns/locale';

export const getDateLocale = (locale: SupportedLocale) => {
  switch (locale) {
    case 'nl-NL':
      return nl;
    case 'en-US':
      return enUS;
  }
};
