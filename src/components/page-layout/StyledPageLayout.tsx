import { themedStyled } from '../../theme';
import { margin, padding } from '../../utils';

export const StyledPageLayout = themedStyled('div', ({ $theme }) => ({
  ...padding($theme.sizing.scale950, $theme.sizing.scale1600, $theme.sizing.scale1600, $theme.sizing.scale1600),
  height: '100%',
  minWidth: `${$theme.breakpoints.large}px`,
}));

export const StyledPageLayoutHeader = themedStyled('header', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  ...margin('0', '0', $theme.sizing.scale800, '0'),
}));

export const StyledPageTitleContainer = themedStyled('div', {});

export const StyledPageMenuContainer = themedStyled('div', {});

export const StyledPageLayoutMain = themedStyled('div', {
  width: '100%',
});
