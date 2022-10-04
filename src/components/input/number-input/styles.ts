import NumberFormat from 'react-number-format';
import { border, getInputBorderColor, borderRadius } from '../../../utils';
import { themedStyled } from '../../../theme';
import { NumberInputComponentProps } from './types';

export const NumberInputComponent = themedStyled<typeof NumberFormat, NumberInputComponentProps>(
  NumberFormat,
  ({ $theme, $error }) => ({
    height: '38px', // NOTE: Value does not exist in the theme
    width: '100%',
    outline: 'none',
    paddingLeft: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale500,
    paddingTop: '0',
    paddingBottom: '0',
    fontSize: $theme.sizing.scale550,
    fontFamily: 'Inter',
    lineHeight: $theme.sizing.scale700,
    color: $theme.colors.contentPrimary,
    ...border({
      ...$theme.borders.border300,
      borderColor: getInputBorderColor($error ?? false, false, $theme.colors, $theme.borders),
      borderWidth: $error ? $theme.sizing.scale0 : $theme.borders.border300.borderWidth,
    }),
    ...borderRadius($theme.borders.radius200),
    ':focus': {
      ...border({
        ...$theme.borders.border300,
        borderColor: getInputBorderColor($error ?? false, true, $theme.colors, $theme.borders),
        borderWidth: $error ? $theme.sizing.scale0 : $theme.borders.border300.borderWidth,
      }),
    },
  }),
);
