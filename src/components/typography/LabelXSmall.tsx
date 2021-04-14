import React, { forwardRef } from 'react';
import { LabelXSmall as BaseLabelXSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const LabelXSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseLabelXSmall ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseLabelXSmall>
  ),
);

export default LabelXSmall;
