import { BasicTableRow, renderCell } from '../basic-table';
import { TABLE_ROW_HEIGHT } from '../../models';
import { useTheme } from '../../providers';
import * as React from 'react';
import { List, arrayMove } from 'react-movable';
import { borderBottom, padding } from '../../utils';
import { MovableTableProps } from './types';

export const MovableTable = ({ columns, data, setData, entityRows }: MovableTableProps) => {
  const [widths, setWidths] = React.useState<string[]>([]);

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
                cursor: isDragged ? 'grabbing' : undefined,
                backgroundColor: isDragged || isSelected ? light6 : light4,
                ...tableBodyRowStyles,
                ...borderBottom(props.key === entityRows.length - 1 ? undefined : border300),
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
            <table style={{ ...props.style, borderSpacing: 0, width: '100%' }}>
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
