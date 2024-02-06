import React from 'react';
import { TableBuilderColumn } from 'baseui/table-semantic';
import { BasicTableProps, BasicTableRow, BasicTableColumnType } from './types';
import { renderCell, BasicTableBuilder, BasicTableHeadCell, BasicTableHeadCellSortable } from './components';
import { useBasicTableStyles } from './hooks';

export const EmbeddedTable = ({ columns, emptyMessage, sortableColumns, ...props }: BasicTableProps) => {
  const { tableBodyCellStyles, tableHeadCellStyles, getSidePadding } = useBasicTableStyles();

  return (
    <>
      <BasicTableBuilder emptyMessage={emptyMessage} {...props} isEmbeddedTable>
        {columns.map((column, index) => (
          <TableBuilderColumn<BasicTableRow>
            key={column?.field}
            id={column?.field}
            header={column?.label}
            sortable={column?.sortable ?? sortableColumns}
            overrides={{
              TableHeadCell: {
                style: {
                  ...tableHeadCellStyles,
                  ...getSidePadding(index, columns.length),
                  width: column?.width ?? 'auto',
                },
                component: ({ $style, children }) => (
                  <BasicTableHeadCell style={$style} alignEnd={column?.type === BasicTableColumnType.Financial}>
                    {children}
                  </BasicTableHeadCell>
                ),
              },
              TableHeadCellSortable: {
                style: {
                  ...tableHeadCellStyles,
                  ...getSidePadding(index, columns.length),
                  width: column?.width ?? 'auto',
                },
                component: ({ children, ...props }) => (
                  <BasicTableHeadCellSortable
                    alignEnd={column?.type === BasicTableColumnType.Financial}
                    otherProps={props}
                  >
                    {children}
                  </BasicTableHeadCellSortable>
                ),
              },
              TableBodyCell: {
                style: {
                  ...tableBodyCellStyles,
                  ...getSidePadding(index, columns.length),
                  width: column?.width ?? 'auto',
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
