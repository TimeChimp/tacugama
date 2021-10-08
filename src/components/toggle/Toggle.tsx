import React from 'react';
import { Checkbox, CheckboxProps, STYLE_TYPE } from 'baseui/checkbox';
import { useTheme } from '../../providers';
import { margin } from '../../utils';
import { DATA_TEST_ID } from '../../models';

export interface ToggleProps extends CheckboxProps {
  testId?: string;
}

export const Toggle = ({ checked, children, testId, ...rest }: ToggleProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale300, scale500, scale700 },
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
            width: scale700,
            height: scale500,
            marginRight: 0,
            marginLeft: 0,
            background: !!checked ? primaryMain : dark4,
          },
        },
        Toggle: {
          style: {
            width: scale300,
            height: scale300,
            backgroundColor: light4,
            ...margin(scale0),
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
