import { themedStyled } from '../../../theme';
import { padding, borderLeft, borderRight } from '../../../utils';

export const StyledDateWrapper = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale200, $theme.sizing.scale300),
  ...borderLeft($theme.borders.border300),
  ...borderRight($theme.borders.border300),
}));
