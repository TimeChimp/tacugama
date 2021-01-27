import { ParagraphMedium } from '../typography/ParagraphMedium';
import React, { useState } from 'react';
import { useTheme } from '../../providers';
import {
  StyledSideNav,
  StyledSideNavItem,
  StyledSideNavLink,
  StyledSideNavItemIcon,
  StyledSideNavItemTitle,
} from './StyledSideNav';

export interface SideNavItem {
  id: string;
  title: string;
  icon?: JSX.Element;
  subItems?: SideNavItem[];
}
export interface SideNavProps {
  items: SideNavItem[];
}

export const SideNav = ({ items }: SideNavProps) => {
  const [activeitemId, setActiveItemId] = useState<string>();
  const {
    theme: {
      current: {
        colors: { primary, primary200, contentSecondary },
      },
    },
  } = useTheme();

  const isActive = (item: SideNavItem) => {
    return item.id === activeitemId;
  };

  const getColor = (item: SideNavItem) => {
    return isActive(item) ? primary : contentSecondary;
  };

  const getBackgroundColor = (item: SideNavItem) => {
    return isActive(item) ? primary200 : 'transparent';
  };

  const handleOnClick = (item: SideNavItem) => {
    setActiveItemId(item.id);
  };

  return (
    <StyledSideNav>
      {items.map((item) => (
        <StyledSideNavItem>
          <StyledSideNavLink onClick={() => handleOnClick(item)} style={{ backgroundColor: getBackgroundColor(item) }}>
            <StyledSideNavItemIcon>{item.icon}</StyledSideNavItemIcon>
            <StyledSideNavItemTitle>
              <ParagraphMedium color={getColor(item)}>{item.title}</ParagraphMedium>
            </StyledSideNavItemTitle>
          </StyledSideNavLink>
        </StyledSideNavItem>
      ))}
    </StyledSideNav>
  );
};
