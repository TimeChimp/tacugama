import React, { forwardRef } from 'react';
import { HeadingXXLarge as BaseHeadingXXLarge } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingXXLarge = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingXXLarge ref={ref} margin={margin} {...rest}>
      {children}
    </BaseHeadingXXLarge>
  ),
);

export default HeadingXXLarge;
