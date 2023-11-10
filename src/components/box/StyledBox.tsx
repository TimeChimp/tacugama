import { themedStyled } from '../../theme';
import { margin } from '../../utils';

export const StyledBoxHeader = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale800),
}));

export const StyledBoxBody = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale800),
}));

export const StyledBoxFooter = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale800),
  textAlign: 'right',
  display: 'flex',
  justifyContent: 'flex-end',
  gap: $theme.sizing.scale300,
}));
