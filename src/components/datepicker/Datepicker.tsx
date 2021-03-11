import React, { useEffect, useState } from 'react';
import { Popover } from '../popover';
import { TetherPlacement } from 'baseui/layer';
import { borderBottom } from '../../utils';
import { useTheme } from '../../providers/ThemeProvider';
import { ClickOutside } from '../click-outside/ClickOutside';
import { StatefulCalendar, CalendarProps } from 'baseui/datepicker';
import { SupportedLocale } from '../../types/SupportedLocale';
import { getDateLocale } from '../../utils/get-date-locale';

export interface DatepickerProps extends CalendarProps {
  date: Date;
  placement?: TetherPlacement[keyof TetherPlacement];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => any;
  onChange?: (args: { date: Date | Date[] }) => any;
  locale?: SupportedLocale;
  weekStartDay?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
}

export const Datepicker = ({
  date,
  placement = 'bottomLeft',
  setIsOpen,
  isOpen,
  onChange,
  locale,
  weekStartDay,
  ...rest
}: DatepickerProps) => {
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
      content={() => (
        <ClickOutside onClickOutside={() => isOpen && setIsOpen(false)}>
          <StatefulCalendar
            locale={localeObj}
            value={date}
            onChange={onChange}
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
            }}
            {...rest}
          />
        </ClickOutside>
      )}
    >
      <div />
    </Popover>
  );
};
