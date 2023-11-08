import { borderBottom, borderTop } from '../../utils';
import { themedStyled } from '../../theme';
import { TextAlignProperty } from '../../models';

export const StyledTableWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  justifyContent: 'stretch',
  overflow: 'auto',
  ...borderTop({ ...$theme.borders.border300, borderColor: $theme.customColors.light6 }),
}));

export interface StyledTableProps {
  $isDragged?: boolean;
}

export const StyledTable = themedStyled<'table', StyledTableProps>('table', ({ $isDragged }) => ({
  cursor: $isDragged ? 'grabbing' : undefined,
  width: '100%',
  minWidth: '1100px',
  borderSpacing: 0,
}));

export interface StyledTableHeadCellProps {
  $textAlign?: TextAlignProperty;
  $width?: string;
  $tableHeadCellStyles: {
    height: string;
    borderBottomColor: string;
    fontFamily: string;
    fontWeight: string | number;
    color: string;
  };
  $sidePadding: { paddingLeft?: string; paddingRight?: string };
}

export const StyledTableHeadCell = themedStyled<'th', StyledTableHeadCellProps>(
  'th',
  ({ $theme, $width, $textAlign, $tableHeadCellStyles, $sidePadding }) => ({
    ...$tableHeadCellStyles,
    ...$sidePadding,
    width: $width,
    textAlign: $textAlign,
    ...borderBottom({ ...$theme.borders.border300, borderColor: $theme.customColors.light6 }),
  }),
);

export interface StyledTableBodyCellProps {
  $width?: string;
  $tableBodyCellStyles: {
    height: string;
    verticalAlign: string;
    borderBottomColor: string;
    borderBox: string;
    paddingTop: string | undefined;
    paddingRight: string | undefined;
    paddingBottom: string | undefined;
    paddingLeft: string | undefined;
  };
  $sidePadding: { paddingLeft?: string; paddingRight?: string };
}

export const StyledTableBodyCell = themedStyled<'td', StyledTableBodyCellProps>(
  'td',
  ({ $theme, $width, $tableBodyCellStyles, $sidePadding }) => ({
    ...$tableBodyCellStyles,
    ...$sidePadding,
    width: $width,
    ...borderBottom({ ...$theme.borders.border300, borderColor: $theme.customColors.light6 }),
  }),
);

export interface StyledTableBodyRowProps {
  $isDragged?: boolean;
  $isSelected?: boolean;
}

export const StyledTableBodyRow = themedStyled<'tr', StyledTableBodyRowProps>(
  'tr',
  ({ $theme, $isDragged, $isSelected }) => ({
    cursor: $isDragged ? 'grabbing' : undefined,
    backgroundColor: $isDragged || $isSelected ? $theme.customColors.light6 : $theme.customColors.light4,
  }),
);
