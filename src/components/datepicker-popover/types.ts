import { TetherPlacement } from 'baseui/layer';
import { CalendarProps } from 'baseui/datepicker';
import { SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerRangeTranslations } from '../datepicker';

export interface DatepickerPopoverProps extends CalendarProps {
  date?: Date | Date[];
  placement?: TetherPlacement;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => any;
  locale?: SupportedLocale;
  weekStartDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  translations?: DatepickerRangeTranslations;
}
