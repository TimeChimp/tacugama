import { themedStyled } from '../../theme';
import { border, margin } from '../../utils';

export interface StyledSeparatorProps {
  $noMargin?: boolean;
  $margin?: string;
}

export const Seperator = themedStyled<'hr', StyledSeparatorProps>('hr', ({ $theme, $noMargin, $margin }) => ({
  backgroundColor: $theme.customColors.light2,
  ...border(),
  height: '1px',
  ...(!!$noMargin ? margin('0') : margin($margin || $theme.sizing.scale300, '0')),
}));
