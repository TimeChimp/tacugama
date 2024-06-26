import React, { forwardRef } from 'react';
import { Button, ButtonProps } from '../../button';
import { ParagraphSmall } from '../../typography';
import { useTheme } from '../../../providers';
import { ButtonKind } from '../../../models';
import { CaretDown, X } from '@phosphor-icons/react';

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
          colors: { primaryA },
        },
      },
    } = useTheme();
    return (
      <Button
        kind={ButtonKind.secondary}
        ref={ref}
        testId={testId ?? FILTER_BUTTON_TEST_ID}
        endEnhancer={
          <>
            {arrows && <CaretDown />}
            {hasValue && onClear && (
              <Button kind={ButtonKind.minimal} onClick={onClear}>
                <X color={primaryA} />
              </Button>
            )}
          </>
        }
        {...rest}
      >
        <ParagraphSmall
          overrides={{
            Block: {
              style: {
                fontWeight: isActive ? 600 : 400,
              },
            },
          }}
        >
          {title}
        </ParagraphSmall>
      </Button>
    );
  },
);

export default FilterButton;
