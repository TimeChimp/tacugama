import React, { ComponentProps, forwardRef } from 'react';
import { ParagraphSmall as BaseParagraphSmall } from 'baseui/typography';

type ParagraphProps = ComponentProps<typeof BaseParagraphSmall>;

export const ParagraphSmall = forwardRef<HTMLButtonElement, ParagraphProps>(
  ({ children, marginTop = '0', marginBottom = '0', ...rest }: ParagraphProps, ref) => (
    <BaseParagraphSmall ref={ref} marginTop={marginTop} marginBottom={marginBottom} {...rest}>
      {children}
    </BaseParagraphSmall>
  ),
);

export default ParagraphSmall;
