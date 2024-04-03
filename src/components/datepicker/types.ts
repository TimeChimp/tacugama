import { SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerProps as BaseDatepickerProps, CalendarProps } from 'baseui/datepicker';
import { TetherPlacement } from 'baseui/layer';

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

export interface DatepickerProps extends BaseDatepickerProps {
  placement?: TetherPlacement;
  locale?: SupportedLocale;
  weekStartDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  testId?: string;
  noBorder?: boolean;
  iconColor?: string;
  customValue: Date[];
  onChange: ({ date }: { date: any }) => void;
  translations?: DatepickerRangeTranslations;
  showSkeleton?: boolean;
}

export interface CustomDatepickerProps extends Omit<CalendarProps, 'onChange'> {
  dateFormat: string;
  date?: Date | Date[];
  placement?: TetherPlacement;
  locale?: SupportedLocale;
  weekStartDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  translations?: DatepickerRangeTranslations;
  onChange: (date: Date | Date[]) => void;
}
