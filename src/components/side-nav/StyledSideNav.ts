import { padding } from './../../utils';
import { themedStyled } from '../../theme';

export const StyledSideNav = themedStyled('ul', () => ({
  listStyleType: 'none',
}));

export const StyledSideNavItem = themedStyled('li', () => ({}));

export const StyledSideNavLink = themedStyled('a', ({ $theme }) => ({
  ...padding($theme.sizing.scale400, $theme.sizing.scale400),
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const StyledSideNavItemIcon = themedStyled('div', ({ $theme }) => ({
  ...padding('0', '0', '0', $theme.sizing.scale600),
}));

export const StyledSideNavItemTitle = themedStyled('div', ({ $theme }) => ({
  ...padding('0', '0', '0', $theme.sizing.scale600),
}));
