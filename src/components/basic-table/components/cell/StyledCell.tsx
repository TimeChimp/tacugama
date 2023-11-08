import { themedStyled } from '../../../../theme';
import { TABLE_ROW_HEIGHT } from 'models';

export interface StyledCellBoxProps {
  $alignRight?: boolean;
}

export const StyledCellBox = themedStyled<'div', StyledCellBoxProps>('div', ({ $alignRight }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: TABLE_ROW_HEIGHT,
  alignItems: 'center',
  justifyContent: $alignRight ? 'flex-end' : 'flex-start',
}));
