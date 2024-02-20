import React from 'react';
import { BasicTableColumn, BasicTableColumnType, BasicTableRow } from '../../types';
import { ParagraphSmall } from '../../../typography';
import { Align } from '../../../input/types';
import { StyledCellBox } from './StyledCell';
import { Block } from '../../../block';

const CellWrapper = ({ children, alignRight }: { children: React.ReactElement; alignRight?: boolean }) => (
  <Block height="100%">
    <StyledCellBox $alignRight={alignRight}>{children}</StyledCellBox>
  </Block>
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
    [BasicTableColumnType.Custom]: () => (
      <CellWrapper>
        <>{value}</>
      </CellWrapper>
    ),
    [BasicTableColumnType.Action]: () => (
      <CellWrapper alignRight>
        <>{value}</>
      </CellWrapper>
    ),
    [BasicTableColumnType.Financial]: () => (
      <CellWrapper alignRight>
        <>
          {value && typeof value !== 'string' && typeof value !== 'number' ? (
            React.cloneElement(value, {
              align: Align.right,
            })
          ) : (
            <ParagraphSmall>{value}</ParagraphSmall>
          )}
        </>
      </CellWrapper>
    ),
  };

  return map[type ?? BasicTableColumnType.Text]();
};
