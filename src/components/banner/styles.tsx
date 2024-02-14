import { themedStyled } from '../../theme';
import { borderRadius, padding, toRGBColor } from '../../utils';

export enum StyledBannerTextPosition {
  Center = 'center',
  Start = 'flex-start',
  End = 'flex-end',
}

export interface StyledBannerProps {
  $backgroundColor?: string;
  $textPosition?: StyledBannerTextPosition;
}

const BACKGROUND_TRANSPARENCY = 0.08;

const getBannerBackgroundColor = (color: string) => {
  const { r, g, b } = toRGBColor(color);
  return `rgba(${r}, ${g}, ${b}, ${BACKGROUND_TRANSPARENCY})`;
};

export const StyledBanner = themedStyled<'div', StyledBannerProps>(
  'div',
  ({ $theme, $backgroundColor, $textPosition }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: $textPosition,
    backgroundColor: getBannerBackgroundColor($backgroundColor || $theme.colors.primary),
    ...borderRadius($theme.borders.radius100),
    ...padding($theme.sizing.scale400, $theme.sizing.scale500),
    flex: '1 1 auto',
  }),
);

export const StyledContainer = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: $theme.sizing.scale400,
}));
