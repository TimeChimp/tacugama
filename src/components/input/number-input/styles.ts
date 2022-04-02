import NumberFormat from 'react-number-format';
import { border, getInputBorderColor, borderRadius } from '../../../utils';
import { themedStyled } from '../../../theme';
import { NumberInputComponentProps } from './types';

export const NumberInputComponent = themedStyled<typeof NumberFormat, NumberInputComponentProps>(
  NumberFormat,
  ({ $theme, $error }) => ({
    height: $theme.sizing.scale1000,
    width: '100%',
    outline: 'none',
    paddingLeft: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale500,
    fontSize: $theme.sizing.scale550,
    lineHeight: $theme.sizing.scale700,
    color: $theme.colors.contentPrimary,
    ...border({
      ...$theme.borders.border300,
      borderColor: getInputBorderColor($error ?? false, false, $theme.colors, $theme.borders),
      borderWidth: $error ? $theme.sizing.scale0 : $theme.borders.border300.borderWidth,
    }),
    ...borderRadius($theme.sizing.scale0),
    ':focus': {
      ...border({
        ...$theme.borders.border300,
        borderColor: getInputBorderColor($error ?? false, true, $theme.colors, $theme.borders),
        borderWidth: $error ? $theme.sizing.scale0 : $theme.borders.border300.borderWidth,
      }),
    },
  }),
);
