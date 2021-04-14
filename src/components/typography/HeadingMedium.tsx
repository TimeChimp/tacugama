import React, { forwardRef } from 'react';
import { HeadingMedium as BaseHeadingMedium } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingMedium = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingMedium ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseHeadingMedium>
  ),
);

export default HeadingMedium;
