import React, { FunctionComponent, ReactNode } from 'react';
import {
  StyledPageLayout,
  StyledPageLayoutHeader,
  StyledPageLayoutMain,
  StyledPageTitleContainer,
  StyledPageMenuContainer,
} from './StyledPageLayout';
import { HeadingSmall } from '../typography';

export interface PageLayoutProps {
  pageTitle?: JSX.Element | string;
  pageMenu?: JSX.Element;
  children: ReactNode;
}

export const PageLayout: FunctionComponent<PageLayoutProps> = ({
  pageTitle: PageTitle,
  pageMenu: PageMenu,
  children,
}: PageLayoutProps) => (
  <StyledPageLayout>
    {PageTitle && (
      <StyledPageLayoutHeader>
        <StyledPageTitleContainer>
          {typeof PageTitle === 'string' ? <HeadingSmall>{PageTitle}</HeadingSmall> : PageTitle}
        </StyledPageTitleContainer>
        <StyledPageMenuContainer>{PageMenu}</StyledPageMenuContainer>
      </StyledPageLayoutHeader>
    )}
    <StyledPageLayoutMain role="main">{children}</StyledPageLayoutMain>
  </StyledPageLayout>
);

export default PageLayout;
