import React, { useEffect, useState } from 'react';
import {
  border,
  borderRadius,
  getInputBorderColor,
  getInputTextColor,
  getInputBackgroundColor,
  margin,
  padding,
} from '../../utils';
import { useTheme } from '../../providers';
import { DatePicker, DatepickerOverrides } from 'baseui/datepicker';
import { DATA_TEST_ID } from '../../models';
import { InputOverrides } from 'baseui/input';
import { CalendarIcon } from '../icons/calendar';
import { getDateLocale } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerProps } from './types';
import { Skeleton } from '../skeleton';
import { CalendarOverride } from '../datepicker/components';
import { Calendar } from '@phosphor-icons/react';

export const Datepicker = ({
  customValue,
  locale = 'en',
  overrides,
  noBorder,
  testId,
  iconColor,
  showSkeleton = false,
  ...rest
}: DatepickerProps) => {
  const [localeObj, setLocaleObj] = useState<Locale>();

  const {
    theme: {
      current: {
        sizing: { scale500, scale600 },
        customSizing: { scale975 },
        colors: { contentTertiary },
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
      setLocaleObj(localeObj);
    }
  }, [locale]);

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
        // We don't want the input to be tabbable, because it automatically opens the calendar popover when opening the modal
        tabIndex: -1,
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
        height: scale975,
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

  const datepickerBaseOverrides: DatepickerOverrides = {
    ...CalendarOverride(),
    Input: {
      props: {
        overrides: inputBaseOverrides,
        endEnhancer: <Calendar size={scale600} color={iconColor || contentTertiary} />,
      },
    },
    Popover: {
      props: {
        placement: 'bottomLeft',
        overrides: {
          Body: {
            style: () => ({
              zIndex: 1000,
            }),
          },
        },
      },
    },
  };

  if (showSkeleton) {
    return <Skeleton animation height={scale975} />;
  }

  return (
    <DatePicker
      value={customValue}
      locale={localeObj}
      quickSelect={false}
      overrides={{
        ...datepickerBaseOverrides,
        ...overrides,
      }}
      {...rest}
    />
  );
};
