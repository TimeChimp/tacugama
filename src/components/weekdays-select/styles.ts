import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';
import { border, borderRadius } from '../../utils';
import { StyledWeekdayProps } from './types';

const getBackgroundColor = ({ $isDisabled, $active, $theme }: StyledWeekdayProps & { $theme: CustomThemeType }) => {
  if ($isDisabled) {
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

export const WeekdayComponent = themedStyled<'div', StyledWeekdayProps>('div', ({ $theme, $active, $isDisabled }) => {
  const borderColor = !$active || $isDisabled ? $theme.customColors.light2 : $theme.customColors.primaryMain;
  return {
    backgroundColor: getBackgroundColor({ $active, $isDisabled, $theme }),
    boxSizing: 'border-box',
    fontSize: '14px',
    height: $theme.sizing.scale1000,
    width: $theme.sizing.scale1000,
    ...border({
      ...$theme.borders.border300,
      borderColor: borderColor,
    }),
    ...borderRadius('50%'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: $isDisabled ? 'not-allowed' : 'pointer',
  };
});
