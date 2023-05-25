import { BasicTableProps, BasicTableRow, renderCell } from '../basic-table';
import { TABLE_ROW_HEIGHT } from '../../models';
import { useTheme } from '../../providers';
import * as React from 'react';
import { List, arrayMove } from 'react-movable';
import { borderBottom, padding } from '../../utils';

export const MovableTable = ({ columns, data }: BasicTableProps) => {
  const [widths, setWidths] = React.useState<string[]>([]);
  const [items, setItems] = React.useState(data);

  const {
    theme: {
      current: {
        sizing: { scale600 },
        colors: { primaryB },
        customColors: { light4, light6, light7 },
        borders: { radius200, border300 },
        typography: { ParagraphSmall },
        customSizing: { scale1025 },
      },
    },
  } = useTheme();

  const tableStyles = {
    borderSpacing: 0,
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
    height: scale1025,
    ...borderBottom(border300),
  } as React.CSSProperties;

  const tableBodyCellStyles = {
    ...padding('0', scale600),
    height: TABLE_ROW_HEIGHT,
    verticalAlign: 'middle',
    ...borderBottom(border300),
  };

  const tableBodyRowStyles = {
    height: TABLE_ROW_HEIGHT,
    ':hover': {
      backgroundColor: primaryB,
    },
  };

  return (
    <div
      style={{
        padding: '3em',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <List
        beforeDrag={({ elements, index }) => {
          const cells = Array.from(elements[index].children);
          const widths = cells.map((cell) => window.getComputedStyle(cell).width);
          setWidths(widths);
        }}
        values={items}
        onChange={({ oldIndex, newIndex }) => setItems(arrayMove(items, oldIndex, newIndex))}
        renderList={({ children, props, isDragged }) => (
          <table
            style={{
              ...tableStyles,
              cursor: isDragged ? 'grabbing' : undefined,
            }}
          >
            <thead>
              <tr>
                {columns.map((column) => (
                  <th style={{ ...tableHeadCellStyles, width: column.width ?? 'auto' }}>{column.label}</th>
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
                cursor: isDragged ? 'grabbing' : 'grab',
                backgroundColor: isDragged || isSelected ? light6 : light4,
                ...tableBodyRowStyles,
              }}
            >
              {columns.map((column, index) => (
                <td style={{ ...tableBodyCellStyles, width: column.width ?? _widths[index] }}>
                  {renderCell(value as unknown as BasicTableRow, column)}
                </td>
              ))}
            </tr>
          );
          return isDragged ? (
            <table style={{ ...props.style, borderSpacing: 0 }}>
              <tbody>{row}</tbody>
            </table>
          ) : (
            row
          );
        }}
      />
    </div>
  );
};
