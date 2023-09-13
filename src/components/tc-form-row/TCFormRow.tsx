import React from 'react';
import { TCFormRowProps } from './types';
import { useTheme } from '../../providers';
import { Controller, FieldValues } from 'react-hook-form';
import { FormControl } from '../form-control';
import { ParagraphXSmall, ParagraphSmall } from '../typography';
import { TcFormRowWrapper } from './styles';
import { Block } from 'baseui/block';
import { margin } from '../../utils';

/**
 * TCFormRow is a component that is used specifically for Toggle & Checkboxes.
 */
export const TCFormRow = <T extends FieldValues, K extends string>({
  name,
  control,
  label,
  forLabel,
  defaultValue,
  render,
  caption,
  rules,
}: TCFormRowProps<T, K>) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200 },
        customColors: { dark3 },
      },
    },
  } = useTheme();

  return (
    <TcFormRowWrapper>
      <FormControl
        overrides={{
          ControlContainer: {
            style: {
              ...margin('0'),
              width: 'initial',
            },
          },
        }}
      >
        <Controller name={name} control={control} defaultValue={defaultValue} rules={rules} render={render} />
      </FormControl>

      <Block>
        <ParagraphSmall
          display="flex"
          as="label"
          alignItems="center"
          gridGap={scale200}
          marginTop={scale0}
          {...(forLabel ? { for: forLabel } : {})}
        >
          {label}
        </ParagraphSmall>

        {caption && (
          <ParagraphXSmall color={dark3} marginTop={scale100}>
            {caption}
          </ParagraphXSmall>
        )}
      </Block>
    </TcFormRowWrapper>
  );
};
