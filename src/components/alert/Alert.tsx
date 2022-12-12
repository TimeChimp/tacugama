import React from 'react';
import { SnackbarElementPropsT as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall } from '../typography';
import { MinimalButton } from '../button';
import { useTheme } from '../../providers';
import { StyledDiv, StyledAlert, StyledSpan } from './AlertStyles';

export interface AlertProps extends BaseSnackbarElementProps {
  color?: string;
  minWidth?: string;
  startIcon?: JSX.Element;
}

export const Alert = ({ color, minWidth, message, actionMessage, actionOnClick, startIcon }: AlertProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
      },
    },
  } = useTheme();
  return (
    <StyledAlert $color={color} $minWidth={minWidth}>
      <StyledDiv>
        <StyledSpan>{startIcon}</StyledSpan>
        <LabelSmall color={primaryB}>{message}</LabelSmall>
      </StyledDiv>
      <StyledDiv>
        {actionMessage && (
          <MinimalButton isTransparent color={primaryB} onClick={actionOnClick}>
            {actionMessage}
          </MinimalButton>
        )}
      </StyledDiv>
    </StyledAlert>
  );
};

export default Alert;
