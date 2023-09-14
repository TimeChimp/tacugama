import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { FormRowProps } from './types';
import { LabelSmall, ParagraphXSmall } from '../typography';
import { FormControl } from '../form-control';
import { Block } from '../block';
import { margin } from '../../utils';
import { useTheme } from '../../providers';
import { StatefulTooltip } from '../tooltip';
import { HelpIcon } from '../icons';

export const FormRow = <T extends FieldValues, K extends string>({
  name,
  control,
  label,
  labelEndEnhancer,
  forLabel,
  defaultValue,
  error,
  render,
  caption,
  rules,
  toolTip,
  actionButtons,
  alignItems = 'start',
}: FormRowProps<T, K>) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200, scale300, scale400, scale500, scale1200 },
        customSizing: { scale8750, scale7500 },
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
    <Block
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}
    >
      <Block
        style={{
          display: 'block',
          width: '100%',
          gap: scale1200,
          alignItems,
        }}
      >
        {(label || caption) && (
          <Block
            style={{
              flexBasis: scale7500,
              display: 'inline-grid',
              gap: scale0,
              marginBottom: scale300,
              flexShrink: 0,
            }}
          >
            {label && (
              <LabelSmall
                display="flex"
                as="label"
                alignItems="center"
                gridGap={scale200}
                {...(forLabel ? { for: forLabel } : {})}
              >
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
                          zIndex: '9999',
                          width: scale8750,
                        },
                      },
                    }}
                    content={toolTip}
                  >
                    <div>
                      <HelpIcon title={''} />
                    </div>
                  </StatefulTooltip>
                )}
              </LabelSmall>
            )}
          </Block>
        )}

        <FormControl
          labelEndEnhancer={labelEndEnhancer}
          overrides={{
            ControlContainer: {
              style: {
                ...margin('0'),
                flexShrink: 1,
                width: '100%',
              },
            },
          }}
        >
          <>
            <Block style={{ display: 'flex', gap: actionButtons ? scale300 : 0 }}>
              <Controller name={name} control={control} defaultValue={defaultValue} rules={rules} render={render} />
              <Block display={'flex'}>{actionButtons && actionButtons.map((button) => button)}</Block>
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
    </Block>
  );
};
