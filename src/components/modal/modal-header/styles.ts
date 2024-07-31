import { ModalHeader } from 'baseui/modal';
import { themedWithStyle } from '../../../theme';
import { borderBottom, margin, padding } from '../../../utils';

export const StyledModalHeader = themedWithStyle(ModalHeader, ({ $theme }) => ({
  ...margin('0'),
  ...padding($theme.sizing.scale550, $theme.sizing.scale2400, $theme.sizing.scale550, $theme.sizing.scale1200),
  ...borderBottom({
    ...$theme.borders.border300,
    borderColor: $theme.customColors.light3,
  }),
}));
