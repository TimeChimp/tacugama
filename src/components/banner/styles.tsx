import { themedStyled } from '../../theme';
import { borderRadius, padding, toRGBColor } from '../../utils';

export interface StyledBannerProps {
  $backgroundColor?: string;
}

const BACKGROUND_TRANSPARENCY = 0.08;

const getBannerBackgroundColor = (color: string) => {
  const { r, g, b } = toRGBColor(color);
  return `rgba(${r}, ${g}, ${b}, ${BACKGROUND_TRANSPARENCY})`;
};

export const StyledBanner = themedStyled<'div', StyledBannerProps>('div', ({ $theme, $backgroundColor }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  backgroundColor: getBannerBackgroundColor($backgroundColor || $theme.colors.primary),
  ...borderRadius($theme.borders.radius100),
  ...padding($theme.sizing.scale400, $theme.sizing.scale500),
  flex: '1 1 auto',
}));

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: $theme.sizing.scale400,
}));
