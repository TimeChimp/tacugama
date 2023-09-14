import React, { useEffect, useMemo, useState } from 'react';
import { Popover } from '../popover';
import { borderBottom } from '../../utils';
import { useTheme } from '../../providers';
import { Calendar } from 'baseui/datepicker';
import { Select } from '../select/Select';
import { getDateLocale, TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerOption, DatepickerPopoverProps } from './types';

export const DatepickerPopover = ({
  date,
  placement = 'bottomLeft',
  setIsOpen,
  isOpen,
  locale,
  weekStartDay,
  overrides,
  translations,
  onChange,
  quickSelect = false,
  ...rest
}: DatepickerPopoverProps) => {
  const [localeObj, setLocaleObj] = useState<Locale>();
  const {
    theme: {
      current: {
        borders: { border300 },
        colors: { primaryA, primaryB, contentTertiary },
      },
    },
  } = useTheme();

  useEffect(() => {
    if (locale) {
      const localeObj = getDateLocale(locale);

      if (weekStartDay && localeObj.options) {
        localeObj.options.weekStartsOn = weekStartDay;
      }

      setLocaleObj(localeObj);
    }
  }, [locale, weekStartDay]);

  const quickSelectOptions: DatepickerOption[] = [
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
      beginDate: new TcDate().startOf('week').toDate(),
      endDate: new TcDate().endOf('week').toDate(),
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
      beginDate: new TcDate().subtract(1, 'week').startOf('week').toDate(),
      endDate: new TcDate().subtract(1, 'week').endOf('week').toDate(),
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

  const isDateInQuickSelectOptions = useMemo(() => {
    if (!date || !quickSelect) {
      return false;
    }

    if (!Array.isArray(date)) {
      return quickSelectOptions.some((option) => isSameSingleDate(option, date));
    }
    return quickSelectOptions.some((option) => isSameDates(option, date));
  }, [date, quickSelectOptions]);

  const quickSelectValue = useMemo(() => {
    if (!date || !quickSelect || !isDateInQuickSelectOptions) {
      return undefined;
    }

    if (!Array.isArray(date)) {
      const quickSelectOption = quickSelectOptions.find((option) => isSameSingleDate(option, date));
      return quickSelectOption;
    }

    const quickSelectOption = quickSelectOptions.find((option) => isSameDates(option, date));
    return quickSelectOption;
  }, [date, quickSelectOptions, isDateInQuickSelectOptions]);

  return (
    <Popover
      isOpen={isOpen}
      placement={placement}
      onClickOutside={() => {
        isOpen && setIsOpen(false);
      }}
      overrides={{
        Body: {
          style: {
            zIndex: 1000,
          },
        },
      }}
      content={() => (
        <Calendar
          value={date}
          onChange={({ date }) => {
            if (date) {
              onChange(date as Date | Date[]);
            }
          }}
          locale={localeObj}
          quickSelect={quickSelect}
          range={quickSelect}
          overrides={{
            CalendarHeader: {
              style: {
                backgroundColor: primaryB,
                ...borderBottom(border300),
              },
            },
            MonthHeader: {
              style: {
                backgroundColor: primaryB,
                color: primaryA,
                fontWeight: 600,
              },
            },
            MonthYearSelectButton: {
              style: {
                color: primaryA,
                fontWeight: 600,
              },
            },
            PrevButton: {
              style: {
                color: contentTertiary,
              },
            },
            NextButton: {
              style: {
                color: contentTertiary,
              },
            },
            QuickSelect: {
              component: (props) => (
                <Select
                  {...props}
                  options={quickSelectOptions}
                  value={quickSelectValue && [quickSelectValue]}
                  disableSortOptions
                  clearable={false}
                  onChangeHandler={({ value }) => onChange && onChange(value)}
                />
              ),
            },
            ...overrides,
          }}
          {...rest}
        />
      )}
    >
      <div />
    </Popover>
  );
};
