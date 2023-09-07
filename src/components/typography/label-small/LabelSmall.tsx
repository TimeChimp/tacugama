import React, { forwardRef } from 'react';
import { LabelSmall as BaseLabelSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const LabelSmall = forwardRef<HTMLButtonElement, BlockProps & { for?: string }>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseLabelSmall ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseLabelSmall>
  ),
);

export default LabelSmall;
