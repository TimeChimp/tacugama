import React, { forwardRef } from 'react';
import { LabelMedium as BaseLabelMedium } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const LabelMedium = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseLabelMedium ref={ref} margin={margin} {...rest}>
      {children}
    </BaseLabelMedium>
  ),
);

export default LabelMedium;
