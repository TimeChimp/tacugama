import React, { FunctionComponent } from 'react';
import { IconOverrides, IconProps } from 'baseui/icon';
import { ThemeProps } from '../../../models';

const iconOverrides = ({ $checked }: { $checked: boolean }): IconOverrides => {
  return {
    Svg: {
      style: ({ $theme }: ThemeProps) => ({
        visibility: $checked ? 'visible' : 'hidden',
        color: $theme.colors.primary,
      }),
    },
  };
};

export const RadioIcon = (Icon: FunctionComponent<IconProps>) => (props: any) => {
  return <Icon size={24} overrides={iconOverrides(props)} />;
};
