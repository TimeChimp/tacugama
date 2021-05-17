import { themedStyled } from '../../theme';

export const StyledCopyIcon = themedStyled('div', ({ $theme }) => ({
  padding: $theme.sizing.scale100,
  marginLeft: $theme.sizing.scale700,
  marginRight: $theme.sizing.scale100,
  display: 'flex',
  alignItems: 'center',
}));
