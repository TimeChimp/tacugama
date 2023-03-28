import { themedStyled } from '../../theme';
import { borderRadius } from '../../utils';

export interface DropdownButtonWrapperProps {
  $width?: string;
}

export const DropdownButtonWrapper = themedStyled<'div', DropdownButtonWrapperProps>('div', ({ $theme }) => ({
  height: $theme.sizing.scale1000,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  backgroundColor: $theme.colors.primaryB,
  cursor: 'pointer',
  paddingLeft: $theme.sizing.scale600,
  ...borderRadius($theme.borders.radius200),
}));
