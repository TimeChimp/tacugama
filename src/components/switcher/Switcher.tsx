import React from 'react';
import { Button } from '../button';
import { useTheme } from '../../providers';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { LabelMedium } from '../typography/label-medium';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

export interface SwitcherProps {
  onPrev: () => void;
  onNext: () => void;
  value: string | number;
  color?: string;
}

export const Switcher = ({ onPrev, onNext, value, color }: SwitcherProps) => {
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
          <CaretLeft size={scale400} />
        </Button>
        <LabelMedium paddingLeft={scale500} paddingRight={scale500} color={color}>
          {value}
        </LabelMedium>
        <Button onClick={onNext}>
          <CaretRight size={scale400} />
        </Button>
      </FlexGridItem>
    </FlexGrid>
  );
};
