import React, { forwardRef } from 'react';
import { ParagraphMedium as BaseParagraphMedium } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const ParagraphMedium = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseParagraphMedium ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseParagraphMedium>
  ),
);

export default ParagraphMedium;
