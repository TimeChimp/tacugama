import { Colors } from 'baseui/theme';
import React from 'react';
import { themedStyled } from '../../theme';

export interface PinDotProps {
  hasValue: boolean;
  error: boolean;
}

const getColor = (hasValue: boolean, error: boolean, { backgroundNegative, primary100, primary300 }: Colors) => {
  if (error) {
    return backgroundNegative;
  }
  return hasValue ? primary300 : primary100;
};

const StyledPinDot = themedStyled<'div', PinDotProps>('div', ({ $theme: { colors, sizing }, hasValue, error }) => ({
  color: getColor(hasValue, error, colors),
  fontSize: sizing.scale1600,
}));

export const PinDot = ({ hasValue, error }: PinDotProps) => {
  return (
    <StyledPinDot error={error} hasValue={hasValue}>
      &#183;
    </StyledPinDot>
  );
};
