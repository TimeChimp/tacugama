import React from 'react';
import { FlexGrid } from 'baseui/flex-grid';
import Button from 'components/button/Button';
import { SecondaryButton } from 'components/button/secondary-button';

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

  const renderPrimaryButton = (option: ButtonSwitcherOption, radiuses: { [key: string]: string | number }) => (
    <Button rootOverrides={radiuses} onClick={() => onClick(option)}>
      {option.label}
    </Button>
  );
  const renderSecondaryButton = (option: ButtonSwitcherOption, radiuses: { [key: string]: string | number }) => (
    <SecondaryButton rootOverrides={radiuses} onClick={() => onClick(option)}>
      {option.label}
    </SecondaryButton>
  );

  return (
    <FlexGrid>
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
