import React from 'react';
import { SnackbarElementPropsT as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall, ParagraphSmall } from '../typography';
import { Delete } from '../icons';
import { MinimalButton } from '../button';
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
          <MinimalButton isTransparent={true} onClick={actionOnClick}>
            <ParagraphSmall color={primaryB}>{actionMessage}</ParagraphSmall>
          </MinimalButton>
        )}
        <MinimalButton isTransparent={true} onClick={onClose}>
          <Delete color={primaryB} />
        </MinimalButton>
      </StyledDiv>
    </StyledSnackbar>
  );
};

export default Snackbar;
