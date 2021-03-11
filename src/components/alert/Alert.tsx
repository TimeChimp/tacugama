import React from 'react';
import { SnackbarElementPropsT as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall } from '../typography';
import { TertiaryButton } from '../button';
import { useTheme } from '../../providers';
import { StyledDiv, StyledAlert, StyledSpan } from './AlertStyles';
import { SIZE } from 'baseui/button';

export interface AlertProps extends BaseSnackbarElementProps {
  color?: string;
  startIcon?: JSX.Element;
}

export const Alert = ({ color, message, actionMessage, actionOnClick, startIcon }: AlertProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();
  return (
    <StyledAlert $color={color}>
      <StyledDiv>
        <StyledSpan>{startIcon}</StyledSpan>
        <LabelSmall color={primaryB}>{message}</LabelSmall>
      </StyledDiv>
      <StyledDiv>
        {actionMessage && (
          <TertiaryButton
            overrides={{
              Root: {
                style: {
                  color: primaryB,
                  ...ParagraphSmall,
                },
              },
            }}
            size={SIZE.mini}
            onClick={actionOnClick}
          >
            {actionMessage}
          </TertiaryButton>
        )}
      </StyledDiv>
    </StyledAlert>
  );
};

export default Alert;
