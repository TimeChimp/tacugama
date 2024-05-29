import React from 'react';
import { ButtonKind } from '../../models';
import { SHAPE } from 'baseui/button';
import { Button } from '../button';
import { Dropdown } from '../dropdown';
import { Block } from '../block';
import { useTheme } from '../../providers';
import { ActionButtonProps, DEFAULT_OPTIONS } from './types';
import { CaretDown } from '@phosphor-icons/react';

export const ActionButton = ({
  options = DEFAULT_OPTIONS,
  selectedOption = DEFAULT_OPTIONS[0],
  kind = ButtonKind.primary,
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
      <Button size="compact" kind={kind} shape={shape} startEnhancer={startEnhancer} disabled={disabled}>
        <Block display="flex" gridColumnGap={scale500} alignItems="center">
          {label}
          <CaretDown size={scale600} />
        </Block>
      </Button>
    </Dropdown>
  );
};

export default ActionButton;
