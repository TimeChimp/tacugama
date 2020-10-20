import React, { forwardRef } from 'react';
import { ParagraphSmall as BaseParagraphSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const ParagraphSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseParagraphSmall ref={ref} margin={margin} {...rest}>
      {children}
    </BaseParagraphSmall>
  ),
);

export default ParagraphSmall;
