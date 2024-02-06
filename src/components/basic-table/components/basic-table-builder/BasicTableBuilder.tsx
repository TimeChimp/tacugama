import React, { useMemo, useState } from 'react';
import { TableBuilder, StyledTableEmptyMessage } from 'baseui/table-semantic';
import { useTheme } from '../../../../providers';
import { border, padding, borderBottom, borderTop } from '../../../../utils';
import { TABLE_ROW_HEIGHT } from '../../../../models';
import { EmptyMessage } from '../empty-message';
import { BasicTableBuilderProps } from './types';
import { useBasicTableStyles } from '../../hooks';
import { BasicTableRow } from 'components/basic-table/types';

export const BasicTableBuilder = ({
  isEmbeddedTable,
  children,
  emptyMessage,
  data,
  ...props
}: BasicTableBuilderProps) => {
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

  const [sortColumn, setSortColumn] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const sortedData = useMemo(() => {
    return data?.slice()?.sort((a: BasicTableRow, b: BasicTableRow) => {
      const left = sortAsc ? a : b;
      const right = sortAsc ? b : a;
      const leftValue = String(left[sortColumn]);
      const rightValue = String(right[sortColumn]);

      return leftValue?.localeCompare(rightValue, 'en', {
        numeric: true,
        sensitivity: 'base',
      });
    });
  }, [sortColumn, sortAsc, data]);

  function handleSort(id: string) {
    if (id === sortColumn) {
      setSortAsc((asc) => !asc);
    } else {
      setSortColumn(id);
      setSortAsc(true);
    }
  }

  return (
    <TableBuilder
      data={sortedData}
      sortColumn={sortColumn}
      sortOrder={sortAsc ? 'ASC' : 'DESC'}
      onSort={handleSort}
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
