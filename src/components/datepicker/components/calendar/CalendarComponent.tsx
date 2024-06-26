import React, { useEffect, useState } from 'react';
import { Calendar, DatepickerOverrides } from 'baseui/datepicker';
import { borderRadius, padding } from '../../../../utils';
import { Block } from '../../../block';
import { useTheme } from '../../../../providers';
import { CalendarComponentProps } from './types';
import { getDateLocale } from '@timechimp/timechimp-typescript-helpers';
import { HIGH_Z_INDEX } from '../../../../models';
import { CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react';

export const CalendarOverride = (): DatepickerOverrides => {
  const {
    theme: {
      current: {
        typography: { LabelMedium, ParagraphSmall },
        colors: { primaryA, primaryB, primary, primary100 },
        sizing: { scale100, scale200, scale600, scale1000 },
        borders: { radius200 },
      },
    },
  } = useTheme();
  return {
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
              zIndex: HIGH_Z_INDEX,
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
      component: () => (
        <Block marginLeft={scale200} marginTop={scale200}>
          <CaretDown color={primaryA} size={18} />
        </Block>
      ),
    },
    PrevButtonIcon: {
      component: (props) => <CaretLeft {...props} color={primaryA} size={22} />,
    },
    NextButtonIcon: {
      component: (props) => <CaretRight {...props} color={primaryA} size={22} />,
    },
    Week: {
      style: {
        ...padding('0'),
      },
    },
    Day: {
      style: ({ $isHighlighted, $style, $selected, $isHovered }) => ({
        ...$style,
        ...ParagraphSmall,
        paddingTop: '0',
        paddingBottom: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: scale1000,
        height: scale1000,
        ':before': { backgroundColor: primary100 },
        ...($isHighlighted || $selected || $isHovered
          ? {
              color: $selected && $isHovered && !$isHighlighted ? primaryA : primaryB,
              ':after': {
                backgroundColor: primary,
                borderColor: primary,
                height: '100%',
              },
            }
          : {}),
      }),
    },
  };
};

export const CalendarComponent = ({ date, onChange, locale, range = true }: CalendarComponentProps) => {
  const [localeObj, setLocaleObj] = useState<Locale>();

  useEffect(() => {
    if (locale) {
      const localeObj = getDateLocale(locale);
      setLocaleObj(localeObj);
    }
  }, [locale]);

  return (
    <Calendar
      value={date}
      locale={localeObj}
      onChange={({ date }) => onChange(date)}
      range={range}
      overrides={CalendarOverride()}
    />
  );
};
