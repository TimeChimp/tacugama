import React, { forwardRef } from 'react';
import { HeadingXLarge as BaseHeadingXLarge } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingXLarge = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingXLarge ref={ref} margin={margin} {...rest}>
      {children}
    </BaseHeadingXLarge>
  ),
);

export default HeadingXLarge;
