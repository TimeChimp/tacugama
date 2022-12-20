import React from 'react';
import { ButtonKind } from '../../models';
import { SHAPE } from 'baseui/button';
import { Button } from '../button';
import { Dropdown } from '../dropdown';
import { Block } from '../block';
import { useTheme } from '../../providers';
import { CaretDownIcon } from '../icons/caret-down';
import { ActionButtonProps, DEFAULT_OPTIONS } from './types';

export const ActionButton = ({
  options = DEFAULT_OPTIONS,
  selectedOption = DEFAULT_OPTIONS[0],
  kind = ButtonKind.primary,
  shape = SHAPE.default,
  startEnhancer,
  disabled = false,
  placeholder = 'Action Button',
  withoutLabel = false,
}: ActionButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale600 },
        customColors: { dark1, dark4, light4, purple2 },
      },
    },
  } = useTheme();

  const getTriangleIconColor = () => {
    if (disabled) {
      return dark4;
    }
    if (selectedOption && kind !== ButtonKind.minimal) {
      return light4;
    }
    if (kind === ButtonKind.secondary || kind === ButtonKind.tertiary) {
      return dark1;
    }
    if (kind === ButtonKind.minimal) {
      return purple2;
    }
    return light4;
  };

  const label = selectedOption?.label || placeholder;

  return (
    <Dropdown items={options}>
      <Button size="compact" kind={kind} shape={shape} startEnhancer={startEnhancer} disabled={disabled}>
        <Block display="flex" gridColumnGap={scale500} alignItems="center">
          {!withoutLabel ? label : null}
          <CaretDownIcon color={getTriangleIconColor()} size={scale600} />
        </Block>
      </Button>
    </Dropdown>
  );
};

export default ActionButton;
