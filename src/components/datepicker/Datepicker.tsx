import React, { useEffect, useState } from 'react';
import {
  border,
  borderBottom,
  borderRadius,
  getInputBorderColor,
  getInputTextColor,
  getInputBackgroundColor,
  margin,
  padding,
} from '../../utils';
import { useTheme } from '../../providers';
import { DatePicker, DatepickerOverrides, SharedStylePropsT } from 'baseui/datepicker';
import { Select } from '../select';
import { DATA_TEST_ID } from '../../models';
import { InputOverrides, InputProps } from 'baseui/input';
import { Calendar } from '../icons';
import { getDateLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatePickerProps } from './types';

export const Datepicker = ({
  customValue,
  setCustomValue,
  onChange,
  placement = 'bottomLeft',
  locale,
  weekStartDay,
  overrides,
  noBorder,
  testId,
  iconColor,
  ...rest
}: DatePickerProps & InputProps) => {
  const [localeObj, setLocaleObj] = useState<Locale>();

  const {
    theme: {
      current: {
        sizing: { scale500, scale600, scale1000 },
        colors: { primaryA, contentTertiary },
        borders,
        colors,
        customColors,
      },
    },
  } = useTheme();
  const { border300 } = borders;
  const { primaryB } = colors;

  useEffect(() => {
    if (locale) {
      const localeObj = getDateLocale(locale);

      if (weekStartDay && localeObj.options) {
        localeObj.options.weekStartsOn = weekStartDay;
      }

      setLocaleObj(localeObj);
    }
  }, [locale, weekStartDay]);

  const inputBaseOverrides: InputOverrides = {
    Input: {
      style: ({ $disabled, $isFocused, $theme }) => {
        const backgroundColor = getInputBackgroundColor({ disabled: $disabled, customColors, colors });
        const color = getInputTextColor({ isFocused: $isFocused, hasValue: !!customValue, customColors, colors });
        return {
          backgroundColor,
          ...border(),
          ...padding('0', scale500),
          color,
          '::placeholder': {
            color: customColors.dark4,
          },
          fontSize: $theme.typography.LabelSmall.fontSize,
        };
      },
      props: {
        [DATA_TEST_ID]: testId,
      },
    },
    InputContainer: {
      style: {
        ...border(),
        backgroundColor: primaryB,
      },
    },
    Root: {
      style: ({ $error, $isFocused }) => ({
        height: scale1000,
        ...border(
          !noBorder
            ? {
                ...border300,
                borderColor: getInputBorderColor({
                  error: $error,
                  isFocused: $isFocused,
                  colors,
                  customColors,
                }),
              }
            : undefined,
        ),
        ...borderRadius(borders.radius200),
        backgroundColor: primaryB,
        ...margin('0'),
      }),
    },
    StartEnhancer: {
      style: ({ $disabled, $theme }) => ({
        backgroundColor: getInputBackgroundColor({ disabled: $disabled, customColors, colors }),
        ...padding('0', $theme.sizing.scale0, '0', '0px'),
      }),
    },
    EndEnhancer: {
      style: ({ $disabled, $theme }) => ({
        backgroundColor: getInputBackgroundColor({ disabled: $disabled, customColors, colors }),
        ...padding('0', '0', '0', $theme.sizing.scale0),
      }),
    },
    MaskToggleButton: {
      style: {
        ...padding('0', '0', '0', '14px'),
        outline: 'none',
      },
    },
  };

  const datepickerBaseOverrides: DatepickerOverrides<SharedStylePropsT> = {
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
    Input: {
      props: {
        overrides: inputBaseOverrides,
        endEnhancer: <Calendar size={scale600} color={iconColor || contentTertiary} />,
      },
    },
    Popover: {
      props: {
        placement: placement,
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
              zIndex: 1001,
            }),
          },
        },
      },
    },
  };

  return (
    <DatePicker
      value={customValue}
      onChange={onChange}
      locale={localeObj}
      overrides={{
        ...datepickerBaseOverrides,
        ...overrides,
      }}
      {...rest}
    />
  );
};
