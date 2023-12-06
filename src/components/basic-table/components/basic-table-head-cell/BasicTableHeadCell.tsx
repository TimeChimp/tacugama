import React from 'react';
import { StyledTableHeadCell } from 'baseui/table-semantic';
import { BasicTableHeadCellProps } from './types';
import { StyledCellBox } from '../cell/StyledCell';

export const BasicTableHeadCell = ({ style, children, alignEnd }: BasicTableHeadCellProps) => {
  return (
    <StyledTableHeadCell style={style}>
      <StyledCellBox $alignRight={alignEnd}>{children}</StyledCellBox>
    </StyledTableHeadCell>
  );
};
