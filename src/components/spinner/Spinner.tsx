import { withStyle } from 'baseui';
import { StyledSpinnerNext } from 'baseui/spinner';
import { ThemeProps } from 'models';

export const Spinner = withStyle(StyledSpinnerNext, ({ $theme }: ThemeProps) => ({
  width: $theme.sizing.scale900,
  height: $theme.sizing.scale900,
  borderTopColor: $theme.colors.primary,
}));
