import React, { forwardRef } from 'react';
import { themedStyled } from '../../theme';

export interface SVGProps {
  size?: string;
  color?: string;
  title?: string;
  iconStyle?: {
    [key: string]: string;
  };
}

interface IconProps {
  title: string;
  lineHeight?: string;
  children: React.ReactNode;
  iconStyle?: {
    [key: string]: string;
  };
}

interface StyledIconBoxProps {
  $lineHeight?: string;
}

const StyledIconBox = themedStyled<'div', StyledIconBoxProps>('div', ({ $lineHeight }) => ({
  lineHeight: $lineHeight || '16px',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledIconGrid = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: $theme.sizing.scale800,
  columnGap: $theme.sizing.scale950,
}));

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ title, lineHeight, children, iconStyle }: IconProps, ref) => {
    return (
      <StyledIconBox style={iconStyle} $lineHeight={lineHeight} ref={ref} title={title}>
        {children}
      </StyledIconBox>
    );
  },
);

Icon.displayName = 'icon';
