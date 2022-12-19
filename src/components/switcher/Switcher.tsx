import React from 'react';
import { useTheme } from '../../providers';
import { CaretRightIcon, CaretLeftIcon, Button } from '../../components';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { LabelMedium } from '../typography';

export interface SwitcherProps {
  onPrev: () => void;
  onNext: () => void;
  value: string | number;
}

export const Switcher = ({ onPrev, onNext, value }: SwitcherProps) => {
  const {
    theme: {
      current: {
        sizing: { scale400, scale500 },
      },
    },
  } = useTheme();

  return (
    <FlexGrid>
      <FlexGridItem display="flex" alignItems="center">
        <Button onClick={onPrev}>
          <CaretLeftIcon size={scale400} />
        </Button>
        <LabelMedium paddingLeft={scale500} paddingRight={scale500}>
          {value}
        </LabelMedium>
        <Button onClick={onNext}>
          <CaretRightIcon size={scale400} />
        </Button>
      </FlexGridItem>
    </FlexGrid>
  );
};
