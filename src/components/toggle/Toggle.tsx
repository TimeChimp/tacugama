import React from 'react';
import { Checkbox, CheckboxProps, STYLE_TYPE } from 'baseui/checkbox';
import { useTheme } from 'providers';
import { border, margin } from 'utils';
import { DATA_TEST_ID } from 'models';

export interface ToggleProps extends CheckboxProps {
  testId?: string;
}

export const Toggle = ({ checked, testId, ...rest }: ToggleProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale400, scale500, scale700 },
        customColors: { dark4, light4, primaryMain },
        borders: { border100 },
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
        ToggleTrack: {
          style: {
            width: scale700,
            height: scale500,
            ...margin('0'),
            background: !!checked ? primaryMain : dark4,
          },
        },
        Toggle: {
          style: {
            width: scale400,
            height: scale400,
            backgroundColor: light4,
            ...border({
              ...border100,
              borderWidth: scale0,
              borderColor: !!checked ? primaryMain : dark4,
            }),
            ':hover': {
              boxShadow: 'none',
            },
          },
        },
      }}
      {...rest}
    />
  );
};
