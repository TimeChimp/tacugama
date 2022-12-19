import React from 'react';
import { SHAPE } from 'baseui/button';
import { TriangleDown } from 'baseui/icon';
import { Dropdown, Block, DropdownProps } from '../../components';
import { useTheme } from '../../providers';
import Button from '../button/Button';
import { ButtonKind as Kind } from '../../models';

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

export interface ActionButtonProps extends DropdownProps {
  selectedOption: ActionButtonOption;
  kind?: Kind;
  shape?: SHAPE[keyof SHAPE];
  startEnhancer?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
  withoutLabel?: boolean;
}

export const ActionButton = ({
  items = DEFAULT_OPTIONS,
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
      },
    },
  } = useTheme();

  const label = selectedOption?.label || placeholder;

  return (
    <Dropdown items={items}>
      <Button size="compact" buttonKind={kind} shape={shape} startEnhancer={startEnhancer} disabled={disabled}>
        <Block display="flex" gridColumnGap={scale500} alignItems="center">
          {!withoutLabel ? label : null}
          <TriangleDown size={scale700} />
        </Block>
      </Button>
    </Dropdown>
  );
};

export default ActionButton;
