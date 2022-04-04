import { SupportedLocale } from '../types';
import nl from 'date-fns/locale/nl';
import enUS from 'date-fns/locale/en-US';
import enGB from 'date-fns/locale/en-GB';

export const getDateLocale = (locale: SupportedLocale) => {
  const locales = {
    'nl-NL': nl,
    'en-US': enUS,
    'en-GB': enGB,
  };

  return locales[locale];
};
