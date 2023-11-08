import { themedStyled } from '../../theme';
import { padding, borderBottom } from '../../utils';

export const StyledWidgetBox = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale0, $theme.sizing.scale800),
  ...borderBottom({ ...$theme.borders.border100, borderColor: $theme.customColors.light6 }),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
