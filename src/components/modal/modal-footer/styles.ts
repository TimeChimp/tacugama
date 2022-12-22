import { ModalFooter } from 'baseui/modal';
import { themedWithStyle } from '../../../theme';
import { margin, padding, borderTop } from '../../../utils';

export const StyledModalFooter = themedWithStyle(ModalFooter, ({ $theme }) => ({
  ...margin('0'),
  ...padding('11px', $theme.sizing.scale1200, '11px', $theme.sizing.scale1200), // NOTE: 11px doesn't exist in the theme
  ...borderTop({
    ...$theme.borders.border300,
    borderColor: $theme.customColors.light3,
  }),
}));