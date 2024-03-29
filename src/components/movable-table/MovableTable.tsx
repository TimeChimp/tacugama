import * as React from 'react';
import { List, arrayMove } from 'react-movable';
import { BasicTableColumnType, BasicTableRow } from '../basic-table';
import { MovableTableProps } from './types';
import { renderCell } from '../basic-table/components';
import {
  StyledTable,
  StyledTableBodyCell,
  StyledTableBodyRow,
  StyledTableHeadCell,
  StyledTableWrapper,
} from './StyledTable';
import { useBasicTableStyles } from '../basic-table/hooks';

export const MovableTable = ({ columns, data, setData, entityRows }: MovableTableProps) => {
  const { tableBodyCellStyles, tableHeadCellStyles, getSidePadding } = useBasicTableStyles();
  const [widths, setWidths] = React.useState<string[]>([]);

  const onChange = (oldIndex: number, newIndex: number) => {
    const newData = arrayMove(entityRows, oldIndex, newIndex);
    if (setData) {
      setData(newData);
    }
  };

  return (
    <StyledTableWrapper>
      <List
        beforeDrag={({ elements, index }) => {
          const cells = Array.from(elements[index].children);
          const widths = cells.map((cell) => window.getComputedStyle(cell).width);
          setWidths(widths);
        }}
        lockVertically
        transitionDuration={0}
        values={data}
        onChange={({ oldIndex, newIndex }) => onChange(oldIndex, newIndex)}
        renderList={({ children, props, isDragged }) => (
          <StyledTable $isDragged={isDragged}>
            <thead>
              <tr>
                {columns.map((column, index) => {
                  const sidePadding = getSidePadding(index, columns?.length);
                  return (
                    <StyledTableHeadCell
                      key={`th-${index}`}
                      $width={column.width ?? 'auto'}
                      $textAlign={column?.type === BasicTableColumnType.Financial ? 'right' : 'left'}
                      $tableHeadCellStyles={tableHeadCellStyles}
                      $sidePadding={sidePadding}
                    >
                      {column.label}
                    </StyledTableHeadCell>
                  );
                })}
              </tr>
            </thead>
            <tbody {...props}>{children}</tbody>
          </StyledTable>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => {
          const _widths = isDragged ? widths : [];
          const row = (
            <StyledTableBodyRow {...props} $isDragged={isDragged} $isSelected={isSelected}>
              {columns.map((column, index) => {
                const sidePadding = getSidePadding(index, columns?.length);

                return (
                  <StyledTableBodyCell
                    key={`td-${index}`}
                    $width={column.width ?? _widths[index]}
                    $tableBodyCellStyles={tableBodyCellStyles}
                    $sidePadding={sidePadding}
                  >
                    {renderCell(value as unknown as BasicTableRow, column)}
                  </StyledTableBodyCell>
                );
              })}
            </StyledTableBodyRow>
          );

          return row;
        }}
      />
    </StyledTableWrapper>
  );
};
