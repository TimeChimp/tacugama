import React from 'react';
import { SnackbarElementProps as BaseSnackbarElementProps } from 'baseui/snackbar';
import { LabelSmall, ParagraphSmall } from '../typography';
import { ClearLineIcon } from '../icons';
import { Button } from '../button';
import { useTheme } from '../../providers';
import { StyledDiv, StyledSnackbar, StyledSpan, StyledCloseWrapper, StyledCloseSeparator } from './SnackbarStyles';
import { ButtonKind } from '../../models';
import { Block } from '../block';
export interface SnackbarProps extends BaseSnackbarElementProps {
  color?: string;
  onClose: () => void;
  startIcon?: JSX.Element;
}

export const Snackbar = ({ color, onClose, message, actionMessage, actionOnClick, startIcon }: SnackbarProps) => {
  const {
    theme: {
      current: {
        sizing: { scale700, scale400 },
        colors: { primaryB, primary },
      },
    },
  } = useTheme();
  const bgColor = color || primary;

  return (
    <StyledSnackbar $color={bgColor}>
      <StyledDiv>
        <Block display="flex" gridGap={scale400}>
          <StyledSpan color={primaryB}>{startIcon}</StyledSpan>
          <LabelSmall color={primaryB}>{message}</LabelSmall>
          {actionMessage && (
            <Button kind={ButtonKind.minimal} onClick={actionOnClick}>
              <ParagraphSmall color={primaryB} alignSelf="flex-start">
                {actionMessage}
              </ParagraphSmall>
            </Button>
          )}
        </Block>
        <Button kind={ButtonKind.minimal} onClick={onClose}>
          <StyledCloseWrapper>
            <StyledCloseSeparator />
            <Block alignSelf="flex-start">
              <ClearLineIcon color={primaryB} size={scale700} />
            </Block>
          </StyledCloseWrapper>
        </Button>
      </StyledDiv>
    </StyledSnackbar>
  );
};

export default Snackbar;
