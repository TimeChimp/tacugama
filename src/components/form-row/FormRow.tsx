import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { FormRowProps } from './types';
import { LabelSmall, ParagraphXSmall } from '../typography';
import { FormControl } from '../form-control';
import { Block } from '../block';
import { margin } from '../../utils';
import { useTheme } from '../../providers';
import { StatefulTooltip } from '../tooltip';
import { HIGH_Z_INDEX } from '../../models';
import { Info } from '@phosphor-icons/react';

export const FormRow = <T extends FieldValues, K extends string>({
  label,
  labelEndEnhancer,
  error,
  caption,
  rules,
  toolTip,
  actionButtons,
  name,
  control,
  defaultValue,
  render,
}: FormRowProps<T, K>) => {
  const {
    theme: {
      current: {
        sizing: { scale100, scale200, scale300, scale400, scale500 },
        customSizing: { scale8750 },
        customColors: { dark3, red0 },
      },
    },
  } = useTheme();

  const getLabel = () => {
    if (rules?.required && label) {
      return `${label}*`;
    }
    return label;
  };

  return (
    <Block width={'100%'}>
      {label && (
        <Block marginBottom={scale100}>
          <LabelSmall display="flex" as="label" alignItems="center" gridGap={scale200} htmlFor={name as string}>
            {getLabel()}
            {toolTip && (
              <StatefulTooltip
                placement="top"
                showArrow
                triggerType="hover"
                overrides={{
                  Body: {
                    style: {
                      fontSize: scale400,
                      lineHeight: scale500,
                      zIndex: HIGH_Z_INDEX,
                      width: scale8750,
                    },
                  },
                }}
                content={toolTip}
              >
                <Info />
              </StatefulTooltip>
            )}
          </LabelSmall>
        </Block>
      )}

      <FormControl
        labelEndEnhancer={labelEndEnhancer}
        overrides={{
          ControlContainer: {
            style: {
              ...margin('0'),
              width: '100%',
            },
          },
        }}
      >
        <>
          <Block overrides={{ Block: { style: { display: 'flex', gap: actionButtons ? scale300 : 0 } } }}>
            <Controller name={name} control={control} defaultValue={defaultValue} rules={rules} render={render} />
            {actionButtons ? <Block display={'flex'}>{actionButtons.map((button) => button)}</Block> : null}
          </Block>

          {caption && !error && (
            <ParagraphXSmall color={dark3} marginTop={scale100}>
              {caption}
            </ParagraphXSmall>
          )}

          {!!error && (
            <ParagraphXSmall color={red0} marginTop={scale100}>
              {error}
            </ParagraphXSmall>
          )}
        </>
      </FormControl>
    </Block>
  );
};
