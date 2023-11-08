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
  $index: number;
  $numberOfColumns: number;
  $tableHeadCellStyles: {
    height: string;
    borderBottomColor: string;
    fontFamily: string;
    fontWeight: string | number;
    color: string;
  };
  $getSidePadding: (
    index: number,
    numberOfColumns: number,
  ) =>
    | {
        paddingLeft: string;
        paddingRight?: undefined;
      }
    | {
        paddingRight: string;
        paddingLeft?: undefined;
      }
    | {
        paddingLeft?: undefined;
        paddingRight?: undefined;
      };
}

export const StyledTableHeadCell = themedStyled<'th', StyledTableHeadCellProps>(
  'th',
  ({ $theme, $width, $textAlign, $index, $numberOfColumns, $tableHeadCellStyles, $getSidePadding }) => ({
    ...$getSidePadding($index, $numberOfColumns),
    ...$tableHeadCellStyles,
    width: $width,
    textAlign: $textAlign,
    ...borderBottom($theme.borders.border300),
  }),
);

export interface StyledTableBodyCellProps {
  $width?: string;
  $index: number;
  $numberOfColumns: number;
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
  $getSidePadding: (
    index: number,
    numberOfColumns: number,
  ) =>
    | {
        paddingLeft: string;
        paddingRight?: undefined;
      }
    | {
        paddingRight: string;
        paddingLeft?: undefined;
      }
    | {
        paddingLeft?: undefined;
        paddingRight?: undefined;
      };
}

export const StyledTableBodyCell = themedStyled<'td', StyledTableBodyCellProps>(
  'td',
  ({ $theme, $width, $index, $numberOfColumns, $tableBodyCellStyles, $getSidePadding }) => ({
    ...$getSidePadding($index, $numberOfColumns),
    ...$tableBodyCellStyles,
    width: $width,
    ...borderBottom($theme.borders.border300),
  }),
);

export interface StyledTableBodyRowProps {
  $isDragged?: boolean;
  $isSelected?: boolean;
  $isBorderBottom: boolean;
}

export const StyledTableBodyRow = themedStyled<'tr', StyledTableBodyRowProps>(
  'tr',
  ({ $theme, $isDragged, $isSelected, $isBorderBottom }) => ({
    cursor: $isDragged ? 'grabbing' : undefined,
    backgroundColor: $isDragged || $isSelected ? $theme.customColors.light6 : $theme.customColors.light4,
    ':hover': {
      backgroundColor: $theme.colors.primaryB,
    },
    ...borderBottom($isBorderBottom ? undefined : $theme.borders.border300),
  }),
);
