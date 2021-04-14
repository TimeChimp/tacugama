import React, { FunctionComponent } from 'react';
import { Radio as BaseRadio, RadioOverrides, RadioProps as BaseRadioProps } from 'baseui/radio';
import { IconProps } from 'baseui/icon';
import { RadioIcon } from './RadioIcon';
import { CustomThemeType } from 'models';
import { border, margin, padding } from '../../utils';

export interface RadioProps extends BaseRadioProps {
  value: string;
  colored?: boolean;
  icon?: FunctionComponent<IconProps>;
}

const radioOverrides = ({ icon, colored }: Pick<RadioProps, 'icon' | 'colored'>): RadioOverrides => ({
  Root: {
    style: ({ $theme, $checked }: { $theme: CustomThemeType; $checked: boolean }) => ({
      width: '100%',
      backgroundColor: $checked ? $theme.colors.primary100 : $theme.colors.primary50,
      borderRadius: $theme.borders.radius100,
      ...margin($theme.sizing.scale100, '0'),
      ...padding($theme.sizing.scale300, $theme.sizing.scale400),
      ...(colored && {
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
    style: ({ $theme, $checked }: { $theme: CustomThemeType; $checked: boolean }) => ({
      width: $theme.sizing.scale650,
      height: $theme.sizing.scale650,
      backgroundColor: 'transparent',
      ...border({
        borderColor: $checked ? $theme.customColors.primaryMain : $theme.colors.contentTertiary,
        borderStyle: 'solid',
        borderWidth: $theme.borders.radius100,
      }),
    }),
  },
  RadioMarkInner: {
    component: icon ? () => null : undefined,
    style: ({ $theme, $checked }: { $theme: CustomThemeType; $checked: boolean }) => ({
      width: $theme.sizing.scale400,
      height: $theme.sizing.scale400,
      backgroundColor: $checked ? $theme.customColors.primaryMain : 'transparent',
    }),
  },
});

export const RadioItem = ({ icon, colored = true, children, ...rest }: RadioProps) => {
  return (
    <BaseRadio {...rest} overrides={radioOverrides({ icon, colored })}>
      {children}
    </BaseRadio>
  );
};
