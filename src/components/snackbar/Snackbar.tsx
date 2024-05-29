import React from 'react';
import { ParagraphSmall } from '../typography';
import { Button } from '../button';
import { useTheme } from '../../providers';
import { StyledDiv, StyledSnackbar, StyledSpan, StyledCloseWrapper, StyledCloseSeparator } from './SnackbarStyles';
import { ButtonKind } from '../../models';
import { Block } from '../block';
import { SnackBarType, SnackbarProps } from './types';
import { Check, Info, Warning, X, XCircle } from '@phosphor-icons/react';

export const Snackbar = ({
  onClose,
  message,
  actionMessage,
  actionOnClick,
  type = SnackBarType.info,
}: SnackbarProps) => {
  const {
    theme: {
      current: {
        sizing: { scale700, scale400, scale600, scale650 },
        customSizing: { scale050 },
        colors: { primaryB, primary },
        customColors: { green0, red0, yellow5 },
      },
    },
  } = useTheme();

  const getSnackbarColor = () => {
    const map = {
      [SnackBarType.success]: green0,
      [SnackBarType.error]: red0,
      [SnackBarType.warning]: yellow5,
      [SnackBarType.info]: primary,
    };
    return map[type];
  };

  const getIcon = () => {
    const map = {
      [SnackBarType.success]: <Check color={primaryB} size={scale650} />,
      [SnackBarType.error]: <XCircle color={primaryB} size={scale650} />,
      [SnackBarType.warning]: (
        <Block marginTop={scale050}>
          <Warning color={primaryB} size={scale600} />
        </Block>
      ),
      [SnackBarType.info]: <Info color={primaryB} size={scale650} />,
    };
    return map[type];
  };

  return (
    <StyledSnackbar $color={getSnackbarColor()}>
      <StyledDiv>
        <Block display="flex" gridGap={scale400}>
          <StyledSpan color={primaryB}>{getIcon()}</StyledSpan>
          <ParagraphSmall color={primaryB}>{message}</ParagraphSmall>
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
            <Block display="flex" alignSelf="flex-start" alignItems="center">
              <X color={primaryB} size={scale650} />
            </Block>
          </StyledCloseWrapper>
        </Button>
      </StyledDiv>
    </StyledSnackbar>
  );
};

export default Snackbar;
