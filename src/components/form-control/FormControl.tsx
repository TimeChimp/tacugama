import React from 'react';
import { FormControl as BaseFormControl } from 'baseui/form-control';
import { useTheme } from '../../providers';
import { margin } from '../../utils';
import { FormControlProps } from './types';

export const FormControl = ({ overrides, error, success, caption, children, ...rest }: FormControlProps) => {
  const {
    theme: {
      current: {
        typography: { ParagraphXSmall, LabelSmall },
        sizing: { scale100, scale550 },
        customColors: { red0, green0, dark3 },
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

    return dark3;
  };

  return (
    <BaseFormControl
      caption={getDisplayedCaption()}
      {...rest}
      overrides={{
        ...overrides,
        Label: {
          style: {
            ...LabelSmall,
            lineHeight: scale550, // Fix: Because of the bug in baseui (can't override the span around the label)
            ...margin('0'),
            width: 'auto',
          },
        },
        LabelEndEnhancer: {
          style: {
            ...margin('0', '0', '0', scale100),
          },
        },
        Caption: {
          style: {
            ...ParagraphXSmall,
            ...margin(scale100, '0', '0', '0'),
            textAlign: 'left',
            color: getCaptionColor(),
          },
        },
      }}
    >
      <>{children}</>
    </BaseFormControl>
  );
};
