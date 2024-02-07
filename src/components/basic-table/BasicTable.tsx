import React from 'react';
import { TableBuilderColumn } from 'baseui/table-semantic';
import { BasicTableProps, BasicTableRow, BasicTableColumnType } from './types';
import { renderCell, BasicTableBuilder, BasicTableHeadCell, BasicTableHeadCellSortable } from './components';
import { useBasicTableStyles } from './hooks';
import { padding } from '../../utils';
import { useTheme } from '../../providers';

export const BasicTable = ({ columns, emptyMessage, ...props }: BasicTableProps) => {
  const { tableBodyCellStyles, tableHeadCellStyles, getSidePadding } = useBasicTableStyles();
  const {
    theme: {
      current: {
        sizing: { scale600 },
        customSizing: { scale050 },
      },
    },
  } = useTheme();

  return (
    <BasicTableBuilder emptyMessage={emptyMessage} {...props}>
      {columns.map((column, index) => (
        <TableBuilderColumn<BasicTableRow>
          key={column?.field}
          id={column?.field}
          header={column?.label}
          sortable={column?.sortable}
          overrides={{
            TableHeadCell: {
              style: {
                ...tableHeadCellStyles,
                ...padding(scale050, scale600),
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
  );
};
