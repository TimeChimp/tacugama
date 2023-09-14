import { themedStyled } from '../../theme';

export const FormGroupStack = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.sizing.scale500,
}));

export const FormGroupTitleStack = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: $theme.sizing.scale300,
}));
