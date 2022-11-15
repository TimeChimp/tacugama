import React from 'react';
import { Checkbox as BaseCheckbox, CheckboxProps as BaseCheckboxProps } from 'baseui/checkbox';
import { useTheme } from '../../providers';
import { border, borderRadius } from '../../utils';
import { DATA_TEST_ID } from '../../models';

export interface CheckboxProps extends BaseCheckboxProps {
  testId?: string;
}

export const Checkbox = ({ checked, children, testId, disabled, isIndeterminate, ...rest }: CheckboxProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale650 },
        borders: { border100, radius100 },
        typography: { LabelSmall },
        customColors: { dark4, light3, purple2, purple1 },
      },
    },
  } = useTheme();

  const isCheckedOrIndeterminate = checked || isIndeterminate;

  const getBackgroundColor = () => {
    if (disabled && isCheckedOrIndeterminate) {
      return dark4;
    }
    if (isCheckedOrIndeterminate) {
      return purple2;
    }
    if (disabled) {
      return light3;
    }
    return 'transparent';
  };

  const getBorderColor = () => {
    if (isCheckedOrIndeterminate && !disabled) {
      return purple2;
    }
    return dark4;
  };

  const getHoverBackgroundColor = () => {
    if (disabled && isCheckedOrIndeterminate) {
      return dark4;
    }
    if (disabled) {
      return light3;
    }
    if (isCheckedOrIndeterminate) {
      return purple1;
    }
    return 'transparent';
  };

  const getHoverBorderColor = () => {
    if (disabled) {
      return dark4;
    }
    if (isCheckedOrIndeterminate) {
      return purple1;
    }
    return purple2;
  };

  return (
    <BaseCheckbox
      checked={checked}
      isIndeterminate={isIndeterminate}
      disabled={disabled}
      overrides={{
        Root: {
          props: {
            [DATA_TEST_ID]: testId,
          },
        },
        Label: {
          style: {
            ...LabelSmall,
            fontWeight: 400,
            display: !!children ? 'inline-block' : 'none',
          },
        },
        Checkmark: {
          style: {
            width: scale650,
            height: scale650,
            ...border({
              ...border100,
              borderWidth: scale0,
              borderColor: getBorderColor(),
            }),
            backgroundColor: getBackgroundColor(),
            ...borderRadius(radius100),
            ':hover': {
              ...border({
                ...border100,
                borderWidth: scale0,
                borderColor: getHoverBorderColor(),
              }),
              backgroundColor: getHoverBackgroundColor(),
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </BaseCheckbox>
  );
};
