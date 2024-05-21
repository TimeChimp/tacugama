import { withStyle } from 'baseui';
// eslint-disable-next-line baseui/deprecated-component-api
import { Spinner as BaseSpinner } from 'baseui/spinner';
import { ThemeProps } from '../../models';

export const Spinner = withStyle(BaseSpinner, ({ $theme }: ThemeProps) => ({
  width: $theme.sizing.scale900,
  height: $theme.sizing.scale900,
  borderTopColor: $theme.colors.primary,
}));
