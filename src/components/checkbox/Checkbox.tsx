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
        sizing: { scale550, scale650 },
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

  const getBackgroundImage = () => {
    /*
     * The checkmark icon is an SVG, and SVGs cannot be used as background images.
     * This is the only way to override the background image of the checkbox.
     * */
    const checkMarkSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M2.33649 9.05253L2.80199 8.57152C2.99849 8.36847 3.32409 8.36847 3.52059 8.57152L5.48387 10.6002L12.4794 3.37152C12.6759 3.16847 13.0015 3.16847 13.198 3.37152L13.6635 3.85253C13.8511 4.04639 13.8511 4.3541 13.6635 4.54796L5.84317 12.629C5.64667 12.832 5.32107 12.832 5.12457 12.629L2.33649 9.74795C2.1489 9.5541 2.1489 9.24639 2.33649 9.05253Z'/%3E%3C/svg%3E")`;
    const indeterminateSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23fff' fill-rule='evenodd' d='M3.66634 8.66659C3.48225 8.66659 3.33301 8.51735 3.33301 8.33325V7.66659C3.33301 7.48249 3.48225 7.33325 3.66634 7.33325H12.333C12.5171 7.33325 12.6663 7.48249 12.6663 7.66659V8.33325C12.6663 8.51735 12.5171 8.66659 12.333 8.66659H3.66634Z'/%3E%3C/svg%3E")`;
    if (isIndeterminate) {
      return indeterminateSvg;
    }
    if (checked) {
      return checkMarkSvg;
    }
    return 'none';
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
              borderWidth: '1px', // NOTE: Value doesn't exist in theme
              borderColor: getBorderColor(),
            }),
            backgroundImage: getBackgroundImage(),
            backgroundColor: getBackgroundColor(),
            ...borderRadius(radius100),
            ':hover': {
              ...border({
                ...border100,
                borderWidth: '1px', // NOTE: Value doesn't exist in theme
                borderColor: getHoverBorderColor(),
              }),
              backgroundColor: getHoverBackgroundColor(),
              backgroundImage: getBackgroundImage(),
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
