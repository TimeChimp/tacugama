import React, { forwardRef } from 'react';
import { LabelXSmall as BaseLabelXSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const LabelXSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseLabelXSmall ref={ref} margin={margin} {...rest}>
      {children}
    </BaseLabelXSmall>
  ),
);

export default LabelXSmall;
