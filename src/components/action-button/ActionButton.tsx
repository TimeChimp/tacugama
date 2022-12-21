import React from 'react';
import { ButtonKind as Kind } from '../../models';
import { SHAPE } from 'baseui/button';
import { Button } from '../button';
import { Dropdown } from '../dropdown';
import { Block } from '../block';
import { useTheme } from '../../providers';
import { CaretDownIcon } from '../icons/caret-down';
import { DEFAULT_OPTIONS, ActionButtonProps } from './types';

export const ActionButton = ({
  options = DEFAULT_OPTIONS,
  selectedOption = DEFAULT_OPTIONS[0],
  kind = Kind.primary,
  shape = SHAPE.default,
  startEnhancer,
  disabled = false,
  placeholder = 'Action Button',
}: ActionButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale600 },
      },
    },
  } = useTheme();

  const label = shape !== 'square' ? selectedOption?.label || placeholder : null;

  return (
    <Dropdown items={options}>
      <Button size="compact" buttonKind={kind} shape={shape} startEnhancer={startEnhancer} disabled={disabled}>
        <Block display="flex" gridColumnGap={scale500} alignItems="center">
          {label}
          <CaretDownIcon size={scale600} />
        </Block>
      </Button>
    </Dropdown>
  );
};

export default ActionButton;
