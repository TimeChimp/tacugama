import React from 'react';
import { SHAPE } from 'baseui/button';
import { Button, ButtonKind } from '../button';
import { Dropdown } from '../dropdown';
import { Block } from '../block';
import { useTheme } from '../../providers';
import { CaretDownIcon } from '../icons/caret-down';
import { ActionButtonProps, DEFAULT_OPTIONS } from './types';

export const ActionButton = ({
  options = DEFAULT_OPTIONS,
  selectedOption = DEFAULT_OPTIONS[0],
  kind = ButtonKind.Primary,
  shape = SHAPE.default,
  startEnhancer,
  disabled = false,
  placeholder = 'Action Button',
  withoutLabel = false,
}: ActionButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale700 },
        customColors: { dark1, dark4, light4, purple2 },
      },
    },
  } = useTheme();

  const getTriangleIconColor = () => {
    if (disabled) {
      return dark4;
    }
    if (selectedOption && kind !== ButtonKind.Minimal) {
      return light4;
    }
    if (kind === ButtonKind.Secondary || kind === ButtonKind.Tertiary) {
      return dark1;
    }
    if (kind === ButtonKind.Minimal) {
      return purple2;
    }
    return light4;
  };

  const isSelectedKind = selectedOption && kind !== ButtonKind.Minimal;

  const label = selectedOption?.label || placeholder;

  return (
    <Dropdown items={options}>
      <Button
        size="compact"
        kind={isSelectedKind ? ButtonKind.Primary : kind}
        shape={shape}
        startEnhancer={startEnhancer}
        disabled={disabled}
      >
        <Block display="flex" gridColumnGap={scale500} alignItems="center">
          {!withoutLabel ? label : null}
          <CaretDownIcon color={getTriangleIconColor()} size={scale700} />
        </Block>
      </Button>
    </Dropdown>
  );
};

export default ActionButton;
