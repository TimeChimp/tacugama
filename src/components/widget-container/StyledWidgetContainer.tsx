import { themedStyled } from '../../theme';
import { padding } from '../../utils';

export const StyledWidgetBox = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale300, $theme.sizing.scale800),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: $theme.customSizing.scale1050,
}));
