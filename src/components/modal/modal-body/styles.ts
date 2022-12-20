import { ModalBody } from 'baseui/modal';
import { themedStyled } from '../../../theme';
import { margin, padding } from '../../../utils';

export const StyledModalBody = themedStyled(ModalBody, ({ $theme }) => ({
  ...margin('0'),
  overflow: 'auto',
  maxHeight: 'calc(100vh - 200px)',
  ...padding($theme.sizing.scale800, $theme.sizing.scale1200, $theme.sizing.scale900, $theme.sizing.scale1200),
}));
