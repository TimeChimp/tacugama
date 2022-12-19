import React from 'react';
import { Button } from '../button';
import { CaretLeftIcon } from '../icons/caret-left';
import { CaretRightIcon } from '../icons/caret-right';
import { useTheme } from '../../providers';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { LabelMedium } from '../typography/label-medium';

export interface SwitcherProps {
  onPrev: () => void;
  onNext: () => void;
  value: string | number;
}

export const Switcher = ({ onPrev, onNext, value }: SwitcherProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
        sizing: { scale400, scale500 },
      },
    },
  } = useTheme();

  return (
    <FlexGrid>
      <FlexGridItem display="flex" alignItems="center">
        <Button
          overrides={{
            BaseButton: {
              style: {
                backgroundColor: primaryB,
              },
            },
          }}
          onClick={onPrev}
        >
          <CaretLeftIcon size={scale400} />
        </Button>
        <LabelMedium paddingLeft={scale500} paddingRight={scale500}>
          {value}
        </LabelMedium>
        <Button
          overrides={{
            BaseButton: {
              style: {
                backgroundColor: primaryB,
              },
            },
          }}
          onClick={onNext}
        >
          <CaretRightIcon size={scale400} />
        </Button>
      </FlexGridItem>
    </FlexGrid>
  );
};
