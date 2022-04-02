import React, { forwardRef } from 'react';
import { HeadingXLarge as BaseHeadingXLarge } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingXLarge = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingXLarge ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseHeadingXLarge>
  ),
);

export default HeadingXLarge;
