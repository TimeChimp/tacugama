import { StyledDropdownListItem } from 'baseui/select';
import { themedWithStyle } from '../../theme';
import { padding } from '../../utils';

export const ListItem = themedWithStyle(StyledDropdownListItem, {
  ...padding('0'),
  display: 'flex',
  alignItems: 'center',
});
