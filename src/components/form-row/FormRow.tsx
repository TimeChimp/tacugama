import React, { useCallback, useEffect, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { FormRowProps, FormRowVariant } from './types';
import { LabelSmall, ParagraphSmall, ParagraphXSmall } from '../typography';
import { FormControl } from '../form-control';
import { Separator } from '../separator';
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
  hideSeparator,
  actionButtons,
  variant,
  minHeight,
  alignItems = 'start',
  showLabelInline = true,
}: FormRowProps<T, K>) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [elementRef, setElementRef] = useState<HTMLElement | null>();

  useEffect(() => {
    const onWindowResize = () => {
      setDimensions({
        width: elementRef?.offsetWidth || 0,
        height: elementRef?.offsetHeight || 0,
      });
    };

    if (typeof window !== undefined && elementRef?.offsetWidth) {
      onWindowResize();
      window.addEventListener('resize', onWindowResize);
      return () => {
        window.removeEventListener('resize', onWindowResize);
      };
    }
  }, [elementRef]);

  const { width } = dimensions;
  const breakpoint = 900;
  const isLarge = width ? width > breakpoint : true;

  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200, scale300, scale400, scale500, scale2400, scale1200 },
        customSizing: { scale8750, scale7500 },
        customColors: { dark3, red0 },
      },
    },
  } = useTheme();
  const minHeightBlock = !isLarge && !minHeight ? scale2400 : minHeight ?? 0;

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
    return isLarge ? scale300 : 0;
  }, [isLarge, marginBottom, scale300]);

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
        paddingBottom: !isLarge ? scale300 : 0,
        flexWrap: 'wrap',
      }}
    >
      <Block
        ref={setElementRef}
        style={{
          display: (isLarge || variant === FormRowVariant.Secondary) && showLabelInline ? 'flex' : 'block',
          width: '100%',
          gap: !isLarge && variant === FormRowVariant.Secondary ? scale300 : scale1200,
          alignItems,
          flexFlow: !isLarge && variant === FormRowVariant.Secondary ? 'row-reverse' : 'row',
          justifyContent: !isLarge && variant === FormRowVariant.Secondary ? 'flex-end' : '',
        }}
      >
        {(label || caption) && (
          <Block
            style={{
              flexBasis: isLarge || variant !== FormRowVariant.Secondary ? scale7500 : '',
              display: 'inline-grid',
              gap: scale0,
              marginBottom: !isLarge && variant !== FormRowVariant.Secondary ? scale300 : 0,
              flexShrink: !isLarge && variant === FormRowVariant.Secondary ? 1 : 0,
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
            {caption && (isLarge || variant === FormRowVariant.Secondary) && (
              <ParagraphSmall color={dark3}>{caption}</ParagraphSmall>
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

            {caption && !isLarge && variant !== FormRowVariant.Secondary && !error && (
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
      {!hideSeparator && isLarge && <Separator />}
    </Block>
  );
};
