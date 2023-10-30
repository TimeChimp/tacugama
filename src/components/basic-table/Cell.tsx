import React from 'react';
import { BasicTableColumn, BasicTableColumnType, BasicTableRow } from './types';
import { ParagraphSmall } from '../typography';
import { FlexItem } from '../flex-item';
import { Align } from '../input/types';

const CellWrapper = ({ children, alignRight }: { children: React.ReactElement; alignRight?: boolean }) => (
  <FlexItem height="100%" justifyContent={alignRight ? 'flex-end' : 'flex-start'} alignItems="center">
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
    [BasicTableColumnType.Financial]: () => (
      <CellWrapper alignRight>
        <>
          {typeof value !== 'string'
            ? React.cloneElement(value, {
                align: Align.right,
              })
            : value}
        </>
      </CellWrapper>
    ),
  };

  return map[type ?? BasicTableColumnType.Text]();
};
