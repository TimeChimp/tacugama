import React, { forwardRef } from 'react';
import { themedStyled } from '../../theme';

export interface SVGProps {
  size?: string;
  color?: string;
  title?: string;
}

export const defaultIconProps: SVGProps = { color: '#000', size: '24' };

interface IconProps {
  title: string;
  lineHeight?: string;
  children: React.ReactNode;
}

interface StyledIconBoxProps {
  $lineHeight?: string;
}

const StyledIconBox = themedStyled<'div', StyledIconBoxProps>('div', ({ $lineHeight }) => ({
  lineHeight: $lineHeight || '16px',
}));

export const Icon = forwardRef<HTMLDivElement, IconProps>(({ title, lineHeight, children }: IconProps, ref) => {
  return (
    <StyledIconBox $lineHeight={lineHeight} ref={ref} title={title}>
      {children}
    </StyledIconBox>
  );
});

Icon.displayName = 'icon';
