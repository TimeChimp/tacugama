import React, { forwardRef } from 'react';
import { HeadingXXLarge as BaseHeadingXXLarge } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingXXLarge = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingXXLarge ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseHeadingXXLarge>
  ),
);

export default HeadingXXLarge;
