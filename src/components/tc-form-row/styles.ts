import { themedStyled } from '../../theme';

export const TcFormRowWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'start',
  justifyContent: 'flex-start',
  gap: $theme.sizing.scale300,
}));
