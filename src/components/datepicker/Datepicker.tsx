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
import { DatePicker, DatepickerOverrides, QuickSelectOption } from 'baseui/datepicker';
import { SingleSelect } from '../select';
import { DATA_TEST_ID } from '../../models';
import { InputOverrides } from 'baseui/input';
import { CalendarIcon } from '../icons/calendar';
import { getDateLocale, TcDate } from '@timechimp/timechimp-typescript-helpers';
import { DatepickerProps } from './types';
import { Skeleton } from '../skeleton';
import { LabelSmall } from '../typography';
import { CalendarOverride } from '../datepicker/components';

export const Datepicker = ({
  customValue,
  locale = 'en',
  weekStartDay,
  overrides,
  noBorder,
  testId,
  iconColor,
  showSkeleton = false,
  quickSelect,
  ...rest
}: DatepickerProps) => {
  const [localeObj, setLocaleObj] = useState<Locale>();

  const {
    theme: {
      current: {
        sizing: { scale500, scale600 },
        customSizing: { scale975 },
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

  // const quickSelectOptions: QuickSelectOption<Date>[] = [
  //   {
  //     id: translations?.today ?? 'Today',
  //     beginDate: new Date(),
  //     endDate: new Date(),
  //   },
  //   {
  //     id: translations?.yesterday ?? 'Yesterday',
  //     beginDate: new TcDate().subtract(1, 'day').toDate(),
  //     endDate: new TcDate().subtract(1, 'day').toDate(),
  //   },
  //   {
  //     id: translations?.thisWeek ?? 'This week',
  //     beginDate: new TcDate().startOf('week').toDate(),
  //     endDate: new TcDate().endOf('week').toDate(),
  //   },
  //   {
  //     id: translations?.thisMonth ?? 'This month',
  //     beginDate: new TcDate().startOf('month').toDate(),
  //     endDate: new TcDate().endOf('month').toDate(),
  //   },
  //   {
  //     id: translations?.thisQuarter ?? 'This quarter',
  //     beginDate: new TcDate().startOf('quarter').toDate(),
  //     endDate: new TcDate().endOf('quarter').toDate(),
  //   },
  //   {
  //     id: translations?.thisYear ?? 'This year',
  //     beginDate: new TcDate().startOf('year').toDate(),
  //     endDate: new TcDate().endOf('year').toDate(),
  //   },
  //   {
  //     id: translations?.previousWeek ?? 'Previous week',
  //     beginDate: new TcDate().subtract(1, 'week').startOf('week').toDate(),
  //     endDate: new TcDate().subtract(1, 'week').endOf('week').toDate(),
  //   },
  //   {
  //     id: translations?.previousMonth ?? 'Previous month',
  //     beginDate: new TcDate().subtract(1, 'month').startOf('month').toDate(),
  //     endDate: new TcDate().subtract(1, 'month').endOf('month').toDate(),
  //   },
  //   {
  //     id: translations?.previousQuarter ?? 'Previous quarter',
  //     beginDate: new TcDate().subtract(1, 'quarter').startOf('quarter').toDate(),
  //     endDate: new TcDate().subtract(1, 'quarter').endOf('quarter').toDate(),
  //   },
  //   {
  //     id: translations?.previousYear ?? 'Previous year',
  //     beginDate: new TcDate().subtract(1, 'year').startOf('year').toDate(),
  //     endDate: new TcDate().subtract(1, 'year').endOf('year').toDate(),
  //   },
  // ];

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
    //TODO: usememo?
    ...CalendarOverride(),
    Input: {
      props: {
        overrides: inputBaseOverrides,
        endEnhancer: <CalendarIcon size={scale600} color={iconColor || contentTertiary} />,
      },
    },
    //Need the zindex
    Popover: {
      props: {
        placement: 'bottomLeft',
        // overrides: {
        //   Body: {
        //     style: () => ({
        //       zIndex: 1000,
        //     }),
        //   },
        // },
      },
    },
    // MonthYearSelectPopover: {
    //   props: {
    //     overrides: {
    //       Body: {
    //         style: () => ({
    //           zIndex: 1001,
    //         }),
    //       },
    //     },
    //   },
    // },
  };

  console.log('testt:::: ', CalendarOverride());

  if (showSkeleton) {
    return <Skeleton animation height={scale975} />;
  }

  //const defaultOverrides = CalendarOverride();

  //console.log('testtt123123', defaultOverrides);

  return (
    <>
      <DatePicker
        value={customValue}
        locale={localeObj}
        quickSelect={false}
        // quickSelectOptions={quickSelectOptions}
        overrides={{
          ...datepickerBaseOverrides,
          ...overrides,
        }}
        {...rest}
      />
    </>
  );
};
