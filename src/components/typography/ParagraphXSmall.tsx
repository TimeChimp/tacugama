import React, { forwardRef } from 'react';
import { ParagraphXSmall as BaseParagraphXSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const ParagraphXSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseParagraphXSmall ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseParagraphXSmall>
  ),
);

export default ParagraphXSmall;
