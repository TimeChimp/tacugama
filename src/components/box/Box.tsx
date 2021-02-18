import React from 'react';
import { Block, BlockProps } from 'baseui/block';
import { ThemeProps } from 'models';
import { border, borderRadius } from '../../utils';

export interface BoxProps extends BlockProps {
  noBorder?: boolean;
}

export const Box = ({ noBorder = false, ...rest }: BoxProps) => {
  return (
    <Block
      {...rest}
      overrides={{
        Block: {
          style: ({ $theme }: ThemeProps) => ({
            ...border(!noBorder ? $theme.borders.border300 : undefined),
            ...borderRadius($theme.borders.radius100),
            background: $theme.colors.primaryB,
          }),
        },
      }}
    />
  );
};
