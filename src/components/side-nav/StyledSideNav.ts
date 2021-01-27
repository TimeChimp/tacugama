import { padding } from './../../utils/css';
import { themedStyled } from '../../theme/theme';

export const StyledSideNav = themedStyled('ul', ({ $theme }) => ({
  listStyleType: 'none',
}));

export const StyledSideNavItem = themedStyled('li', ({ $theme }) => ({}));

export const StyledSideNavLink = themedStyled('a', ({ $theme }) => ({
  ...padding($theme.sizing.scale400, $theme.sizing.scale400),
  display: 'flex',
  cursor: 'pointer',
}));

export const StyledSideNavItemIcon = themedStyled('div', ({ $theme }) => ({
  ...padding('0', '0', '0', $theme.sizing.scale300),
}));

export const StyledSideNavItemTitle = themedStyled('div', ({ $theme }) => ({
  ...padding('0', '0', '0', $theme.sizing.scale300),
}));
