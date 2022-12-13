import React, { FunctionComponent } from 'react';
import { Radio as BaseRadio, RadioOverrides, RadioProps as BaseRadioProps } from 'baseui/radio';
import { IconProps } from 'baseui/icon';
import { RadioIcon } from '../radio-icon';
import { CustomThemeType } from 'models';
import { border, margin, padding } from '../../../utils';

export interface RadioProps extends BaseRadioProps {
  value: string;
  colored?: boolean;
  icon?: FunctionComponent<IconProps>;
  small?: boolean;
}

const radioOverrides = ({
  icon,
  colored,
  small,
  overrides,
}: Pick<RadioProps, 'icon' | 'colored' | 'small' | 'overrides'>): RadioOverrides => ({
  Root: {
    style: ({ $theme, $checked }: { $theme: CustomThemeType; $checked: boolean }) => ({
      width: '100%',
      alignItems: 'start',
      borderRadius: $theme.borders.radius100,
      ...margin($theme.sizing.scale100, '0'),
      ...padding($theme.sizing.scale300, $theme.sizing.scale400),
      backgroundColor: 'none',
      ...(colored && {
        backgroundColor: $checked ? 'red' : 'green',
        ':hover': {
          backgroundColor: $checked ? undefined : $theme.colors.primary100,
        },
      }),
    }),
  },
  Label: {
    style: ({ $theme }) => ({
      ...padding('0', $theme.sizing.scale400),
    }),
  },
  RadioMarkOuter: {
    component: icon && RadioIcon(icon),
    style: ({ $theme, $checked, $disabled }: { $theme: CustomThemeType; $checked: boolean; $disabled: boolean }) => ({
      width: small ? $theme.sizing.scale500 : $theme.sizing.scale600,
      height: small ? $theme.sizing.scale500 : $theme.sizing.scale600,
      backgroundColor: $disabled ? $theme.customColors.light3 : 'transparent',
      ...border({
        borderColor: $disabled
          ? $theme.customColors.dark4
          : $checked
          ? $theme.customColors.purple2
          : $theme.customColors.dark4,
        borderStyle: 'solid',
        borderWidth: '1px',
      }),
      ':hover': {
        ...border({
          borderColor: $checked ? $theme.customColors.purple1 : $theme.customColors.purple2,
          borderStyle: 'solid',
          borderWidth: '1px',
        }),
      },
      pointerEvents: $disabled ? 'none' : 'initial',
    }),
  },
  RadioMarkInner: {
    component: icon ? () => null : undefined,
    style: ({ $theme, $checked, $disabled }: { $theme: CustomThemeType; $checked: boolean; $disabled: boolean }) => ({
      width: small ? $theme.sizing.scale300 : $theme.sizing.scale400,
      height: small ? $theme.sizing.scale300 : $theme.sizing.scale400,
      backgroundColor: $checked ? ($disabled ? $theme.customColors.dark4 : $theme.customColors.purple2) : 'transparent',
      ':hover': {
        backgroundColor: $checked ? $theme.customColors.purple1 : 'transparent',
      },
      pointerEvents: $disabled ? 'none' : 'initial',
    }),
  },
  ...overrides,
});

export const RadioItem = ({ icon, colored = false, small = false, children, overrides, ...rest }: RadioProps) => {
  return (
    <BaseRadio {...rest} overrides={radioOverrides({ icon, colored, small, overrides })}>
      {children}
    </BaseRadio>
  );
};
