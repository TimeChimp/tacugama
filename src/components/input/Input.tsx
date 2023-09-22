import React from 'react';
import { Input as BaseInput, InputOverrides } from 'baseui/input';
import { useTheme } from '../../providers';
import {
  border,
  borderRadius,
  getInputBorderColor,
  getInputBackgroundColor,
  getInputTextColor,
  margin,
  padding,
  getStyleOverrides,
} from '../../utils';
import { DATA_TEST_ID } from '../../models';
import { InputProps } from './types';
import { Skeleton } from '../skeleton';

export const Input = ({
  value,
  testId,
  type,
  uppercase,
  noBorder = false,
  success = false,
  disabled,
  width = '100%',
  startEnhancer = null,
  endEnhancer = null,
  overrides,
  showSkeleton = false,
  autoComplete = 'off',
  name,
  ...rest
}: InputProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale550, scale600 },
        customSizing: { scale975 },
        borders,
        colors,
        customColors,
      },
    },
  } = useTheme();
  const { border300 } = borders;
  const { primaryB } = colors;

  // Password input requires the default padding
  const rootPadding = () => {
    if (type !== 'password') {
      return { ...padding() };
    }
  };
  const {
    Root: RootOverrides,
    StartEnhancer: StartEnhancerOverrides,
    EndEnhancer: EndEnhancerOverrides,
    MaskToggleButton: MaskToggleButtonOverrides,
    Input: InputOverrides,
    InputContainer: InputContainerOverrides,
    ...styleOverrides
  } = overrides ?? {};

  const baseOverrides: InputOverrides = {
    Input: {
      style: (opts) => {
        const { $disabled, $isFocused, $theme } = opts;
        const backgroundColor = getInputBackgroundColor({ disabled: $disabled, customColors, colors });
        const color = getInputTextColor({ isFocused: $isFocused, hasValue: !!value, customColors, colors });
        return {
          backgroundColor,
          ...border(),
          ...padding('0', endEnhancer ? scale500 : scale600, '0', startEnhancer ? scale500 : scale600),
          textTransform: uppercase ? 'uppercase' : 'inherit',
          color,
          '::placeholder': {
            color: customColors.dark4,
          },
          fontSize: $theme.typography.LabelSmall.fontSize,
          ...getStyleOverrides(opts, InputOverrides?.style),
        };
      },
      props: {
        [DATA_TEST_ID]: testId,
      },
    },
    InputContainer: {
      style: (opts) => ({
        ...border(),
        backgroundColor: primaryB,
        ...getStyleOverrides(opts, InputContainerOverrides?.style),
      }),
    },
    Root: {
      style: (opts) => {
        const { $error, $isFocused } = opts;
        return {
          height: scale975,
          width,
          ...border(
            !noBorder
              ? {
                  ...border300,
                  borderColor: getInputBorderColor({
                    error: $error,
                    success,
                    isFocused: $isFocused,
                    customColors,
                    colors,
                  }),
                }
              : undefined,
          ),
          ...borderRadius(borders.radius200),
          backgroundColor: primaryB,
          ...margin('0'),
          ...rootPadding(),
          ':hover': {
            ...border(
              !noBorder
                ? {
                    ...border300,
                    borderColor: getInputBorderColor({
                      error: $error,
                      success,
                      isFocused: $isFocused,
                      customColors,
                      colors,
                      hover: true,
                      disabled,
                    }),
                  }
                : undefined,
            ),
          },
          ...getStyleOverrides(opts, RootOverrides?.style),
        };
      },
    },
    StartEnhancer: {
      style: (opts) => {
        const { $disabled } = opts;
        return {
          backgroundColor: getInputBackgroundColor({ disabled: $disabled, customColors, colors }),
          ...padding('0', '0', '0', scale600),
          ...getStyleOverrides(opts, StartEnhancerOverrides?.style),
        };
      },
    },
    EndEnhancer: {
      style: (opts) => {
        const { $disabled } = opts;
        return {
          backgroundColor: getInputBackgroundColor({ disabled: $disabled, customColors, colors }),
          ...padding('0', scale600, '0', '0'),
          ...getStyleOverrides(opts, EndEnhancerOverrides?.style),
        };
      },
    },
    MaskToggleButton: {
      style: (opts) => {
        return {
          ...padding('0', '0', '0', scale550),
          outline: 'none',
          ...getStyleOverrides(opts, MaskToggleButtonOverrides?.style),
        };
      },
    },
    ...styleOverrides,
  };

  return showSkeleton ? (
    <Skeleton animation height={scale975} width={width} />
  ) : (
    <BaseInput
      value={value}
      disabled={disabled}
      startEnhancer={startEnhancer}
      endEnhancer={endEnhancer}
      overrides={baseOverrides}
      type={type}
      autoComplete={autoComplete}
      id={name}
      {...rest}
    />
  );
};
