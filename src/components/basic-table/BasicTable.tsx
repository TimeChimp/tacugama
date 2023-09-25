import React from 'react';
import { BasicTableProps, BasicTableRow } from './types';
import { useTheme } from '../../providers';
import { padding, border } from '../../utils';
import { TableBuilder, TableBuilderColumn } from 'baseui/table-semantic';
import { renderCell } from './Cell';
import { EmptyMessage } from './EmptyMessage';
import { TABLE_ROW_HEIGHT } from '../../models';

export const BasicTable = ({ columns, emptyMessage, ...props }: BasicTableProps) => {
  const {
    theme: {
      current: {
        sizing: { scale600, scale1000 },
        colors: { primaryB },
        customColors: { light7, light2, light6 },
        borders: { radius200, border100 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();

  const tableRootStyles = {
    borderRadius: radius200,
    ...border({ ...border100, borderColor: light2 }),
  };

  const tableHeadCellStyles = {
    backgroundColor: light7,
    ...padding('0', scale600),
    ':first-child': {
      borderTopLeftRadius: radius200,
    },
    ':last-child': {
      borderTopRightRadius: radius200,
    },
    ...ParagraphSmall,
  };

  const tableBodyCellStyles = {
    ...padding('0', scale600),
    height: TABLE_ROW_HEIGHT,
    verticalAlign: 'middle',
    borderBottomColor: light6,
  };

  const tableEmptyMessageStyles = {
    height: TABLE_ROW_HEIGHT,
    ...ParagraphSmall,
    ...padding('0px', scale600, '0px', scale600),
  };

  return (
    <TableBuilder
      overrides={{
        Root: {
          style: tableRootStyles,
        },
        TableHeadCell: {
          style: tableHeadCellStyles,
        },
        TableHeadRow: {
          style: {
            height: scale1000,
          },
        },
        TableBodyRow: {
          style: {
            height: TABLE_ROW_HEIGHT,
            ':hover': {
              backgroundColor: primaryB,
            },
          },
        },
        TableBodyCell: {
          style: tableBodyCellStyles,
        },
        TableEmptyMessage: {
          style: tableEmptyMessageStyles,
        },
      }}
      {...(emptyMessage ? { emptyMessage: <EmptyMessage message={emptyMessage} /> } : {})}
      {...props}
    >
      {columns.map((column) => (
        <TableBuilderColumn<BasicTableRow>
          key={column.field}
          header={column.label}
          overrides={{
            TableHeadCell: {
              style: {
                ...tableHeadCellStyles,
                width: column.width ?? 'auto',
              },
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
    </TableBuilder>
  );
};
