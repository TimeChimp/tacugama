import { useTheme } from '../../providers';
import * as React from 'react';
import { List, arrayMove } from 'react-movable';
import { BasicTableColumnType, BasicTableRow } from '../basic-table';
import { useBasicTableStyles } from '../basic-table/hooks';
import { borderBottom, borderTop } from '../../utils';
import { MovableTableProps } from './types';
import { renderCell } from '../basic-table/components';

const MIN_TABLE_WIDTH = 1100;

export const MovableTable = ({ columns, data, setData, entityRows }: MovableTableProps) => {
  const [widths, setWidths] = React.useState<string[]>([]);

  const {
    theme: {
      current: {
        colors: { primaryB },
        customColors: { light4, light6 },
        borders: { border300 },
      },
    },
  } = useTheme();

  const {
    tableBodyCellStyles: BasicTableBodyCellStyles,
    tableHeadCellStyles: BasicTableHeadCellStyles,
    getSidePadding,
  } = useBasicTableStyles();

  const tableHeadCellStyles = {
    ...borderBottom(border300),
    ...BasicTableHeadCellStyles,
  };

  const tableBodyCellStyles = {
    ...borderBottom(border300),
    ...BasicTableBodyCellStyles,
  };

  const tableStyles = {
    borderSpacing: 0,
  };

  const tableBodyRowStyles = {
    ':hover': {
      backgroundColor: primaryB,
    },
  };

  const onChange = (oldIndex: number, newIndex: number) => {
    const newData = arrayMove(entityRows, oldIndex, newIndex);

    if (setData) {
      setData(newData);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'stretch',
        overflow: 'auto',
        ...borderTop({ ...border300, borderColor: light6 }),
      }}
    >
      <List
        beforeDrag={({ elements, index }) => {
          const cells = Array.from(elements[index].children);
          const widths = cells.map((cell) => window.getComputedStyle(cell).width);
          setWidths(widths);
        }}
        lockVertically
        transitionDuration={0}
        values={data}
        onChange={({ oldIndex, newIndex }) => onChange(oldIndex, newIndex)}
        renderList={({ children, props, isDragged }) => (
          <table
            style={{
              ...tableStyles,
              cursor: isDragged ? 'grabbing' : undefined,
              width: '100%',
              minWidth: `${MIN_TABLE_WIDTH}px`,
            }}
          >
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={`th-${index}`}
                    style={{
                      ...tableHeadCellStyles,
                      ...getSidePadding(index, columns.length),
                      width: column.width ?? 'auto',
                      textAlign: column?.type === BasicTableColumnType.Financial ? 'right' : 'left',
                    }}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody {...props}>{children}</tbody>
          </table>
        )}
        renderItem={({ value, props, isDragged, isSelected }) => {
          const _widths = isDragged ? widths : [];
          const row = (
            <tr
              {...props}
              style={{
                ...props.style,
                cursor: isDragged ? 'grabbing' : undefined,
                backgroundColor: isDragged || isSelected ? light6 : light4,
                ...tableBodyRowStyles,
                ...borderBottom(props.key === entityRows.length - 1 ? undefined : border300),
              }}
            >
              {columns.map((column, index) => (
                <td
                  key={`td-${index}`}
                  style={{
                    ...tableBodyCellStyles,
                    ...getSidePadding(index, columns.length),
                    width: column.width ?? _widths[index],
                  }}
                >
                  {renderCell(value as unknown as BasicTableRow, column)}
                </td>
              ))}
            </tr>
          );

          return row;
        }}
      />
    </div>
  );
};
