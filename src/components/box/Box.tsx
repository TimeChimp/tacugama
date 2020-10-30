import React from 'react';
import { Block, BlockProps } from 'baseui/block';
import { ThemeProps } from 'models';
import { border, borderRadius } from '../../utils';

export const Box = ({ ...rest }: BlockProps) => {
  return (
    <Block
      {...rest}
      overrides={{
        Block: {
          style: ({ $theme }: ThemeProps) => ({
            ...border($theme.borders.border300),
            ...borderRadius($theme.borders.radius100),
            background: $theme.colors.primaryB,
          }),
        },
      }}
    />
  );
};
