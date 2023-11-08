import React from 'react';
import { Block, BlockProps } from 'baseui/block';
import { CustomThemeProps } from '../../models';
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
          style: ({ $theme }: CustomThemeProps) => ({
            ...border(
              !noBorder
                ? {
                    ...$theme.borders.border300,
                    borderColor: $theme.customColors.light2,
                  }
                : undefined,
            ),
            ...borderRadius($theme.borders.radius200),
            background: $theme.colors.primaryB,
          }),
        },
      }}
    />
  );
};
