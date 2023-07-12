import { TetherPlacement } from 'baseui/layer';
import { CalendarProps } from 'baseui/datepicker';
import { SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerRangeTranslations } from '../datepicker';
import { SingleSelectOption as Option } from '../select';

export type DatepickerOption = Option<string, 'id', 'id'>;

export interface DatepickerPopoverProps extends Omit<CalendarProps, 'onChange'> {
  date?: Date | Date[];
  placement?: TetherPlacement;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  locale?: SupportedLocale;
  weekStartDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  translations?: DatepickerRangeTranslations;
  onChange: (date: Date | Date[]) => void;
}
