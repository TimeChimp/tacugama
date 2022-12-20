import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';

export const StyledColorSwatch = themedStyled(
  'div',
  ({ $theme, $color }: { $theme?: CustomThemeType; $color: string }) => {
    return {
      width: $theme?.sizing.scale800,
      height: $theme?.sizing.scale800,
      display: 'inline-block',
      backgroundColor: $color,
      verticalAlign: 'baseline',
    };
  },
);

export const StyledOption = themedStyled('div', {
  display: 'flex',
  alignItems: 'center',
});
