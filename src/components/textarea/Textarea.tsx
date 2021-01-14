// @ts-nocheck - Need to override textarea root property but type is missing
import React from 'react';
import { useTheme } from '../../providers';
import { Textarea as BaseTextArea, TextareaProps as BaseTextareaProps } from 'baseui/textarea';
import { border, borderRadius, getInputBorderColor, getInputContainerColors } from '../../utils';
import { DATA_TEST_ID } from '../../models';

export interface TextareaProps extends BaseTextareaProps {
  resizeable?: boolean;
  testId?: string;
}

export const Textarea = ({ testId, resizeable = false, ...rest }: TextareaProps) => {
  const {
    theme: {
      current: {
        sizing: { scale550, scale2400 },
        borders,
        colors,
      },
    },
  } = useTheme();

  const { border300, radius100 } = borders;
  const { contentSecondary, contentTertiary } = colors;

  return (
    <BaseTextArea
      {...rest}
      overrides={{
        Input: {
          style: ({ $theme, $error, $isFocused }) => {
            const { color, backgroundColor } = getInputContainerColors($error, $theme.colors);
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
                borderColor: getInputBorderColor($error, $isFocused, colors, borders),
              }),
              ...borderRadius(radius100),
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
