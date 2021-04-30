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
