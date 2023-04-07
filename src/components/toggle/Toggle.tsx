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

export const Toggle = ({ checked, children, testId, size = ToggleSize.large, disabled, ...rest }: ToggleProps) => {
  const {
    theme: {
      current: {
        sizing: {
          scale0,

          scale500,
          scale600,
          scale700,
          scale950,
        },
        colors: { primary400 },
        customColors: { light3, light4, light7 },
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
          style: {
            marginTop: 0,
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
            width: size === ToggleSize.small ? scale950 : '44px',
            height: size === ToggleSize.small ? scale700 : '24px',
            marginRight: 0,
            marginLeft: 0,
            marginTop: 0,
            backgroundColor: !!checked && !disabled ? primary400 : light3,
            ...borderRadius(scale500),
          },
        },
        Toggle: {
          style: {
            width: size === ToggleSize.small ? scale600 : scale700,
            height: size === ToggleSize.small ? scale600 : scale700,
            backgroundColor: disabled ? light7 : light4,
            ...margin('0px', scale0),
            boxShadow:
              !checked || disabled ? `0px 1px 3px rgba(46, 46, 46, 0.1), 0px 1px 2px rgba(46, 46, 46, 0.06)` : 'none',
          },
        },
      }}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};
