import { DropdownItem } from '../dropdown';
import { ComponentType } from 'react';

export interface IconProps {
  size?: string;
  color?: string;
  title?: string;
}

export interface SideNavItem {
  id: string;
  title: string;
  subtitle?: string;
  bottomSubtitle?: string;
  secondaryId?: string;
  isClickable?: boolean;
  isRightAlign?: boolean;
  color?: string;
  hide?: boolean;
  component?: () => JSX.Element;
  onClick?: () => void;
  icon?: ComponentType<IconProps>;
  subItems?: SideNavItem[];
  menuItems?: DropdownItem[];
  expanded?: boolean;
  setExpanded?: (expanded?: boolean) => void;
  hasError?: boolean;
  disabled?: boolean;
  disabledText?: string;
  disabledOnClick?: () => void;
}

export interface SideNavProps {
  items: SideNavItem[];
  activeItemId: string;
  activeSecondaryItemId?: string;
  header?: JSX.Element;
  isInsideModal?: boolean;
  handleNavigation: (nextTab: string) => void;
  handleSecondaryTabNavigation?: (tab: string, secondaryId: string) => void;
}

export interface StyledSideNavProps {
  $isInsideModal?: boolean;
}

export interface StyledSideNavItemProps {
  $active?: boolean;
  $isRightAlign?: boolean;
  $isClickable?: boolean;
  $isDisabled?: boolean;
}

export interface StyledSideNavItemTitleProps {
  $hasIcon?: boolean;
  $isRightAlign?: boolean;
}

export interface SideNavListItemProps {
  item: SideNavItem;
  activeItemId: string;
  activeSecondaryItemId?: string;
  handleNavigation: (tab: string) => void;
  handleSecondaryTabNavigation?: (tab: string, secondaryId: string) => void;
}

export interface SideNavLinkProps {
  id: string;
  isActive: boolean;
  handleNavigation: (tab: string) => void;
  icon?: ComponentType<IconProps>;
  title: string;
  color: string;
  secondaryId?: string;
  isRightAlign?: boolean;
  hasError?: boolean;
  isClickable?: boolean;
  disabled?: boolean;
  disabledText?: string;
  disabledOnClick?: () => void;
}

export interface SideNavItemProps {
  id: string;
  icon?: ComponentType<IconProps>;
  title: string;
  isRightAlign?: boolean;
  onClick: () => void;
  hasError?: boolean;
}

export interface SideNavItemWithSubItemsProps {
  icon?: ComponentType<IconProps>;
  title: string;
  color: string;
  isExpanded: boolean;
  onClick?: () => void;
  onToggleExpand: () => void;
  id: string;
  handleNavigation: (tab: string) => void;
  secondaryId?: string;
  isActive: boolean;
  isClickable?: boolean;
  menuItems?: DropdownItem[];
  hasError?: boolean;
}
