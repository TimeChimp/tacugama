import React, { forwardRef } from 'react';
import { HeadingLarge as BaseHeadingLarge } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingLarge = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingLarge ref={ref} margin={margin} {...rest}>
      {children}
    </BaseHeadingLarge>
  ),
);

export default HeadingLarge;
