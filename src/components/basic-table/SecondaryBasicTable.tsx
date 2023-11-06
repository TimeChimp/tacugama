import React from 'react';
import { BasicTableProps, BasicTableRow, BasicTableColumnType } from './types';
import { TableBuilderColumn } from 'baseui/table-semantic';
import { renderCell, BasicTableBuilder, BasicTableHeadCell } from './components';
import { useBasicTableStyles } from './hooks';

export const SecondaryBasicTable = ({ columns, emptyMessage, ...props }: BasicTableProps) => {
  const { tableBodyCellStyles, tableHeadCellStyles } = useBasicTableStyles();

  return (
    <>
      <BasicTableBuilder emptyMessage={emptyMessage} {...props} isSecondaryTable>
        {columns.map((column) => (
          <TableBuilderColumn<BasicTableRow>
            key={column.field}
            header={column.label}
            overrides={{
              TableHeadCell: {
                style: {
                  ...{ ...tableHeadCellStyles },
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
