import React from 'react';
import { Input as BaseInput, InputOverrides, InputProps as BaseInputProps } from 'baseui/input';
import { useTheme } from '../../providers/ThemeProvider';
import {
  border,
  borderRadius,
  getInputBorderColor,
  getInputContainerColors,
  getInputPlaceholderTextColor,
  margin,
  padding,
} from '../../utils';
import { DATA_TEST_ID } from '../../models';

export interface InputProps extends BaseInputProps {
  testId?: string;
}

export const Input = ({ testId, type, ...rest }: InputProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale500, scale1000 },
        borders,
        colors,
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
      style: ({ $disabled, $isFocused, $error, $theme }) => {
        const { color, backgroundColor } = getInputContainerColors($theme.colors, $error, $disabled);
        return {
          backgroundColor,
          ...border(),
          ...padding('0', scale500),
          color,
          '::placeholder': {
            color: getInputPlaceholderTextColor($disabled, $isFocused, colors),
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
        ...border({
          ...border300,
          borderColor: getInputBorderColor($error, $isFocused, colors, borders),
          borderWidth: $error ? scale0 : border300.borderWidth,
        }),
        ...borderRadius(scale0),
        backgroundColor: primaryB,
        ...margin(scale0),
        ...rootPadding(),
      }),
    },
    StartEnhancer: {
      style: ({ $disabled, $error, $theme }) => ({
        backgroundColor: getInputContainerColors(colors, $error, $disabled).backgroundColor,
        ...padding('0', $theme.sizing.scale0, '0', '14px'),
      }),
    },
    EndEnhancer: {
      style: ({ $disabled, $error, $theme }) => ({
        backgroundColor: getInputContainerColors(colors, $error, $disabled).backgroundColor,
        ...padding('0', '14px', '0', $theme.sizing.scale0),
      }),
    },
    MaskToggleButton: {
      style: {
        ...padding('0', '0', '0', '14px'),
        outline: 'none',
      },
    },
  };

  return <BaseInput overrides={baseOverrides} type={type} {...rest} />;
};
