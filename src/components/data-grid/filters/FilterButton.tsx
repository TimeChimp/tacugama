import React, { forwardRef } from 'react';
import { SecondaryButton, SecondaryButtonProps, MinimalButton } from '../../button';
import { LabelSmall } from '../../typography';
import { ArrowDown, Clear } from '../../icons';
import { useTheme } from '../../../providers';

const FILTER_BUTTON_TEST_ID = 'filter-button';

export interface FilterButtonProps extends SecondaryButtonProps {
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
      <SecondaryButton
        ref={ref}
        testId={testId ?? FILTER_BUTTON_TEST_ID}
        endEnhancer={
          <>
            {arrows && <ArrowDown size={scale300} />}
            {hasValue && onClear && (
              <MinimalButton isTransparent onClick={onClear}>
                <Clear size={scale600} color={primaryA} />
              </MinimalButton>
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
      </SecondaryButton>
    );
  },
);

export default FilterButton;
