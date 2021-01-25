import { SupportedLocale } from '../types/SupportedLocale';
import nl from 'date-fns/locale/nl';
import enUS from 'date-fns/locale/en-US';

export const getDateLocale = (locale: SupportedLocale) => {
  const locales = {
    'nl-NL': nl,
    'en-US': enUS,
  };

  return locales[locale];
};
