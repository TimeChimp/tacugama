import { themedStyled } from "theme";
import { borderRadius } from "utils";

export interface DropdownButtonWrapperProps {
  $width?: string;
}

export const DropdownButtonWrapper = themedStyled<'div', DropdownButtonWrapperProps>('div', ({ $theme, $width }) => ({
  width: $width,
  height: '40px',
  display: 'flex',
  justifyContent: 'start',
  position: 'absolute',
  top: '99%',
  backgroundColor: $theme.colors.primaryB,
  paddingLeft: $theme.sizing.scale600,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 16px',
  ...borderRadius($theme.borders.radius200),
}));
