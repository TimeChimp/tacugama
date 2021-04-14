import React, { forwardRef } from 'react';
import { HeadingXSmall as BaseHeadingXSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingXSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingXSmall ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseHeadingXSmall>
  ),
);

export default HeadingXSmall;
