import React from 'react';
import { SnackbarElementProps as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall, ParagraphSmall } from '../typography';
import { ClearLineIcon } from '../icons/clear-line';
import { Button, ButtonKind } from '../button';
import { useTheme } from '../../providers';
import { StyledDiv, StyledSnackbar, StyledSpan } from './SnackbarStyles';

export interface SnackbarProps extends BaseSnackbarElementProps {
  color?: string;
  onClose: () => void;
  startIcon?: JSX.Element;
}

export const Snackbar = ({ color, onClose, message, actionMessage, actionOnClick, startIcon }: SnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
      },
    },
  } = useTheme();
  return (
    <StyledSnackbar $color={color}>
      <StyledDiv>
        <StyledSpan>{startIcon}</StyledSpan>
        <LabelSmall color={primaryB}>{message}</LabelSmall>
      </StyledDiv>
      <StyledDiv>
        {actionMessage && (
          <Button kind={ButtonKind.Minimal} isTransparent onClick={actionOnClick}>
            <ParagraphSmall color={primaryB}>{actionMessage}</ParagraphSmall>
          </Button>
        )}
        <Button kind={ButtonKind.Minimal} isTransparent onClick={onClose}>
          <ClearLineIcon />
        </Button>
      </StyledDiv>
    </StyledSnackbar>
  );
};

export default Snackbar;
