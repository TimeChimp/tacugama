import React from 'react';
import { StyledTableHeadCellSortable } from 'baseui/table-semantic';
import { BasicTableHeadCellSortableProps } from './types';
import { StyledCellBox } from '../cell/StyledCell';

export const BasicTableHeadCellSortable = ({ children, alignEnd, otherProps }: BasicTableHeadCellSortableProps) => {
  return (
    <StyledTableHeadCellSortable {...otherProps}>
      <StyledCellBox $alignRight={alignEnd}>{children}</StyledCellBox>
    </StyledTableHeadCellSortable>
  );
};
