import React from 'react';
import { FormControl as BaseFormControl } from 'baseui/form-control';
import { useTheme } from '../../providers';
import { margin } from '../../utils';
import { FormControlProps } from './types';

export const FormControl = ({ overrides, error, success, caption, ...rest }: FormControlProps) => {
  const {
    theme: {
      current: {
        typography: { ParagraphSmall, ParagraphXSmall },
        sizing: { scale550 },
        customColors: { red0, green0, dark2 },
      },
    },
  } = useTheme();

  const getDisplayedCaption = () => {
    if (error) {
      return error;
    }
    if (success) {
      return success;
    }

    return caption;
  };

  const getCaptionColor = () => {
    if (error) {
      return red0;
    }

    if (success) {
      return green0;
    }

    return dark2;
  };

  return (
    <BaseFormControl
      caption={getDisplayedCaption()}
      {...rest}
      overrides={{
        ...overrides,
        Label: {
          style: {
            ...ParagraphSmall,
            lineHeight: scale550, // Fix: Because of the bug in baseui (can't override the span around the label)
            ...margin('0'),
          },
        },
        Caption: {
          style: {
            ...ParagraphXSmall,
            ...margin('0'),
            textAlign: !!error || !!success ? 'right' : 'left',
            color: getCaptionColor(),
          },
        },
      }}
    />
  );
};
