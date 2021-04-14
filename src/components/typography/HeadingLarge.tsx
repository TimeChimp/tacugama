import React, { forwardRef } from 'react';
import { HeadingLarge as BaseHeadingLarge } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingLarge = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingLarge ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseHeadingLarge>
  ),
);

export default HeadingLarge;
