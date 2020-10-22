import React, { forwardRef } from 'react';
import { HeadingSmall as BaseHeadingSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingSmall ref={ref} margin={margin} {...rest}>
      {children}
    </BaseHeadingSmall>
  ),
);

export default HeadingSmall;
