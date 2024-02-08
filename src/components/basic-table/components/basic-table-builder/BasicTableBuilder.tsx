import React, { useMemo, useState } from 'react';
import { TableBuilder, StyledTableEmptyMessage } from 'baseui/table-semantic';
import { useTheme } from '../../../../providers';
import { border, padding, borderBottom, borderTop } from '../../../../utils';
import { TABLE_ROW_HEIGHT } from '../../../../models';
import { EmptyMessage } from '../empty-message';
import { BasicTableBuilderProps, SortOrder, SortOrderType } from './types';
import { useBasicTableStyles } from '../../hooks';
import { BasicTableRow } from 'components/basic-table/types';
import { CaretDownIcon, CaretUpIcon } from '../../../icons';
import { Block } from 'baseui/block';

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
        customColors: { light2, light6, dark1 },
        borders: { radius200, border100 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();

  const { tableBodyCellStyles, tableHeadCellStyles, sortIconContainer } = useBasicTableStyles();

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
  const [sortOrder, setSortOrder] = useState<SortOrderType>(null);

  const sortedData = useMemo(() => {
    if (!sortColumn || !sortOrder) {
      return data;
    }

    return [...data].sort((a: BasicTableRow, b: BasicTableRow) => {
      const leftValue = String(a[sortColumn]);
      const rightValue = String(b[sortColumn]);

      return sortOrder === SortOrder.ASC
        ? leftValue.localeCompare(rightValue, 'en', { numeric: true, sensitivity: 'base' })
        : rightValue.localeCompare(leftValue, 'en', { numeric: true, sensitivity: 'base' });
    });
  }, [sortColumn, sortOrder, data]);

  const handleSort = (id: string) => {
    if (id === sortColumn && sortOrder === SortOrder.DESC) {
      setSortOrder(null);
    } else if (id === sortColumn && sortOrder === SortOrder.ASC) {
      setSortOrder(SortOrder.DESC);
    } else {
      setSortColumn(id);
      setSortOrder(SortOrder.ASC);
    }
  };

  return (
    <TableBuilder
      data={sortedData}
      sortColumn={sortColumn}
      sortOrder={sortOrder}
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
        SortIconContainer: {
          component: ({ children }) => {
            return children;
          },
        },
        SortAscIcon: {
          component: () => (
            <Block style={sortIconContainer}>
              <CaretUpIcon color={dark1} />
            </Block>
          ),
        },
        SortDescIcon: {
          component: () => (
            <Block style={sortIconContainer}>
              <CaretDownIcon color={dark1} />
            </Block>
          ),
        },
        SortNoneIcon: {
          component: () => null,
        },
      }}
      {...(emptyMessage ? { emptyMessage: <EmptyMessage message={emptyMessage} /> } : {})}
      {...props}
    >
      {children}
    </TableBuilder>
  );
};
