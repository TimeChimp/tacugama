import React from 'react';
import { Input as BaseInput, InputOverrides } from 'baseui/input';
import { useTheme } from '../../providers';
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
import { InputProps } from './types';

export const Input = ({ testId, type, uppercase, noBorder = false, ...rest }: InputProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale1000 },
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
      style: ({ $disabled, $isFocused, $theme }) => {
        const { color, backgroundColor } = getInputContainerColors($theme.colors, $disabled);
        return {
          backgroundColor,
          ...border(),
          ...padding('0', scale500),
          textTransform: uppercase ? 'uppercase' : 'inherit',
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
        ...border(
          !noBorder
            ? {
                ...border300,
                borderColor: getInputBorderColor($error, $isFocused, colors, borders),
              }
            : undefined,
        ),
        ...borderRadius(borders.radius200),
        backgroundColor: primaryB,
        ...margin('0'),
        ...rootPadding(),
      }),
    },
    StartEnhancer: {
      style: ({ $disabled, $theme }) => ({
        backgroundColor: getInputContainerColors(colors, $disabled).backgroundColor,
        ...padding('0', $theme.sizing.scale0, '0', '14px'),
      }),
    },
    EndEnhancer: {
      style: ({ $disabled, $theme }) => ({
        backgroundColor: getInputContainerColors(colors, $disabled).backgroundColor,
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
