import React from 'react';
import {
  Datepicker as BaseDatepicker,
  DatepickerProps,
  StatefulCalendar as BaseStatefulCalendar,
} from 'baseui/datepicker';

export const Datepicker = ({ ...rest }: DatepickerProps) => <BaseDatepicker {...rest} />;

export const StatefulCalendar = ({ ...rest }: DatepickerProps) => <BaseStatefulCalendar {...rest} />;

export default Datepicker;
