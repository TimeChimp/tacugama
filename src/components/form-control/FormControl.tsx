import React from 'react';
import { FormControl as BaseFormControl } from 'baseui/form-control';
import { useTheme } from '../../providers';
import { ParagraphXSmall as ParagraphXSmallComponent } from '../typography';
import { margin } from '../../utils';
import { FormControlProps } from './types';
import { Block } from '../block';

export const FormControl = ({ overrides, error, success, caption, children, ...rest }: FormControlProps) => {
  const {
    theme: {
      current: {
        typography: { ParagraphSmall, ParagraphXSmall },
        sizing: { scale100, scale500, scale550 },
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
        LabelContainer: {
          style: {
            width: '100px',
          },
        },
        ControlContainer: {
          style: {
            display: 'inline-flex',
            gap: '1rem',
          },
        },
        Label: {
          style: {
            ...ParagraphSmall,
            lineHeight: scale550, // Fix: Because of the bug in baseui (can't override the span around the label)
            ...margin('0'),
            width: 'auto',
            flexBasis: '300px',
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
            textAlign: !!error || !!success ? 'right' : 'left',
            color: getCaptionColor(),
          },
        },
      }}
    >
      <>
        {!!caption ? (
          <Block marginBottom={scale500}>
            <ParagraphXSmallComponent
              color={dark3}
              overrides={{
                Block: {
                  style: {
                    lineHeight: scale550,
                    fontSize: scale550,
                  },
                },
              }}
            >
              {caption}
            </ParagraphXSmallComponent>
          </Block>
        ) : null}
        {children}
      </>
    </BaseFormControl>
  );
};
