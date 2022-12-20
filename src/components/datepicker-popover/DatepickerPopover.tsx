import React, { useEffect, useState } from 'react';
import { Popover } from '../popover';
import { borderBottom } from '../../utils';
import { useTheme } from '../../providers';
import { Calendar } from 'baseui/datepicker';
import { Select } from '../select';
import { getDateLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerPopoverProps } from './types';

export const DatepickerPopover = ({
  date,
  placement = 'bottomLeft',
  setIsOpen,
  isOpen,
  locale,
  weekStartDay,
  overrides,
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
          locale={localeObj}
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
              component: (props: any) => <Select {...props} />,
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
