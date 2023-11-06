import React from 'react';
import { TableBuilder, StyledTableEmptyMessage } from 'baseui/table-semantic';
import { useTheme } from '../../../../providers';
import { border, padding, borderBottom, borderTop } from '../../../../utils';
import { TABLE_ROW_HEIGHT } from '../../../../models';
import { EmptyMessage } from '../empty-message';
import { BasicTableBuilderProps } from './types';
import { useBasicTableStyles } from '../../hooks';

export const BasicTableBuilder = ({ isSecondaryTable, children, emptyMessage, ...props }: BasicTableBuilderProps) => {
  const {
    theme: {
      current: {
        sizing: { scale1000, scale800 },
        colors: { primaryB },
        customColors: { light2, light6 },
        borders: { radius200, border100 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();

  const { tableBodyCellStyles, tableHeadCellStyles } = useBasicTableStyles();

  const getBorder = () => {
    if (isSecondaryTable) {
      return {
        ...borderBottom({ ...border100, borderColor: light6 }),
        ...borderTop({ ...border100, borderColor: light6 }),
      };
    }
    return border({ ...border100, borderColor: light2 });
  };

  const tableRootStyles = {
    ...(!isSecondaryTable ? { borderRadius: radius200 } : {}),
    ...getBorder(),
  };

  const tableEmptyMessageStyles = {
    height: TABLE_ROW_HEIGHT,
    ...ParagraphSmall,
    ...padding('0px', scale800, '0px', scale800),
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
          component: ({ children, $style }) => (
            <StyledTableEmptyMessage style={$style}>{children}</StyledTableEmptyMessage>
          ),
        },
      }}
      {...(emptyMessage ? { emptyMessage: <EmptyMessage message={emptyMessage} /> } : {})}
      {...props}
    >
      {children}
    </TableBuilder>
  );
};
