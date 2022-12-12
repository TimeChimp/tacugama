import React from 'react';
import { SnackbarElementPropsT as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall, ParagraphSmall } from '../typography';
import { Delete } from '../icons';
import { Button } from '../button';
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
          <Button kind="minimal" isTransparent onClick={actionOnClick}>
            <ParagraphSmall color={primaryB}>{actionMessage}</ParagraphSmall>
          </Button>
        )}
        <Button kind="minimal" isTransparent onClick={onClose}>
          <Delete color={primaryB} />
        </Button>
      </StyledDiv>
    </StyledSnackbar>
  );
};

export default Snackbar;
