import { SupportedLocale } from '@timechimp/timechimp-typescript-helpers';

export interface CalendarComponentProps {
  onChange: (date: Date | (Date | null | undefined)[] | undefined | null) => void;
  date: Date[];
  locale: SupportedLocale;
}
