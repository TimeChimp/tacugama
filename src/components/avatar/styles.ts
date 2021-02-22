import { themedStyled } from '../../theme';
import { margin } from '../../utils';

export const ButtonsContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  ...margin('0', '0', '0', `-${$theme.sizing.scale500}`),
  alignContent: 'space-between',
}));

export const ButtonContainer = themedStyled('div', ({ $theme }) => ({
  width: '100%',
  ...margin('0', '0', '0', `-${$theme.sizing.scale200}`),
}));

export const AvatarContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
}));
