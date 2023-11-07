import React from 'react';
import { TableBuilderColumn } from 'baseui/table-semantic';
import { BasicTableProps, BasicTableRow, BasicTableColumnType } from './types';
import { renderCell, BasicTableBuilder, BasicTableHeadCell } from './components';
import { useBasicTableStyles } from './hooks';

export const EmbeddedTable = ({ columns, emptyMessage, ...props }: BasicTableProps) => {
  const { tableBodyCellStyles, tableHeadCellStyles, getSidePadding } = useBasicTableStyles();

  return (
    <>
      <BasicTableBuilder emptyMessage={emptyMessage} {...props} isEmbeddedTable>
        {columns.map((column, index) => (
          <TableBuilderColumn<BasicTableRow>
            key={column.field}
            header={column.label}
            overrides={{
              TableHeadCell: {
                style: {
                  ...tableHeadCellStyles,
                  ...getSidePadding(index, columns.length),
                  width: column.width ?? 'auto',
                },
                component: ({ $style, children }) => (
                  <BasicTableHeadCell style={$style} alignEnd={column?.type === BasicTableColumnType.Financial}>
                    {children}
                  </BasicTableHeadCell>
                ),
              },
              TableBodyCell: {
                style: {
                  ...tableBodyCellStyles,
                  ...getSidePadding(index, columns.length),
                  width: column.width ?? 'auto',
                },
              },
            }}
          >
            {(row) => renderCell(row, column)}
          </TableBuilderColumn>
        ))}
      </BasicTableBuilder>
    </>
  );
};
