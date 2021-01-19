import React from 'react';
import { Input as BaseInput, InputProps as BaseInputProps } from 'baseui/input';
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

export interface InputProps extends BaseInputProps {}

export const Input = ({ ...rest }: InputProps) => {
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

  return (
    <BaseInput
      overrides={{
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
          }),
        },
        StartEnhancer: {
          style: {
            backgroundColor: primaryB,
          },
        },
        EndEnhancer: {
          style: {
            backgroundColor: primaryB,
          },
        },
        MaskToggleButton: {
          style: {
            ...padding('0', '0', '0', '14px'),
          },
        },
      }}
      {...rest}
    />
  );
};
