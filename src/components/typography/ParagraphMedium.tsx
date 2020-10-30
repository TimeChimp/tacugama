import React, { forwardRef } from 'react';
import { ParagraphMedium as BaseParagraphMedium } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const ParagraphMedium = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseParagraphMedium ref={ref} margin={margin} {...rest}>
      {children}
    </BaseParagraphMedium>
  ),
);

export default ParagraphMedium;
