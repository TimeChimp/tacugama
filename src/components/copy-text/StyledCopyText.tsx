import { themedStyled } from '../../theme';

export const StyledCopyIcon = themedStyled('div', ({ $theme }) => ({
  padding: $theme.sizing.scale100,
  marginLeft: $theme.sizing.scale500,
  marginRight: $theme.sizing.scale100,
  display: 'flex',
  alignItems: 'center',
}));
