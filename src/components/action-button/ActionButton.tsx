import React from 'react';
import { ButtonKind as Kind } from '../../models';
import { SHAPE } from 'baseui/button';
import { Button } from '../button';
import { Dropdown } from '../dropdown';
import { Block } from '../block';
import { useTheme } from '../../providers';
import { CaretDownIcon } from '../icons/caret-down';

const DEFAULT_OPTIONS = [
  {
    label: 'Option 1',
    id: 'option-1',
  },
  {
    label: 'Option 2',
    id: 'option-2',
  },
];

interface ActionButtonOption {
  label: string;
  id: string;
}

export interface ActionButtonProps {
  options: ActionButtonOption[];
  selectedOption: ActionButtonOption;
  kind?: Kind;
  shape?: SHAPE[keyof SHAPE];
  startEnhancer?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  withoutLabel?: boolean;
}

export const ActionButton = ({
  options = DEFAULT_OPTIONS,
  selectedOption = DEFAULT_OPTIONS[0],
  kind = Kind.primary,
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
    if (selectedOption && kind !== Kind.minimal) {
      return light4;
    }
    if (kind === Kind.secondary || kind === Kind.tertiary) {
      return dark1;
    }
    if (kind === Kind.minimal) {
      return purple2;
    }
    return light4;
  };

  const label = selectedOption?.label || placeholder;

  return (
    <Dropdown items={options}>
      <Button size="compact" buttonKind={kind} shape={shape} startEnhancer={startEnhancer} disabled={disabled}>
        <Block display="flex" gridColumnGap={scale500} alignItems="center">
          {!withoutLabel ? label : null}
          <CaretDownIcon color={getTriangleIconColor()} size={scale700} />
        </Block>
      </Button>
    </Dropdown>
  );
};

export default ActionButton;
