import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../../button';
import { LabelSmall } from '../../typography';
import { ArrowDown, Clear } from '../../icons';
import { useTheme } from '../../../providers';
import { KIND } from 'baseui/button';

const FILTER_BUTTON_TEST_ID = 'filter-button';

export interface FilterButtonProps extends ButtonProps {
  title: string;
  isActive?: boolean;
  hasValue?: boolean;
  onClear?: () => void;
  arrows?: boolean;
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ title, testId, onClear, hasValue = false, isActive = false, arrows, ...rest }: FilterButtonProps, ref) => {
    const {
      theme: {
        current: {
          sizing: { scale300, scale600 },
          colors: { primaryA },
        },
      },
    } = useTheme();

    return (
      <Button
        kind={KIND.secondary}
        ref={ref}
        testId={testId ?? FILTER_BUTTON_TEST_ID}
        endEnhancer={
          <>
            {arrows && <ArrowDown size={scale300} />}
            {hasValue && onClear && (
              <Button kind={KIND.minimal} isTransparent onClick={onClear}>
                <Clear size={scale600} color={primaryA} />
              </Button>
            )}
          </>
        }
        {...rest}
      >
        <LabelSmall
          overrides={{
            Block: {
              style: {
                fontWeight: isActive ? 600 : 400,
              },
            },
          }}
        >
          {title}
        </LabelSmall>
      </Button>
    );
  },
);

export default FilterButton;
