import React, { forwardRef } from 'react';
import { HeadingXSmall as BaseHeadingXSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingXSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingXSmall ref={ref} margin={margin} {...rest}>
      {children}
    </BaseHeadingXSmall>
  ),
);

export default HeadingXSmall;
