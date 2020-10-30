import React, { forwardRef } from 'react';
import { ParagraphXSmall as BaseParagraphXSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const ParagraphXSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, margin = '0', ...rest }: BlockProps, ref) => (
    <BaseParagraphXSmall ref={ref} margin={margin} {...rest}>
      {children}
    </BaseParagraphXSmall>
  ),
);

export default ParagraphXSmall;
