import React from 'react';
import { BasicTableColumn, BasicTableColumnType, BasicTableRow } from './types';
import { ParagraphSmall } from '../typography';
import { FlexItem } from '../flex-item';

const CellWrapper = ({ children }: { children: React.ReactNode }) => (
  <FlexItem height="100%" justifyContent="flex-start" alignItems="center">
    {children}
  </FlexItem>
);

export const renderCell = (row: BasicTableRow, column: BasicTableColumn) => {
  const { type, field } = column;
  const value = row[field];

  const map = {
    [BasicTableColumnType.Text]: () => (
      <CellWrapper>
        <ParagraphSmall>{value}</ParagraphSmall>
      </CellWrapper>
    ),
    [BasicTableColumnType.Custom]: () => <CellWrapper>{value}</CellWrapper>,
  };

  return map[type ?? BasicTableColumnType.Text]();
};
