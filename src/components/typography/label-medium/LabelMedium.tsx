import React, { forwardRef } from 'react';
import { LabelMedium as BaseLabelMedium } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const LabelMedium = forwardRef<HTMLButtonElement, BlockProps & { for?: string }>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseLabelMedium ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseLabelMedium>
  ),
);

export default LabelMedium;
