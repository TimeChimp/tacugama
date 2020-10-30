import { themedStyled } from '../../theme';
import { borderRadius, margin } from '../../utils';

export interface StyledSnackbarProps {
  $color?: string;
}

export const StyledSnackbar = themedStyled<'div', StyledSnackbarProps>('div', ({ $theme, $color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: $color,
  ...borderRadius($theme.sizing.scale0),
  ...margin($theme.sizing.scale600, '0', '0', $theme.sizing.scale600),
  height: '44px', // NOTE: Value does not exist in theme
  width: '301px', // NOTE: Value does not exist in theme
  boxShadow: $theme.lighting.shadow500,
}));

export const StyledSpan = themedStyled('span', ({ $theme }) => ({
  ...margin('0', $theme.sizing.scale550, '0', $theme.sizing.scale550),
  display: 'flex',
  alignItems: 'flex-inline',
}));

export const StyledDiv = themedStyled('div', {
  display: 'flex',
  alignItems: 'flex-inline',
});
