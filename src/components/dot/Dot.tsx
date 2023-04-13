import React from 'react';
import { themedStyled } from '../../theme';
import { CustomThemeType } from '../../models';
import { borderRadius } from '../../utils';

export interface DotProps {
  color: string;
}

const StyledDot = themedStyled<'div', DotProps>(
  'div',
  ({ $theme, color }: { $theme: CustomThemeType; color: string }) => ({
    backgroundColor: color ? color : $theme.colors.backgroundPositive,
    height: $theme.sizing.scale400,
    width: $theme.sizing.scale400,
    ...borderRadius('50%'),
    display: 'inline-block',
  }),
);

export const Dot = ({ color }: DotProps) => {
  return <StyledDot color={color} />;
};
