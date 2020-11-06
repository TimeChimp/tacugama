import React, { forwardRef } from 'react';
import { HeadingMedium as BaseHeadingMedium } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const HeadingMedium = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseHeadingMedium ref={ref} margin={margin} {...rest}>
      {children}
    </BaseHeadingMedium>
  ),
);

export default HeadingMedium;
