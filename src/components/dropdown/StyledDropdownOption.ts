import { themedStyled } from '../../theme';
import { margin, padding } from '../../utils';
import { borderBottom } from '../../utils/css';

export const StyledDropdownOption = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ...padding($theme.sizing.scale400, $theme.sizing.scale600),
  minWidth: $theme.sizing.scale3200,
  cursor: 'pointer',
  ':hover': {
    background: $theme.colors.menuFillHover,
  },
}));

export const StyledDropdownOptionIcon = themedStyled('div', ({ $theme }) => ({
  ...margin('0', $theme.sizing.scale500, '0', '0'),
  display: 'flex',
  alignItems: 'center',
}));

export const StyledDropdownSearch = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale600),
  backgroundColor: $theme.colors.primaryB,
  ...borderBottom($theme.borders.border300)
}));

export const StyledDropdownOptionIconEnd = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
});

export const StyledDropdownOptionLabel = themedStyled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
