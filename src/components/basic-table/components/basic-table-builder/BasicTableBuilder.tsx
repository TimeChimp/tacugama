import React from 'react';
import { TableBuilder, StyledTableEmptyMessage } from 'baseui/table-semantic';
import { useTheme } from '../../../../providers';
import { border, padding, borderBottom, borderTop } from '../../../../utils';
import { TABLE_ROW_HEIGHT } from '../../../../models';
import { EmptyMessage } from '../empty-message';
import { BasicTableBuilderProps } from './types';
import { useBasicTableStyles } from '../../hooks';

export const BasicTableBuilder = ({ isEmbeddedTable, children, emptyMessage, ...props }: BasicTableBuilderProps) => {
  const {
    theme: {
      current: {
        sizing: { scale800 },
        colors: { primaryB },
        customColors: { light2, light6 },
        borders: { radius200, border100 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();

  const { tableBodyCellStyles, tableHeadCellStyles } = useBasicTableStyles();

  const getBorder = () => {
    if (isEmbeddedTable) {
      return {
        ...borderBottom({ ...border100, borderColor: light6 }),
        ...borderTop({ ...border100, borderColor: light6 }),
      };
    }
    return border({ ...border100, borderColor: light2 });
  };

  const tableRootStyles = {
    ...(!isEmbeddedTable ? { borderRadius: radius200 } : {}),
    ...getBorder(),
  };

  const tableEmptyMessageStyles = {
    height: TABLE_ROW_HEIGHT,
    ...ParagraphSmall,
    ...padding('0', scale800),
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
        TableBodyRow: {
          style: {
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
