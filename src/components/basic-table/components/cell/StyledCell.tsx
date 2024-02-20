import { themedStyled } from '../../../../theme';
import { TABLE_ROW_HEIGHT } from '../../../../models';

export interface StyledCellBoxProps {
  $alignRight?: boolean;
  $zIndex?: number;
}

export const StyledCellBox = themedStyled<'div', StyledCellBoxProps>('div', ({ $alignRight, $zIndex }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  minHeight: TABLE_ROW_HEIGHT,
  alignItems: 'center',
  zIndex: $zIndex,
  justifyContent: $alignRight ? 'flex-end' : 'flex-start',
}));
