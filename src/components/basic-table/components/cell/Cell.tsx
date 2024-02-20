import React from 'react';
import { BasicTableColumn, BasicTableColumnType, BasicTableRow } from '../../types';
import { ParagraphSmall } from '../../../typography';
import { Align } from '../../../input/types';
import { StyledCellBox } from './StyledCell';
import { Block } from '../../../block';
import { HIGH_Z_INDEX } from '../../../../models';

const CellWrapper = ({
  children,
  alignRight,
  zIndex,
}: {
  children: React.ReactElement;
  alignRight?: boolean;
  zIndex?: number;
}) => (
  <Block height="100%">
    <StyledCellBox $alignRight={alignRight} $zIndex={zIndex}>
      {children}
    </StyledCellBox>
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
      <CellWrapper alignRight zIndex={HIGH_Z_INDEX}>
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
