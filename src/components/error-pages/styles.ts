import { themedStyled } from '../../theme';

export const ErrorPageWrapper = themedStyled('div', () => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#E5E5E5', // NOTE: Value does not exist in theme
}));

export const ErrorPageContent = themedStyled('div', () => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}));

export const ErrorButtonsBox = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale300,
}));
