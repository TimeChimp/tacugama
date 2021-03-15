import { themedStyled } from '../../theme';
import { borderRadius, margin, padding } from '../../utils';

export interface StyledAlertProps {
  $color?: string;
}

export const StyledAlert = themedStyled<'div', StyledAlertProps>('div', ({ $theme, $color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: $color,
  ...borderRadius($theme.sizing.scale0),
  ...padding($theme.sizing.scale200, $theme.sizing.scale400),
  width: '100%',
  boxShadow: $theme.lighting.shadow500,
}));

export const StyledSpan = themedStyled('span', ({ $theme }) => ({
  ...margin('0', $theme.sizing.scale550, '0', '0'),
  display: 'flex',
  alignItems: 'flex-end',
}));

export const StyledDiv = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
});
