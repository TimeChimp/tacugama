import React, { ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { padding, margin } from '../../utils';
import { themedStyled } from '../../theme';
import { StyledSideNavItemProps, StyledSideNavItemTitleProps, StyledSideNavProps } from './types';

export const StyledSideNav = themedStyled<'ul', StyledSideNavProps>('ul', ({ $theme, $isInsideModal }) => ({
  listStyleType: 'none',
  ...($isInsideModal
    ? {
        ...padding('0'),
      }
    : {
        ...padding($theme.sizing.scale700),
      }),
  ...margin('0'),
}));

export const StyledSideNavHeader = themedStyled('li', ({ $theme }) => ({
  ...padding($theme.sizing.scale400, '0'),
  textDecoration: 'none',
}));

export const StyledSideNavLink = themedStyled<any, StyledSideNavItemProps>(
  'li',
  ({ $theme, $active = false, $isRightAlign = false, $isClickable = true, $isDisabled = false }) => {
    const cursorType = $isDisabled ? 'help' : 'pointer';
    return {
      ...padding($theme.sizing.scale200, $theme.sizing.scale500),
      borderRadius: $theme.borders.radius200,
      display: 'flex',
      alignItems: 'center',
      cursor: $isClickable ? cursorType : 'no-drop',
      textDecoration: 'none',
      backgroundColor: $active ? $theme.colors.primary100 : 'transparent',
      flexFlow: $isRightAlign ? 'row-reverse' : 'row',
      gap: $theme.sizing.scale600,
    };
  },
);

export const StyledSideNavGroupLink = themedStyled<any, StyledSideNavItemProps>(
  'li',
  ({ $theme, $active = false }) => ({
    borderRadius: $theme.borders.radius200,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    backgroundColor: $active ? $theme.colors.primary100 : 'transparent',
    gap: $theme.sizing.scale600,
  }),
);

export const StyledSideNavItem = themedStyled<'div', StyledSideNavItemProps>(
  'div',
  ({ $theme, $active = false, $isRightAlign = false }) => ({
    ...padding($theme.sizing.scale400, $theme.sizing.scale500),
    width: '100%',
    borderRadius: $theme.borders.radius200,
    gap: $theme.sizing.scale600,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
    backgroundColor: $active ? $theme.colors.primary100 : 'transparent',
    flexFlow: $isRightAlign ? 'row-reverse' : 'row',
  }),
);

export const StyledSideNavItemIcon = themedStyled<'div', StyledSideNavItemProps>(
  'div',
  ({ $theme, $active = false }) => ({
    ...padding('0'),
    fill: $active ? $theme.colors.primary : $theme.colors.contentPrimary,
    display: 'flex',
    alignItems: 'center',
  }),
);

export const StyledSideNavItemTitleBox = themedStyled<'div', StyledSideNavItemTitleProps>('div', () => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledSideNavItemTitle = themedStyled<'div', StyledSideNavItemTitleProps>('div', () => ({
  flex: 1,
}));

export const StyledSideNavSubItemsList = themedStyled<'div', StyledSideNavItemTitleProps>('div', ({ $theme }) => ({
  ...padding('0', '0', '0', $theme.sizing.scale850),
}));

export interface BottomArrowWrapperProps {
  children: ReactNode;
  $isExpanded: boolean;
  onClick?: (e?: MouseEvent<HTMLDivElement>) => void;
}

const variants = {
  default: { transform: 'rotate(0deg)', cursor: 'pointer' },
  open: { transform: 'rotate(180deg)', cursor: 'pointer' },
};

export const BottomArrowWrapper = ({ children, $isExpanded, onClick }: BottomArrowWrapperProps) => (
  <motion.div
    variants={variants}
    animate={$isExpanded ? 'open' : 'default'}
    transition={{ duration: 0.2 }}
    onClick={onClick}
    initial={false}
  >
    {children}
  </motion.div>
);

export interface SideNavSubItemsListWrapperProps {
  children: ReactNode;
}

export const SideNavSubItemsListWrapper = ({ children }: SideNavSubItemsListWrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
    transition={{ duration: 0.2, bounce: 0 }}
  >
    {children}
  </motion.div>
);

export const TripleDotsMenu = themedStyled('div', ({ $theme }) => ({
  marginRight: $theme.sizing.scale800,
}));
