import { themedStyled } from '../../theme';
import { borderRadius } from '../../utils';

export interface DropdownButtonWrapperProps {
  $width?: string;
}

export const DropdownButtonWrapper = themedStyled<'div', DropdownButtonWrapperProps>('div', ({ $theme, $width }) => ({
  width: $width,
  height: $theme.sizing.scale1000,
  display: 'flex',
  justifyContent: 'start',
  position: 'absolute',
  top: '99%',
  backgroundColor: $theme.colors.primaryB,
  paddingLeft: $theme.sizing.scale600,
  boxShadow: `rgba(0, 0, 0, 0.16) 0px ${$theme.sizing.scale100} ${$theme.sizing.scale600}`,
  ...borderRadius($theme.borders.radius200),
}));
