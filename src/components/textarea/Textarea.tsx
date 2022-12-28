import React from 'react';
import { useTheme } from '../../providers';
import { Textarea as BaseTextArea } from 'baseui/textarea';
import { border, borderRadius, getInputBorderColor, getInputBackgroundColor, getInputTextColor } from '../../utils';
import { DATA_TEST_ID } from '../../models';
import { TextareaProps } from './types';

export const Textarea = ({ testId, value, success, resizeable = false, ...rest }: TextareaProps) => {
  const {
    theme: {
      current: {
        sizing: { scale550, scale2400 },
        borders,
        colors,
        customColors,
      },
    },
  } = useTheme();

  const { border300, radius200 } = borders;
  const { contentSecondary, contentTertiary } = colors;

  return (
    <BaseTextArea
      value={value}
      {...rest}
      overrides={{
        Input: {
          style: ({ $error, $disabled, $isFocused }) => {
            const backgroundColor = getInputBackgroundColor({ disabled: $disabled, customColors, colors });
            const color = getInputTextColor({ isFocused: $isFocused, hasValue: !!value, customColors, colors });
            return {
              minHeight: scale2400,
              height: scale2400,
              width: '100%',
              resize: resizeable ? 'vertical' : 'none',
              color,
              backgroundColor,
              '::placeholder': {
                fontSize: scale550,
                color: $isFocused ? contentSecondary : contentTertiary,
              },
              ...border({
                ...border300,
                borderColor: getInputBorderColor({
                  error: $error,
                  success,
                  isFocused: $isFocused,
                  customColors,
                  colors,
                }),
              }),
              ...borderRadius(radius200),
            };
          },
          props: {
            [DATA_TEST_ID]: testId,
          },
        },
        Root: {
          style: {
            ...border(),
          },
        },
      }}
    />
  );
};
