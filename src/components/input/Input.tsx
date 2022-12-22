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
} from '../../utils';
import { DATA_TEST_ID } from '../../models';
import { InputProps } from './types';

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
  ...rest
}: InputProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale550, scale600 },
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

  const baseOverrides: InputOverrides = {
    Input: {
      style: ({ $disabled, $isFocused, $theme }) => {
        const backgroundColor = getInputBackgroundColor({ disabled: $disabled, customColors, colors });
        const color = getInputTextColor({ isFocused: $isFocused, hasValue: !!value, customColors, colors });
        return {
          backgroundColor,
          ...border(),
          ...padding('0', !!endEnhancer ? scale500 : scale600, '0', !!startEnhancer ? scale500 : scale600),
          textTransform: uppercase ? 'uppercase' : 'inherit',
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
        height: '38px', // NOTE: Size does not exist in the theme
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
      }),
    },
    StartEnhancer: {
      style: ({ $disabled }) => ({
        backgroundColor: getInputBackgroundColor({ disabled: $disabled, customColors, colors }),
        ...padding('0', '0', '0', scale600),
      }),
    },
    EndEnhancer: {
      style: ({ $disabled }) => ({
        backgroundColor: getInputBackgroundColor({ disabled: $disabled, customColors, colors }),
        ...padding('0', scale600, '0', '0'),
      }),
    },
    MaskToggleButton: {
      style: {
        ...padding('0', '0', '0', scale550),
        outline: 'none',
      },
    },
  };

  return (
    <BaseInput
      value={value}
      disabled={disabled}
      startEnhancer={startEnhancer}
      endEnhancer={endEnhancer}
      overrides={baseOverrides}
      type={type}
      {...rest}
    />
  );
};
