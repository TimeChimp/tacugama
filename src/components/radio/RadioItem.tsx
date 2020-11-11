import React, { FunctionComponent } from 'react';
import { Radio as BaseRadio, RadioOverrides, RadioProps as BaseRadioProps } from 'baseui/radio';
import { IconProps } from 'baseui/icon';
import { RadioIcon } from './RadioIcon';
import { CustomThemeType } from 'models';
import { margin, padding } from '../../utils';

export interface RadioProps extends BaseRadioProps {
  value: string;
  colored?: boolean;
  icon?: FunctionComponent<IconProps>;
}

const radioOverrides = ({ icon, colored }: Pick<RadioProps, 'icon' | 'colored'>): RadioOverrides => ({
  Root: {
    style: ({ $theme, $checked }: { $theme: CustomThemeType; $checked: boolean }) => ({
      width: '100%',
      borderRadius: '2px',
      ...margin('0'),
      ...padding('8px', '24px'),
      ...(colored && {
        ':hover': {
          backgroundColor: $checked ? undefined : $theme.colors.primary50,
        },
      }),
    }),
  },
  Label: {
    style: () => ({
      ...padding('0', '24px'),
    }),
  },
  RadioMarkOuter: {
    component: icon && RadioIcon(icon),
  },
  RadioMarkInner: {
    component: icon ? () => null : undefined,
  },
});

export const RadioItem = ({ icon, colored = true, children, ...rest }: RadioProps) => {
  return (
    <BaseRadio {...rest} overrides={radioOverrides({ icon, colored })}>
      {children}
    </BaseRadio>
  );
};
