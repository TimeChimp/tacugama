import React from 'react';
import { Checkbox as BaseCheckbox } from 'baseui/checkbox';
import { useTheme } from '../../providers';
import { border, borderRadius } from '../../utils';
import { DATA_TEST_ID } from '../../models';
import { CheckboxProps, CheckboxSize } from './types';

export const Checkbox = ({
  checked,
  children,
  testId,
  disabled,
  isIndeterminate,
  size = CheckboxSize.Default,
  ...rest
}: CheckboxProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale550, scale650 },
        borders: { border100, radius100 },
        typography: { LabelSmall },
        customColors: { dark4, light3 },
        colors: { primary },
      },
    },
  } = useTheme();

  const isCheckedOrIndeterminate = checked || isIndeterminate;

  const getBackgroundColor = () => {
    if (disabled && isCheckedOrIndeterminate) {
      return dark4;
    }
    if (isCheckedOrIndeterminate) {
      return primary;
    }
    if (disabled) {
      return light3;
    }
    return 'transparent';
  };

  const getBorderColor = () => {
    if (isCheckedOrIndeterminate && !disabled) {
      return primary;
    }
    return dark4;
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
          style: {
            alignItems: 'center',
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
            height: size === CheckboxSize.Default ? scale650 : scale550,
            width: size === CheckboxSize.Default ? scale650 : scale550,
            ...border({
              ...border100,
              borderWidth: scale0,
              borderColor: getBorderColor(),
            }),
            backgroundColor: getBackgroundColor(),
            ...borderRadius(radius100),
          },
        },
      }}
      {...rest}
    >
      {children}
    </BaseCheckbox>
  );
};
