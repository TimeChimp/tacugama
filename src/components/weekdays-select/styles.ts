import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';
import { border, borderRadius } from '../../utils';
import { StyledWeekdayProps } from './types';

const getBackgroundColor = ({ $isDisable, $active, $theme }: StyledWeekdayProps & { $theme: CustomThemeType }) => {
  if ($isDisable) {
    return $theme.customColors.light3;
  }
  if ($active) {
    return $theme.customColors.purple4;
  }
  return $theme.customColors.light4;
};

export const Container = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale600,
}));

export const WeekdaysContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale400,
}));

export const SelectAllLink = themedStyled('div', () => ({
  textDecoration: 'underline',
}));

export const Weekday = themedStyled<'div', StyledWeekdayProps>('div', ({ $theme, $active, $isDisable }) => {
  const borderColor = !$active || $isDisable ? $theme.customColors.light2 : $theme.customColors.primaryMain;
  return {
    backgroundColor: getBackgroundColor({ $active, $isDisable, $theme }),
    boxSizing: 'border-box',
    fontSize: '14px',
    height: $theme.sizing.scale1000,
    width: $theme.sizing.scale1000,
    ...border({
      ...$theme.borders.border300,
      borderColor: borderColor,
    }),
    ...borderRadius($theme.sizing.scale1000),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: $isDisable ? 'not-allowed' : 'pointer',
  };
});
