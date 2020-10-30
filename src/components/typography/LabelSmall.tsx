import React, { forwardRef } from 'react';
import { LabelSmall as BaseLabelSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const LabelSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseLabelSmall ref={ref} margin={margin} {...rest}>
      {children}
    </BaseLabelSmall>
  ),
);

export default LabelSmall;
