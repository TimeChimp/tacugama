import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';
import { margin, padding, borderTop, borderRight, borderLeft, borderBottom } from '../../utils';

export const getGridThemeOverrides = (theme: CustomThemeType) => {
  return `
    :root {
      --ag-alpine-active-color: ${theme.colors.primary};
      --ag-foreground-color: ${theme.colors.colorPrimary};
      --ag-secondary-foreground-color: ${theme.colors.colorSecondary};
      --ag-row-hover-color: ${theme.colors.primary100};
      --ag-selected-row-background-color: ${theme.colors.primary200};
      --ag-font-family: ${theme.typography.ParagraphSmall.fontFamily};
      --ag-font-size: ${theme.typography.ParagraphSmall.fontSize};
      --ag-header-background-color: ${theme.colors.primaryB};
      --ag-odd-row-background-color: ${theme.colors.primaryB};
      --ag-border-color: ${theme.borders.border300.borderColor};
      --ag-secondary-border-color: ${theme.borders.border300.borderColor};
      --ag-range-selection-border-color: transparent;
      --ag-checkbox-unchecked-color: ${theme.colors.colorSecondary};
    }

    .ag-theme-alpine {
      font-family: ${theme.typography.ParagraphSmall.fontFamily};
    }

    .ag-theme-alpine .ag-checkbox-input-wrapper {
      width: ${theme.sizing.scale650};
      height: ${theme.sizing.scale650};
      font-size: ${theme.sizing.scale650};
      line-height: ${theme.sizing.scale650};
    }

    .ag-header-icon.ag-header-cell-menu-button {
      display: none;
    }

    .ag-theme-alpine .ag-pinned-right-header,
    .ag-theme-alpine .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell) {
      border-left: none;
    }

    .ag-theme-alpine .ag-status-bar {
      padding-right: ${theme.sizing.scale300};
      padding-left: ${theme.sizing.scale300};
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

export const StyledDataGridFilters = themedStyled('div', ({ $theme }) => ({
  width: '100%',
  ...margin($theme.sizing.scale400, '0'),
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledDataGridSearch = themedStyled('div', ({ $theme }) => ({
  width: '280px',
  ...margin('0', $theme.sizing.scale300, '0', '0'),
}));

export const StyledFooterRowCount = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  ...padding($theme.sizing.scale200, '0px'),
}));

export const StyledFooterPagination = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale300, '0px'),
  position: 'absolute',
  left: ' 50%',
  transform: 'translateX(-50%)',
}));

export const StyledFooterFooterPageSize = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale300, $theme.sizing.scale200),
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

export const StyledHeaderColumnToggle = themedStyled('div', {
  display: 'flex',
  alignItems: 'flex-end',
});

export const StyledHeaderCheckboxValue = themedStyled('div', ({ $theme }) => ({
  ...padding('0', '0', '0', $theme.sizing.scale0),
}));

interface StyledDataGridHeaderProps {
  $justifyContent?: string;
}

export const StyledDataGridHeader = themedStyled<'div', StyledDataGridHeaderProps>(
  'div',
  ({ $theme, $justifyContent = 'space-between' }) => ({
    ...padding($theme.sizing.scale100, $theme.sizing.scale300),
    display: 'flex',
    justifyContent: $justifyContent,
    ...borderTop($theme.borders.border300),
    ...borderLeft($theme.borders.border300),
    ...borderRight($theme.borders.border300),
    background: $theme.colors.primaryB,
    borderTopRightRadius: $theme.borders.radius200,
    borderTopLeftRadius: $theme.borders.radius200,
  }),
);

export const StyledDataGridActions = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
}));

export const StyledDataGridViews = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  background: $theme.colors.primaryB,
}));

export const StyledDataGridViewListItem = themedStyled('li', ({ $theme }) => ({
  ...padding('0', $theme.sizing.scale300),
  backgroundColor: $theme.colors.primaryB,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...borderBottom($theme.borders.border200),
}));

export const StyledDataGridDivider = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignSelf: 'center',
  height: $theme.sizing.scale750,
  ...margin('0px', $theme.sizing.scale200),
  ...borderRight($theme.borders.border600),
}));

export const StyledViewOptionsFooter = themedStyled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.primaryB,
  ...padding('0', $theme.sizing.scale100),
}));

export const StyledGroupRowInnerRendererContainer = themedStyled('div', () => ({
  display: 'inline-block',
}));
