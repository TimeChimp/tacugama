import { ModalBody } from 'baseui/modal';
import { themedWithStyle } from '../../../theme';
import { margin, padding } from '../../../utils';

export const StyledModalBody = themedWithStyle(ModalBody, ({ $theme }) => ({
  ...margin('0'),
  overflow: 'auto',
  maxHeight: 'calc(100vh - 200px)',
  ...padding($theme.sizing.scale800, $theme.sizing.scale1200),
}));
