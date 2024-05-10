import React, { useEffect, useMemo, useState } from 'react';
import { useTheme } from '../../providers';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerOption } from '../datepicker-popover/types';
import { DatepickerPopover } from '../datepicker-popover';
import { SingleSelect } from '../select';
import { Datepicker } from '../datepicker/Datepicker';
import { FlexItem } from '../flex-item';
import { Block } from 'baseui/block';
import { CustomDatepickerProps } from './types';
import { defaultFormatSettings } from '../data-grid/defaultFormatSettings';

export const CustomDatepicker = ({
  date = new Date(),
  translations,
  onChange,
  dateFormat,
  ...rest
}: CustomDatepickerProps) => {
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false);
  const [value, setValue] = useState(Array.isArray(date) ? date : [date]);

  const {
    theme: {
      current: {
        sizing: { scale200, scale300, scale4800 },
        customSizing: { scale6000 },
      },
    },
  } = useTheme();

  const quickSelectOptions: DatepickerOption[] = [
    {
      id: translations?.allPeriods ?? 'All periods',
      beginDate: new Date('01-01-1900'),
      endDate: new Date('01-01-9999'),
    },
    {
      id: translations?.today ?? 'Today',
      beginDate: new Date(),
      endDate: new Date(),
    },
    {
      id: translations?.yesterday ?? 'Yesterday',
      beginDate: new TcDate().subtract(1, 'day').toDate(),
      endDate: new TcDate().subtract(1, 'day').toDate(),
    },
    {
      id: translations?.thisWeek ?? 'This week',
      beginDate: new TcDate().startOf('week', 1).getDateWithoutTimeAsUTC(),
      endDate: new TcDate().endOf('week', 1).getDateWithoutTimeAsUTC(),
    },
    {
      id: translations?.thisMonth ?? 'This month',
      beginDate: new TcDate().startOf('month').toDate(),
      endDate: new TcDate().endOf('month').toDate(),
    },
    {
      id: translations?.thisQuarter ?? 'This quarter',
      beginDate: new TcDate().startOf('quarter').toDate(),
      endDate: new TcDate().endOf('quarter').toDate(),
    },
    {
      id: translations?.thisYear ?? 'This year',
      beginDate: new TcDate().startOf('year').toDate(),
      endDate: new TcDate().endOf('year').toDate(),
    },
    {
      id: translations?.previousWeek ?? 'Previous week',
      beginDate: new TcDate().subtract(1, 'week').startOf('week', 1).toDate(),
      endDate: new TcDate().subtract(1, 'week').endOf('week', 1).toDate(),
    },
    {
      id: translations?.previousMonth ?? 'Previous month',
      beginDate: new TcDate().subtract(1, 'month').startOf('month').toDate(),
      endDate: new TcDate().subtract(1, 'month').endOf('month').toDate(),
    },
    {
      id: translations?.previousQuarter ?? 'Previous quarter',
      beginDate: new TcDate().subtract(1, 'quarter').startOf('quarter').toDate(),
      endDate: new TcDate().subtract(1, 'quarter').endOf('quarter').toDate(),
    },
    {
      id: translations?.previousYear ?? 'Previous year',
      beginDate: new TcDate().subtract(1, 'year').startOf('year').toDate(),
      endDate: new TcDate().subtract(1, 'year').endOf('year').toDate(),
    },
    { id: translations?.custom ?? 'Custom' },
  ];

  const isSameDates = (option: DatepickerOption, _date: Date[]) => {
    const selectedBeginDate = _date[0];
    const selectedEndDate = _date[1];
    const optionBeginDate = new TcDate(option.beginDate);
    const optionEndDate = new TcDate(option.endDate);

    return optionBeginDate.isSame(selectedBeginDate, 'day') && optionEndDate.isSame(selectedEndDate, 'day');
  };

  const isSameSingleDate = (option: DatepickerOption, _date: Date) => {
    const selectedDate = _date;
    const optionBeginDate = new TcDate(option.beginDate);

    return optionBeginDate.isSame(selectedDate, 'day');
  };

  useEffect(() => {
    if (!date) {
      return;
    }

    let quickSelectOption;

    if (!Array.isArray(date)) {
      quickSelectOption = quickSelectOptions.find((option) => isSameSingleDate(option, date));
    } else {
      quickSelectOption = quickSelectOptions.find((option) => isSameDates(option, date));
    }

    if (quickSelectOption) {
      return;
    }

    setIsDatepickerOpen(true);

    if (Array.isArray(date)) {
      setValue(date);
      return;
    }

    setValue([date]);
  }, [date]);

  const isDateInQuickSelectOptions = useMemo(() => {
    if (!date) {
      return false;
    }

    if (!Array.isArray(date)) {
      return quickSelectOptions.some((option) => isSameSingleDate(option, date));
    }
    return quickSelectOptions.some((option) => isSameDates(option, date));
  }, [date, quickSelectOptions]);

  const quickSelectValue = useMemo(() => {
    if (!date) {
      return undefined;
    }

    if (!isDateInQuickSelectOptions) {
      return quickSelectOptions.find((option) => option.id === 'Custom');
    }

    if (!Array.isArray(date)) {
      const quickSelectOption = quickSelectOptions.find((option) => isSameSingleDate(option, date));
      return quickSelectOption;
    }

    const quickSelectOption = quickSelectOptions.find((option) => isSameDates(option, date));
    return quickSelectOption;
  }, [date, quickSelectOptions, isDateInQuickSelectOptions]);

  const handleQuickOptionsClick = (value: DatepickerOption | null) => {
    if (!value) {
      return;
    }

    if (value.id === 'Custom') {
      setIsDatepickerOpen(true);
      setValue([new Date(), new Date()]);
    } else {
      setIsDatepickerOpen(false);
      onChange([value.beginDate, value.endDate]);
    }
  };

  const handleDateClick = (date: Date[]) => {
    if (date.length > 1) {
      onChange(date);
      return;
    }

    setValue(date);
  };

  const actualDateFormat = useMemo(() => {
    if (dateFormat) {
      return dateFormat;
    }

    return defaultFormatSettings.dateFormat;
  }, [dateFormat]);

  const mask = useMemo(() => {
    return actualDateFormat
      ?.toLocaleLowerCase()
      .replace('yyyy', '9999')
      .replace('yy', '99')
      .replace('dd', '99')
      .replace('mm', '99');
  }, []);

  return (
    <FlexItem width="auto">
      <Block flex={1} paddingTop={scale200} paddingRight={scale300} minWidth={scale4800}>
        <SingleSelect
          defaultValue={quickSelectValue || quickSelectOptions[0]}
          valueKey="id"
          labelKey="id"
          disableSortOptions
          options={quickSelectOptions}
          onChange={handleQuickOptionsClick}
        />
      </Block>
      {isDatepickerOpen && (
        <Block flex={1} paddingTop={scale200} paddingRight={scale300} minWidth={scale6000}>
          <Datepicker
            {...rest}
            range
            customValue={value}
            onChange={({ date }) => handleDateClick(date)}
            quickSelect={false}
            //formatString={actualDateFormat}
            //placeholder={`${actualDateFormat} - ${actualDateFormat}`.toLocaleLowerCase()}
            //mask={`${mask} - ${mask}`}
          />
        </Block>
      )}
    </FlexItem>
  );
};
