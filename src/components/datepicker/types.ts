import { SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerProps as BaseDatepickerProps } from 'baseui/datepicker';

export interface DatepickerRangeTranslations {
  chooseRangeLabel?: string;
  today?: string;
  yesterday?: string;
  thisWeek?: string;
  thisMonth?: string;
  thisQuarter?: string;
  thisYear?: string;
  previousWeek?: string;
  previousMonth?: string;
  previousQuarter?: string;
  previousYear?: string;
  custom?: string;
  allPeriods?: string;
}

export interface DatepickerProps extends Omit<BaseDatepickerProps, 'quickSelect' | 'range'> {
  locale?: SupportedLocale;
  testId?: string;
  noBorder?: boolean;
  iconColor?: string;
  customValue: Date[];
  onChange: ({ date }: { date: any }) => void;
  showSkeleton?: boolean;
}
