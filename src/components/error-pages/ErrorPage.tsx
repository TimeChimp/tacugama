import React, { useMemo } from 'react';
import { ErrorButtonsBox, ErrorPageContent, ErrorPageWrapper } from './styles';
import { ErrorPageProps } from './types';
import { HeadingSmall, ParagraphSmall } from '../typography';
import { Button } from '../button';
import { useTheme } from '../../providers';
import { ButtonKind } from '../../models';
import { XCircle } from '@phosphor-icons/react';

export const ErrorPage = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: ErrorPageProps) => {
  const {
    theme: {
      current: {
        sizing: { scale300, scale550, scale600, scale800 },
        colors: { primary, negative },
        customSizing: { scale11250 },
      },
    },
  } = useTheme();

  const isSecondaryButtonShown = useMemo(
    () => !!onSecondaryButtonClick && !!secondaryButtonText,
    [onSecondaryButtonClick, secondaryButtonText],
  );

  return (
    <ErrorPageWrapper>
      <ErrorPageContent>
        <XCircle color={negative} />
        <HeadingSmall marginTop={scale550} marginBottom={scale300} color={primary}>
          {title}
        </HeadingSmall>
        <ParagraphSmall
          marginBottom={scale600}
          overrides={{
            Block: {
              style: {
                lineHeight: scale800,
                maxWidth: scale11250,
              },
            },
          }}
        >
          {description}
        </ParagraphSmall>
        <ErrorButtonsBox>
          <Button onClick={onPrimaryButtonClick}>{primaryButtonText}</Button>
          {isSecondaryButtonShown ? (
            <Button kind={ButtonKind.secondary} onClick={onSecondaryButtonClick}>
              {secondaryButtonText}
            </Button>
          ) : null}
        </ErrorButtonsBox>
      </ErrorPageContent>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
