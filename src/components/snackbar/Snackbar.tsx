import React from 'react';
import { SnackbarElementPropsT as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall } from '../typography';
import { ClearLineIcon } from '../icons';
import { TertiaryButton } from '../button';
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
        typography: { ParagraphSmall },
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
          <TertiaryButton
            overrides={{
              Root: {
                style: {
                  color: primaryB,
                  ...ParagraphSmall,
                },
              },
            }}
            onClick={actionOnClick}
          >
            {actionMessage}
          </TertiaryButton>
        )}
        <TertiaryButton
          overrides={{
            Root: {
              style: {
                color: primaryB,
              },
            },
          }}
          onClick={onClose}
        >
          <ClearLineIcon />
        </TertiaryButton>
      </StyledDiv>
    </StyledSnackbar>
  );
};

export default Snackbar;
