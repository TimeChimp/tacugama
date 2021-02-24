import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';
import { margin, padding } from '../../utils';
import { borderTop, borderRight, borderLeft } from '../../utils/css';

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
  `;
};

export const StyledDataGrid = themedStyled('div', {
  height: 'calc(100vh - 325px)',
  width: '100%',
});

export const StyledDataGridFilters = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale400, '0'),
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledDataGridSearch = themedStyled('div', {
  width: '25%',
});

export const StyledStatusBarRowCount = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale650, '0px'),
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

export const StyledDataGridHeader = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale200, $theme.sizing.scale300),
  display: 'flex',
  justifyContent: 'space-between',
  ...borderTop($theme.borders.border300),
  ...borderLeft($theme.borders.border300),
  ...borderRight($theme.borders.border300),
}));

export const StyledDataGridActions = themedStyled('div', ({ $theme }) => ({}));

export const StyledDataGridViews = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  ...padding('0', $theme.sizing.scale300),
}));

export const StyledDataGridViewList = themedStyled('ul', ({ $theme }) => ({
  width: $theme.sizing.scale4800,
  ...padding('0'),
  ...margin('0'),
}));

export const StyledDataGridViewsDivider = themedStyled('div', ({ $theme }) => ({
  height: $theme.sizing.scale750,
  ...margin($theme.sizing.scale200, $theme.sizing.scale600),
  ...borderRight($theme.borders.border600),
}));

export const StyledViewOptionsFooter = themedStyled('div', ({ $theme }) => ({
  backgroundColor: $theme.colors.primaryB,
  ...padding($theme.sizing.scale200, $theme.sizing.scale300),
}));
