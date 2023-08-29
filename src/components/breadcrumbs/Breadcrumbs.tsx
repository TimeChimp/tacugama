import React from 'react';
import { Breadcrumbs as BaseBreadcrumbs, BreadcrumbsProps as BaseBreadcrumbsProps } from 'baseui/breadcrumbs';
import { themedStyled } from '../../theme';
import { ParagraphXSmall } from '../typography';
import { useTheme } from '../../providers';

export type BreadcrumbsProps = BaseBreadcrumbsProps;

export const StyledBreadcrumbItem = themedStyled('li', ({ $theme }) => ({
  display: 'inline-block',
  color: $theme.customColors.dark3,
  textDecoration: 'underline',
  fontSize: $theme.typography.ParagraphSmall.fontSize,
}));

const InlineBlock = themedStyled('div', () => ({
  display: 'inline-block',
}));

export const Breadcrumbs = ({ ...rest }: BreadcrumbsProps) => {
  const {
    theme: {
      current: {
        customColors: { dark3 },
        sizing: { scale300 },
      },
    },
  } = useTheme();

  return (
    <BaseBreadcrumbs
      overrides={{
        Separator: {
          component: () => (
            <InlineBlock>
              <ParagraphXSmall color={dark3} paddingLeft={scale300} paddingRight={scale300}>
                &gt;
              </ParagraphXSmall>
            </InlineBlock>
          ),
        },
      }}
      {...rest}
    />
  );
};
