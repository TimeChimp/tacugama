import React from 'react';
import { KIND, SHAPE } from 'baseui/button';
import { TriangleDown } from 'baseui/icon';
import { Dropdown, Block } from '../../components';
import { useTheme } from '../../providers';
import Button from '../button/Button';

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
  kind?: KIND[keyof KIND];
  shape?: SHAPE[keyof SHAPE];
  startEnhancer?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  withoutLabel?: boolean;
}

export const ActionButton = ({
  options = DEFAULT_OPTIONS,
  selectedOption = DEFAULT_OPTIONS[0],
  kind = KIND.primary,
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
    if (selectedOption && kind !== KIND.minimal) {
      return light4;
    }
    if (kind === KIND.secondary || kind === KIND.tertiary) {
      return dark1;
    }
    if (kind === KIND.minimal) {
      return purple2;
    }
    return light4;
  };

  const isSelectedKind = selectedOption && kind !== KIND.minimal;

  const label = selectedOption?.label || placeholder;

  return (
    <Dropdown items={options}>
      <Button
        size="compact"
        kind={isSelectedKind ? KIND.primary : kind}
        shape={shape}
        startEnhancer={startEnhancer}
        disabled={disabled}
      >
        <Block display="flex" gridColumnGap={scale500} alignItems="center">
          {!withoutLabel ? label : null}
          <TriangleDown color={getTriangleIconColor()} size={scale700} />
        </Block>
      </Button>
    </Dropdown>
  );
};

export default ActionButton;
