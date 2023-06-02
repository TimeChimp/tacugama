import { themedStyled } from '../../theme';
import { borderRadius, margin, padding, toRGBAColorString } from '../../utils';
export interface StyledSnackbarProps {
  $color?: string;
}

export const StyledSnackbar = themedStyled<'div', StyledSnackbarProps>('div', ({ $theme, $color }) => ({
  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: $color,
  ...borderRadius($theme.sizing.scale0),
  ...margin($theme.sizing.scale600, '0', '0', $theme.sizing.scale600),
  ...padding($theme.sizing.scale300, '0', $theme.sizing.scale300, $theme.sizing.scale300),
  width: $theme.customSizing.scale7525,
  boxShadow: $theme.lighting.shadow500,
}));

export const StyledSpan = themedStyled('span', ({ $theme }) => ({
  ...margin($theme.customSizing.scale050, '0', '0', '0'),
  display: 'flex',
  alignItems: 'flex-start',
}));

export const StyledDiv = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexGrow: 1,
  gap: $theme.sizing.scale400,
}));

export const StyledCloseWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: $theme.sizing.scale950,
  minHeight: $theme.sizing.scale700,
  position: 'relative',
  height: '100%',
}));

export const StyledCloseSeparator = themedStyled('div', ({ $theme }) => ({
  width: $theme.customSizing.scale050,
  backgroundColor: toRGBAColorString($theme.colors.primaryB, 0.12),
  height: '100%',
  display: 'block',
  position: 'absolute',
  left: '0',
  top: '0',
  ...borderRadius($theme.sizing.scale100),
}));
