import React, { useEffect, useState } from 'react';
import { Calendar, DatepickerOverrides } from 'baseui/datepicker';
import { borderRadius, padding } from '../../../../utils';
import { Block } from '../../../block';
import { CaretDownIcon, CaretLeftIcon, CaretRightIcon } from '../../../icons';
import { useTheme } from '../../../../providers';
import { CalendarComponentProps } from './types';
import { getDateLocale } from '@timechimp/timechimp-typescript-helpers';
import { HIGH_Z_INDEX } from '../../../../models';

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
      style: ({ $isHighlighted, $style, $selected, $hasRangeOnRight, $pseudoSelected, $hasRangeSelected }) => {
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
          // default styling for days inside a range
          ':before': { backgroundColor: primary100 },
          // styling  for selected day(s)
          ...($selected
            ? {
                ':after': {
                  borderColor: primary,
                  height: '100%',
                },
              }
            : {}),

          // styling highlighted (hovered) days that are ($pseudoSelected) in and out of range when there's a range active
          ...($isHighlighted && !$selected
            ? {
                backgroundColor: $pseudoSelected ? primary100 : primaryB,
                ':after': {
                  backgroundColor: $pseudoSelected ? primary100 : 'transparent',
                  borderColor: primary,
                  height: '100%',
                },
                ':before': {
                  backgroundColor: primaryB,
                  borderRadius: '100%',
                  position: 'absolute',
                  left: '0px',
                  top: '0px',
                  width: '100%',
                  height: '100%',
                },
              }
            : {}),

          // styling highlighted (hovered) days when a range is not active
          ...($isHighlighted && !$hasRangeSelected
            ? {
                backgroundColor: primaryB,
                ':before': {
                  position: 'absolute',
                  left: '0px',
                  top: '0px',
                  width: '100%',
                  height: '100%',

                  ...($hasRangeOnRight
                    ? {
                        borderTopRightRadius: '100%',
                        borderTopLeftRadius: '0',
                        borderBottomRightRadius: '100%',
                        borderBottomLeftRadius: '0',
                        backgroundColor: primary100,
                      }
                    : {
                        borderTopRightRadius: '0',
                        borderTopLeftRadius: '100%',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '100%',
                        backgroundColor: primary100,
                      }),
                },
              }
            : {}),
        };
      },
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
