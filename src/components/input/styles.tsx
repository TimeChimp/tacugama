import { themedStyled } from '../../theme';
import { borderRadius } from '../../utils';

export interface StyledColorSwatchProps {
  $color?: string;
}

export const StyledColorSwatch = themedStyled<'div', StyledColorSwatchProps>('div', ({ $color, $theme }) => {
  return {
    width: $theme.sizing.scale800,
    height: $theme.sizing.scale800,
    display: 'inline-block',
    backgroundColor: $color,
    verticalAlign: 'baseline',
    ...borderRadius($theme.sizing.scale100),
  };
});

export const ColorPickerContainer = themedStyled('div', () => {
  return {
    zIndex: 1001,
    position: 'absolute',
  };
});

export const ColorPickerWrapper = themedStyled('div', () => {
  return {
    position: 'relative',
    width: '100%',
  };
});
