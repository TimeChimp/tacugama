import React, { useCallback } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { FormRowProps, FormRowVariant } from './types';
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
  defaultValue,
  error,
  render,
  caption,
  rules,
  marginBottom,
  toolTip,
  actionButtons,
  variant,
  minHeight,
  alignItems = 'start',
  showLabelInline = true,
}: FormRowProps<T, K>) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200, scale300, scale400, scale500, scale2400, scale1200 },
        customSizing: { scale8750, scale7500 },
        customColors: { dark3, red0 },
      },
    },
  } = useTheme();
  const minHeightBlock = !minHeight ? scale2400 : minHeight ?? 0;

  const getLabel = () => {
    if (rules?.required && label) {
      return `${label}*`;
    }
    return label;
  };

  const marginBottomWrapper = useCallback(() => {
    if (marginBottom) {
      return marginBottom;
    }
    return scale300;
  }, [marginBottom, scale300]);

  return (
    <Block
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: scale400,
        margin: 0,
        marginBottom: marginBottomWrapper(),
        minHeight: minHeightBlock,
        paddingBottom: scale300,
        flexWrap: 'wrap',
      }}
    >
      <Block
        style={{
          display: variant === FormRowVariant.Secondary && showLabelInline ? 'flex' : 'block',
          width: '100%',
          gap: variant === FormRowVariant.Secondary ? scale300 : scale1200,
          alignItems,
          flexFlow: variant === FormRowVariant.Secondary ? 'row-reverse' : 'row',
          justifyContent: variant === FormRowVariant.Secondary ? 'flex-end' : '',
        }}
      >
        {(label || caption) && (
          <Block
            style={{
              flexBasis: variant !== FormRowVariant.Secondary ? scale7500 : '',
              display: 'inline-grid',
              gap: scale0,
              marginBottom: variant !== FormRowVariant.Secondary ? scale300 : 0,
              flexShrink: variant === FormRowVariant.Secondary ? 1 : 0,
            }}
          >
            {label && (
              <LabelSmall display="flex" alignItems="center" gridGap={scale200}>
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
                flexShrink: variant === FormRowVariant.Secondary ? 7 : 1,
                width: variant === FormRowVariant.Secondary ? 'initial' : '100%',
              },
            },
          }}
        >
          <>
            <Block style={{ display: 'flex', gap: actionButtons ? scale300 : 0 }}>
              <Controller name={name} control={control} defaultValue={defaultValue} rules={rules} render={render} />
              <Block style={{ display: 'flex' }}>{actionButtons && actionButtons.map((button) => button)}</Block>
            </Block>

            {caption && variant !== FormRowVariant.Secondary && !error && (
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
