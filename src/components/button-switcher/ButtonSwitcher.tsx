import React from 'react';
import { FlexGrid } from 'baseui/flex-grid';
import Button from '../button/Button';
import { ButtonKind } from '../../models';
import { useTheme } from '../../providers';

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

  const {
    theme: {
      current: {
        sizing: { scale300 },
      },
    },
  } = useTheme();

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

  return (
    <FlexGrid gridGap={scale300}>
      {selectedOption?.id === options[0].id
        ? renderPrimaryButton(options[0], leftButtonRadiuses)
        : renderSecondaryButton(options[0], leftButtonRadiuses)}
      {selectedOption?.id === options[1].id
        ? renderPrimaryButton(options[1], rightButtonRadiuses)
        : renderSecondaryButton(options[1], rightButtonRadiuses)}
    </FlexGrid>
  );
};

export default ButtonSwitcher;
