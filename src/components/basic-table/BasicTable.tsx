import React from "react";
import { BasicTableProps, BasicTableRow } from "./types";
import { useTheme } from "../../providers";
import { padding } from "../../utils";
import {
  TableBuilder,
  TableBuilderColumn,
} from 'baseui/table-semantic';
import { renderCell } from "./Cell";

const TABLE_ROW_HEIGHT = '49px';

export const BasicTable = ({ columns, ...props }: BasicTableProps) => {
  const {
    theme: {
      current: {
        sizing: { scale600 },
        colors: { primaryB },
        customColors: { light7 },
        borders: { radius200 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();

  return (
    <TableBuilder
      overrides={{
        TableHeadCell: {
          style: {
            backgroundColor: light7,
            ...padding('0', scale600),
            ':first-child': {
              borderTopLeftRadius: radius200,
            },
            ':last-child': {
              borderTopRightRadius: radius200,
            },
            ...ParagraphSmall,
          },
        },
        TableHeadRow: {
          style: {
            height: '41px', // NOTE: Does not exist in theme
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
          style: {
            ...padding('0', scale600),
            height: TABLE_ROW_HEIGHT,
            verticalAlign: 'middle',
          },
        },
      }}
      {...props}
    >
      {columns.map((column) => (
        <TableBuilderColumn<BasicTableRow>
          key={column.field}
          header={column.label}
          overrides={{
            TableHeadCell: {
              style: {
                width: column.width ?? 'auto',
              },
            },
            TableBodyCell: {
              style: {
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
}