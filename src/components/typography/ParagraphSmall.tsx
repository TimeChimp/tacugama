import React, { forwardRef } from 'react';
import { ParagraphSmall as BaseParagraphSmall } from 'baseui/typography';
import { BlockProps } from 'baseui/block';

export const ParagraphSmall = forwardRef<HTMLButtonElement, BlockProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: BlockProps, ref) => (
    <BaseParagraphSmall ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseParagraphSmall>
  ),
);

export default ParagraphSmall;
