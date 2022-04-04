import React from 'react';
import { Checkbox as BaseCheckbox, CheckboxProps as BaseCheckboxProps } from 'baseui/checkbox';
import { useTheme } from '../../providers';
import { border, borderRadius } from '../../utils';
import { DATA_TEST_ID } from '../../models';

export interface CheckboxProps extends BaseCheckboxProps {
  testId?: string;
}

export const Checkbox = ({ checked, children, testId, ...rest }: CheckboxProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale650 },
        borders: { border100, radius100 },
        typography: { LabelSmall },
        colors,
      },
    },
  } = useTheme();
  const { primaryB, primary400 } = colors;

  return (
    <BaseCheckbox
      checked={checked}
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
          },
        },
        Checkmark: {
          style: {
            width: scale650,
            height: scale650,
            ...border({
              ...border100,
              borderWidth: scale0,
              borderColor: !!checked ? primary400 : '#87878F',
            }),
            ...borderRadius(radius100),
            ':hover': {
              ...border({
                ...border100,
                borderWidth: scale0,
                borderColor: primary400,
              }),
              backgroundColor: !!checked ? primary400 : primaryB,
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
