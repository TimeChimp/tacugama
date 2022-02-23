import React from 'react';
import { Checkbox, CheckboxProps, STYLE_TYPE } from 'baseui/checkbox';
import { useTheme } from '../../providers';
import { borderRadius, margin } from '../../utils';
import { DATA_TEST_ID } from '../../models';

export interface ToggleProps extends CheckboxProps {
  testId?: string;
  size?: ToggleSize;
}

export enum ToggleSize {
  small = 'small',
  large = 'large',
}

export const Toggle = ({ checked, children, testId, size = ToggleSize.small, ...rest }: ToggleProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale300, scale400, scale500, scale700, scale900 },
        colors: { primary400 },
        customColors: { dark4, light4, primaryMain },
        typography: { LabelSmall },
      },
    },
  } = useTheme();

  return (
    <Checkbox
      checked={checked}
      checkmarkType={STYLE_TYPE.toggle_round}
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
            paddingRight: 0,
          },
        },
        ToggleTrack: {
          style: {
            width: size === ToggleSize.small ? scale700 : scale900,
            height: size === ToggleSize.small ? scale500 : scale700,
            marginRight: 0,
            marginLeft: 0,
            backgroundColor: !!checked ? primary400 : dark4,
            ...borderRadius(scale400),
          },
        },
        Toggle: {
          style: {
            width: size === ToggleSize.small ? scale300 : scale500,
            height: size === ToggleSize.small ? scale300 : scale500,
            backgroundColor: light4,
            ...margin(scale0, size === ToggleSize.small ? scale0 : scale100),
            ':hover': {
              boxShadow: 'none',
            },
          },
        },
      }}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};
