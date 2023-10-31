import React from 'react';
import { FlexGrid } from 'baseui/flex-grid';
import Button from '../button/Button';
import { ButtonKind } from '../../models';

const DEFAULT_OPTIONS = [
  {
    label: 'Option 1',
    id: 'option-1',
  },
  {
    label: 'Option 2',
    id: 'option-2',
  },
  {
    label: 'Option 3',
    id: 'option-3',
  },
  {
    label: 'Option 4',
    id: 'option-4',
  },
  {
    label: 'Option 5',
    id: 'option-5',
  },
];

interface ButtonSwitcherOption {
  label: string;
  id: string;
}

export interface ButtonSwitcherProps {
  options: ButtonSwitcherOption[];
  selectedOption: ButtonSwitcherOption;
  onClick: (option: ButtonSwitcherOption) => void;
}

export const ButtonSwitcher = ({
  options = DEFAULT_OPTIONS,
  onClick,
  selectedOption = DEFAULT_OPTIONS[0],
}: ButtonSwitcherProps) => {
  const leftButtonRadiuses = { borderTopRightRadius: 0, borderBottomRightRadius: 0 };
  const rightButtonRadiuses = { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 };
  const middleButtonRadiuses = {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  };

  const renderPrimaryButton = (option: ButtonSwitcherOption, radiuses: { [key: string]: string | number }) => (
    <Button rootOverrides={radiuses} onClick={() => onClick(option)} type="button">
      {option.label}
    </Button>
  );
  const renderSecondaryButton = (option: ButtonSwitcherOption, radiuses: { [key: string]: string | number }) => (
    <Button kind={ButtonKind.secondary} rootOverrides={radiuses} onClick={() => onClick(option)} type="button">
      {option.label}
    </Button>
  );

  const getRadiuses = (idx: number) => {
    if (!idx) {
      return leftButtonRadiuses;
    }
    if (idx === options.length - 1) {
      return rightButtonRadiuses;
    }
    return middleButtonRadiuses;
  };

  return (
    <FlexGrid>
      {options.map((option, idx) =>
        selectedOption?.id === option.id
          ? renderPrimaryButton(option, getRadiuses(idx))
          : renderSecondaryButton(option, getRadiuses(idx)),
      )}
    </FlexGrid>
  );
};

export default ButtonSwitcher;
