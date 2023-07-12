import React, { useEffect, useState } from 'react';
import { Popover } from '../popover';
import { borderBottom } from '../../utils';
import { useTheme } from '../../providers';
import { Calendar, QuickSelectOption } from 'baseui/datepicker';
import { SingleSelect } from '../select';
import { getDateLocale, TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerPopoverProps } from './types';

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

  const quickSelectOptions: QuickSelectOption<Date>[] = [
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
          onChange={onChange}
          locale={localeObj}
          quickSelect
          quickSelectOptions={quickSelectOptions}
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
              component: (props) => {
                console.log(props);
                return (
                  <SingleSelect
                    {...props}
                    disableSortOptions
                    onChange={(option) => onChange && onChange({ date: option?.id as unknown as Date })}
                  />
                );
              },
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
