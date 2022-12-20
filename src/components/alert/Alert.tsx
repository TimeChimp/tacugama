import React from 'react';
import { SnackbarElementPropsT as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall } from '../typography';
import { Button } from '../button';
import { useTheme } from '../../providers';
import { StyledDiv, StyledAlert, StyledSpan } from './AlertStyles';
import { ButtonKind } from '../../models';

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
          <Button buttonKind={ButtonKind.minimal} isTransparent onClick={actionOnClick}>
            {actionMessage}
          </Button>
        )}
      </StyledDiv>
    </StyledAlert>
  );
};

export default Alert;
