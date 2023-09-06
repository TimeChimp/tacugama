import React, { useMemo } from 'react';
import { Block } from 'baseui/block';
import { Toggle, ToggleSize } from 'components/toggle';
import { FormToggleProps, FormToggleSize } from './types';
import { useTheme } from 'providers';
import { LabelSmall, ParagraphSmall } from 'baseui/typography';
import { FlexItem } from 'components/flex-item';

export const FormToggle = ({
  isChecked,
  onToggleChange,
  additionalContent,
  caption,
  label,
  size = FormToggleSize.small,
  disabled = false,
  items,
  multi,
}: FormToggleProps) => {
  const {
    theme: {
      current: {
        sizing: { scale300, scale500 },
        customColors: { dark1, dark3, light2 },
      },
    },
  } = useTheme();

  const showTitleBlock = additionalContent || caption || label;

  const overrides = useMemo(() => {
    switch (size) {
      case FormToggleSize.small:
        return {
          alignItems: 'flex-start',
          flexDirection: 'row',
        };
      case FormToggleSize.large:
        return {
          alignItems: 'center',
          flexDirection: 'row-reverse',
        };
    }
  }, [size]);

  return (
    <Block>
      <Block
        overrides={{
          Block: {
            style: {
              display: 'flex',
              gap: scale300,
              ...overrides,
            },
          },
        }}
      >
        {multi && !!items?.length ? (
          <Block
            overrides={{
              Block: {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: scale300,
                },
              },
            }}
          >
            {items.map((item) => (
              <FlexItem key={item.label} alignItems="flex-start" gap={scale300} justifyContent="flex-end">
                {item.label ? (
                  <ParagraphSmall margin="0" color={item.disabled ? light2 : dark1}>
                    {item.label}
                  </ParagraphSmall>
                ) : null}
                <Toggle
                  checked={item.isChecked}
                  onChange={item.onToggleChange}
                  size={ToggleSize.large}
                  disabled={item.disabled ?? disabled}
                />
              </FlexItem>
            ))}
          </Block>
        ) : (
          <Toggle checked={isChecked} onChange={onToggleChange} size={ToggleSize.large} disabled={disabled} />
        )}
        {showTitleBlock ? (
          <Block display="flex" flexDirection="column" flex={1}>
            {label ? <LabelSmall color={disabled ? light2 : dark1}>{label}</LabelSmall> : null}
            {caption ? (
              <ParagraphSmall color={disabled ? light2 : dark3} margin="0px">
                {caption}
              </ParagraphSmall>
            ) : null}
            {size === FormToggleSize.small && <Block marginTop={scale500}>{additionalContent}</Block>}
          </Block>
        ) : null}
      </Block>
      {size === FormToggleSize.large && <Block marginTop={scale500}>{additionalContent}</Block>}
    </Block>
  );
};
