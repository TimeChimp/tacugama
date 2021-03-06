import React from 'react';
import { Breadcrumbs as BaseBreadcrumbs, BreadcrumbsProps as BaseBreadcrumbsProps } from 'baseui/breadcrumbs';
import { HeadingMedium } from '../typography';
import { themedStyled } from '../../theme';
import { useTheme } from '../../providers';

export interface BreadcrumbsProps extends BaseBreadcrumbsProps {}

const InlineBlock = themedStyled('div', () => ({
  display: 'inline-block',
}));

export const Breadcrumbs = ({ ...rest }: BreadcrumbsProps) => {
  const {
    theme: {
      current: {
        colors: { contentInverseTertiary },
      },
    },
  } = useTheme();
  return (
    <BaseBreadcrumbs
      overrides={{
        Separator: {
          component: () => (
            <InlineBlock>
              <HeadingMedium color={contentInverseTertiary}>/</HeadingMedium>
            </InlineBlock>
          ),
        },
      }}
      {...rest}
    />
  );
};
