import React from 'react';
import { BasicTableColumn, BasicTableColumnType, BasicTableRow } from './types';
import { ParagraphSmall } from '../typography';
import { FlexItem } from '../flex-item';

const CellWrapper = ({ children, alignEnd }: { children: React.ReactNode; alignEnd?: boolean }) => (
  <FlexItem height="100%" justifyContent={alignEnd ? 'flex-end' : 'flex-start'} alignItems="center">
    {children}
  </FlexItem>
);

export const renderCell = (row: BasicTableRow, column: BasicTableColumn) => {
  const { type, field } = column;
  const value = row[field];

  const map = {
    [BasicTableColumnType.Text]: () => (
      <CellWrapper alignEnd={column?.alignEnd}>
        <ParagraphSmall>{value}</ParagraphSmall>
      </CellWrapper>
    ),
    [BasicTableColumnType.Custom]: () => <CellWrapper alignEnd={column?.alignEnd}>{value}</CellWrapper>,
  };

  return map[type ?? BasicTableColumnType.Text]();
};
