import React, { useEffect, useState } from 'react';
import { Calendar, DatepickerOverrides } from 'baseui/datepicker';
import { borderRadius, padding } from '../../../../utils';
import { Block } from '../../../block';
import { CaretDownIcon, CaretLeftIcon, CaretRightIcon } from '../../../icons';
import { useTheme } from '../../../../providers';
import { CalendarComponentProps } from './types';
import { getDateLocale } from '@timechimp/timechimp-typescript-helpers';

export const CalendarOverride = (): DatepickerOverrides => {
  const {
    theme: {
      current: {
        typography: { LabelMedium, ParagraphSmall },
        colors: { primaryA, primaryB },
        sizing: { scale100, scale200, scale600, scale1000 },
        borders: { radius200 },
      },
    },
  } = useTheme();
  return {
    //TODO: style dropdown?
    CalendarContainer: {
      style: {
        paddingTop: '0',
      },
    },
    Popover: {
      props: {
        overrides: {
          Body: {
            style: () => ({
              zIndex: 1000,
            }),
          },
        },
      },
    },
    MonthYearSelectPopover: {
      props: {
        overrides: {
          Body: {
            style: () => ({
              ...borderRadius(radius200),
              zIndex: 99999999,
            }),
          },
        },
      },
    },
    MonthYearSelectStatefulMenu: {
      props: {
        overrides: {
          List: {
            style: () => ({
              ...borderRadius(radius200),
            }),
          },
        },
      },
    },
    WeekdayHeader: {
      style: {
        width: 'auto',
        height: 'auto',
        ...padding(scale100, scale200),
        ...ParagraphSmall,
      },
    },
    CalendarHeader: {
      style: {
        backgroundColor: primaryB,
        ...ParagraphSmall,
      },
    },
    MonthHeader: {
      style: {
        backgroundColor: primaryB,
        //Set type?
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'space-between',
        ...padding('0', scale600),
      },
    },

    MonthYearSelectButton: {
      style: {
        color: primaryA,
        ...LabelMedium,
      },
    },
    MonthYearSelectIconContainer: {
      component: (props) => (
        <Block marginLeft={scale100}>
          <CaretDownIcon {...props} color={primaryA} size={25} />
        </Block>
      ),
    },
    PrevButtonIcon: {
      component: (props) => <CaretLeftIcon {...props} color={primaryA} size={25} />,
    },
    NextButtonIcon: {
      component: (props) => <CaretRightIcon {...props} color={primaryA} size={25} />,
    },
    Week: {
      style: {
        ...padding('0'),
      },
    },
    Day: {
      style: ({ $isHighlighted, $style, $selected }) => {
        return {
          ...$style,
          ...ParagraphSmall,
          paddingTop: '0',
          paddingBottom: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: scale1000,
          height: scale1000,

          ...($isHighlighted || $selected
            ? {
                color: primaryB,
                ':after': {
                  backgroundColor: primaryA,
                  height: '100%',
                },
              }
            : {}),
        };
      },
    },
  };
};

export const CalendarComponent = ({ date, onChange, locale }: CalendarComponentProps) => {
  const [localeObj, setLocaleObj] = useState<Locale>();

  useEffect(() => {
    if (locale) {
      const localeObj = getDateLocale(locale);

      //   if (weekStartDay && localeObj.options) {
      //     localeObj.options.weekStartsOn = weekStartDay;
      //   }

      setLocaleObj(localeObj);
    }
  }, [locale]);

  return (
    <Calendar
      value={date}
      locale={localeObj}
      onChange={({ date }) => {
        onChange(date);
      }}
      range
      overrides={CalendarOverride()}
    />
  );
};
