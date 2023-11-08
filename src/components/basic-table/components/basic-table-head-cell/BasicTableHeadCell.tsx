import React from 'react';
import { StyledTableHeadCell } from 'baseui/table-semantic';
import { FlexItem } from '../../../flex-item';
import { BasicTableHeadCellProps } from './types';

export const BasicTableHeadCell = ({ style, children, alignEnd }: BasicTableHeadCellProps) => {
  return (
    <StyledTableHeadCell style={style}>
      <FlexItem justifyContent={alignEnd ? 'flex-end' : 'flex-start'}>{children}</FlexItem>
    </StyledTableHeadCell>
  );
};
