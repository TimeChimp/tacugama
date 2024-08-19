import { AgGridReact } from '@ag-grid-community/react';
import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';
import { margin, padding, borderTop, borderRight, borderLeft, borderBottom } from '../../utils';

interface StyledDataGridHeaderProps {
  $justifyContent?: string;
}

interface StyledDateFilterColumnProps {
  $showLeftDivider?: boolean;
  $showRightDivider?: boolean;
}

export const PAGINATION_SELECTED_ROWS_WIDTH = 285;

export const getGridThemeOverrides = (theme: CustomThemeType) => {
  return `
    .ag-cell-wrapper {
      height: 100%;
    }
  
    .ag-theme-alpine, .ag-theme-alpine-dark, .ag-theme-alpine-auto-dark {
      font-family: ${theme.typography.ParagraphSmall.fontFamily};
      --ag-alpine-active-color: ${theme.colors.primary};
      --ag-foreground-color: ${theme.colors.primaryA};
      --ag-secondary-foreground-color: ${theme.customColors.dark4};
      --ag-row-hover-color: ${theme.colors.primary50};
      --ag-selected-row-background-color: ${theme.colors.primary100};
      --ag-font-family: ${theme.typography.ParagraphSmall.fontFamily};
      --ag-font-size: ${theme.typography.ParagraphSmall.fontSize};
      --ag-header-background-color: ${theme.customColors.light7};
      --ag-odd-row-background-color: ${theme.colors.primaryB};
      --ag-border-color: ${theme.borders.border300.borderColor};
      --ag-border-radius: 0;
      --ag-secondary-border-color: ${theme.borders.border300.borderColor};
      --ag-range-selection-border-color: transparent;
      --ag-checkbox-unchecked-color: ${theme.customColors.dark4};
    }

    .ag-theme-alpine .ag-row, .ag-theme-alpine-dark .ag-row, .ag-theme-alpine-auto-dark .ag-row {
      font-size: ${theme.typography.ParagraphSmall.fontSize};
    }
      
    
    .ag-theme-alpine .ag-checkbox-input-wrapper {
      width: ${theme.sizing.scale650};
      height: ${theme.sizing.scale650};
      font-size: ${theme.sizing.scale650};
      line-height: ${theme.sizing.scale650};
    }

    .ag-theme-alpine .ag-header-cell {
      font-weight: ${theme.typography.LabelSmall.fontWeight};
      font-size: ${theme.typography.LabelSmall.fontSize};
      line-height: ${theme.typography.LabelSmall.lineHeight};
      color: ${theme.customColors.dark3}
    }


    .ag-theme-alpine .ag-row {
      color: ${theme.customColors.dark1};

    .ag-theme-alpine .ag-header-cell div[title^='CaretUp'], div[title^='CaretDown'] {
      display: flex;
    }

    .ag-header-icon.ag-header-cell-menu-button {
      display: none;
    }

    .ag-theme-alpine .ag-status-bar {
      padding-right: ${theme.sizing.scale600};
      padding-left: ${theme.sizing.scale600};
    }

    .ag-theme-alpine .ag-root-wrapper {
      border-bottom-right-radius: ${theme.borders.radius200};
      border-bottom-left-radius: ${theme.borders.radius200};
    }

    .ag-theme-alpine .ag-ltr .ag-pinned-right-header .ag-header-row:after {
      display: none;
    }

    .ag-theme-alpine .ag-row-loading:hover {
      background: transparent;
    }

    .ag-row-edit-cell {
      display: none;
    }
    .ag-row-hover .ag-row-edit-cell, .ag-row-focus .ag-row-edit-cell {
      display: block;
    }

    .ag-theme-alpine .ag-header-cell-resize:after {
      top: 0;
      bottom: 0;
      height: auto;
    }

  `;
};

export interface StyledDataGridProps {
  $height?: string;
}
export const StyledDataGrid = themedStyled<'div', StyledDataGridProps>('div', ({ $height = '100%' }) => ({
  height: $height,
  width: '100%',
}));

export const StyledAgGridReact = themedStyled<typeof AgGridReact, StyledDataGridProps>(
  AgGridReact,
  ({ $height = '100%' }) => ({
    height: `${$height} !important`, // Needed to overwrite default AgGrid height
  }),
);

export const StyledDataGridFilters = themedStyled('div', ({ $theme }) => ({
  width: '100%',
  ...padding($theme.sizing.scale300, '0'),
  display: 'flex',
  gap: $theme.sizing.scale300,
  flexWrap: 'wrap',
}));

export const StyledDataGridSearch = themedStyled('div', ({ $theme }) => ({
  width: '280px',
  ...padding($theme.sizing.scale100, '0'),
}));

export const StyledFooterRowCount = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale300, '0'),
  display: 'flex',
  width: `${PAGINATION_SELECTED_ROWS_WIDTH}px`,
}));

export const StyledFooterPagination = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale300, '0'),
  display: 'flex',
}));

export const StyledFooterFooterPageSize = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale300, '0'),
  display: 'flex',
  whiteSpace: 'nowrap',
  alignItems: 'center',
}));

export const StyledNoRowsTemplate = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale2400, $theme.sizing.scale1000),
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledNoRowsTemplateContainer = themedStyled('div', {
  textAlign: 'center',
});

export const StyledHeaderCheckbox = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
  ...margin('0', '0', '0', '-2px'),
});

export const StyledHeaderCheckboxValue = themedStyled('div', ({ $theme }) => ({
  ...padding('0', '0', '0', $theme.sizing.scale0),
}));

export const StyledDataGridHeader = themedStyled<'div', StyledDataGridHeaderProps>(
  'div',
  ({ $theme, $justifyContent = 'space-between' }) => ({
    ...padding($theme.sizing.scale100, $theme.sizing.scale600),
    display: 'flex',
    alignItems: 'center',
    height: $theme.sizing.scale1000,
    justifyContent: $justifyContent,
    ...borderTop($theme.borders.border300),
    ...borderLeft($theme.borders.border300),
    ...borderRight($theme.borders.border300),
    background: $theme.colors.primaryB,
    borderTopRightRadius: $theme.borders.radius200,
    borderTopLeftRadius: $theme.borders.radius200,
  }),
);

export const StyledDataGridActions = themedStyled('div', () => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledDataGridViews = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  background: $theme.colors.primaryB,
  gap: $theme.sizing.scale300,
}));

export const StyledDataGridViewListItem = themedStyled('li', ({ $theme }) => ({
  ...padding('0', $theme.sizing.scale600),
  backgroundColor: $theme.colors.primaryB,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...borderBottom($theme.borders.border200),
}));

export const StyledDataGridDivider = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignSelf: 'center',
  height: $theme.sizing.scale800,
  ...margin('0px', $theme.sizing.scale200),
  ...borderRight({ ...$theme.borders.border600, borderColor: $theme.customColors.light2 }),
}));

export const StyledViewOptionsFooter = themedStyled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.primaryB,
  ...padding('0', $theme.sizing.scale600),
}));

export const StyledGroupRowInnerRendererContainer = themedStyled('div', () => ({
  display: 'inline-block',
}));

export const StyledDateFilterColumn = themedStyled<'div', StyledDateFilterColumnProps>(
  'div',
  ({ $showLeftDivider, $showRightDivider, $theme }) => {
    if ($showLeftDivider && $showRightDivider) {
      return {
        ...padding($theme.sizing.scale100, $theme.sizing.scale300),
        ...borderRight($theme.borders.border200),
        ...borderLeft($theme.borders.border200),
      };
    }
    if ($showRightDivider) {
      return {
        ...padding($theme.sizing.scale100, $theme.sizing.scale300, $theme.sizing.scale100, '0'),
        ...borderRight($theme.borders.border200),
      };
    }
    if ($showLeftDivider) {
      return {
        ...padding($theme.sizing.scale100, '0', $theme.sizing.scale100, $theme.sizing.scale300),
        ...borderLeft($theme.borders.border200),
      };
    }
    return {
      ...padding($theme.sizing.scale100, '0'),
    };
  },
);

export const StyledFilterColumn = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale100, '0'),
}));

export const StyledRowActionsCell = themedStyled('div', () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
