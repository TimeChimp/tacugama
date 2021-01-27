import { ParagraphMedium } from '../typography/ParagraphMedium';
import React, { useEffect } from 'react';
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
  activeItemId: string;
  onChange: (item: SideNavItem) => any;
}

export const SideNav = ({ items, activeItemId, onChange }: SideNavProps) => {
  const {
    theme: {
      current: {
        colors: { primary, primary200, contentSecondary },
      },
    },
  } = useTheme();

  const isActive = (item: SideNavItem) => {
    return item.id === activeItemId;
  };

  const getColor = (item: SideNavItem) => {
    return isActive(item) ? primary : contentSecondary;
  };

  const getBackgroundColor = (item: SideNavItem) => {
    return isActive(item) ? primary200 : 'transparent';
  };

  return (
    <StyledSideNav>
      {items.map((item) => (
        <StyledSideNavItem key={item.id}>
          <StyledSideNavLink onClick={() => onChange(item)} style={{ backgroundColor: getBackgroundColor(item) }}>
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
