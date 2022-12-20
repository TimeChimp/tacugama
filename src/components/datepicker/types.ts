import { SupportedLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerProps } from 'baseui/datepicker';
import { TetherPlacement } from 'baseui/layer';

export interface DatePickerProps extends DatepickerProps {
  placement?: TetherPlacement;
  locale?: SupportedLocale;
  weekStartDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  testId?: string;
  noBorder?: boolean;
  iconColor?: string;
  customValue: Date[];
  setCustomValue: (date: Date[]) => any;
}
