import { themedStyled } from '../../theme';
import { border, margin } from '../../utils';

export interface StyledSeparatorProps {
  $noMargin?: boolean;
}

export const Seperator = themedStyled<'hr', StyledSeparatorProps>('hr', ({ $theme, $noMargin }) => ({
  backgroundColor: $theme.customColors.light3,
  ...border(),
  height: '1px',
  ...(!!$noMargin ? margin('0') : margin($theme.sizing.scale300, '0')),
}));
