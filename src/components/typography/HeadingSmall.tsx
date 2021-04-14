import React, { forwardRef } from 'react';
import { HeadingSmall as BaseHeadingSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingSmall ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseHeadingSmall>
  ),
);

export default HeadingSmall;
