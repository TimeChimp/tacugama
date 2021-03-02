import { themedStyled } from '../../theme';
import { border } from '../../utils';

export const Seperator = themedStyled('hr', ({ $theme }) => ({
  backgroundColor: $theme.customColors.light2,
  ...border(),
  height: '1px',
}));
