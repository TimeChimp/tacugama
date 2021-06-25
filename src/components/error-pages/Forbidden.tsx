import React from 'react';
import { ForbiddenImage } from './ForbiddenImage';
import { Box } from 'components/box';
import { useTheme } from 'providers';
import { HeadingMedium, ParagraphSmall } from 'baseui/typography';
import { Button, SecondaryButton } from 'components/button';
import { FlexItem } from 'components/flex-item';

export interface ForbiddenProps {
  title: string;
  subtitle: string;
  goBackButtonText: string;
  tryAgainButtonText: string;
  onBack?: () => void;
  onTryAgain?: () => void;
}

export const Forbidden = ({
  title,
  subtitle,
  goBackButtonText,
  tryAgainButtonText,
  onBack,
  onTryAgain,
}: ForbiddenProps) => {
  const {
    theme: {
      current: {
        colors: { primary },
        sizing: { scale300, scale600 },
      },
    },
  } = useTheme();
  return (
    <Box noBorder marginTop="150px" marginBottom="150px">
      <ForbiddenImage />
      <Box alignSelf="center" noBorder width="300px" margin="auto">
        <HeadingMedium
          overrides={{
            Block: {
              style: {
                textAlign: 'center',
                color: primary,
                marginBottom: scale300,
                marginTop: scale600,
              },
            },
          }}
        >
          {title}
        </HeadingMedium>
        <ParagraphSmall
          overrides={{
            Block: {
              style: {
                textAlign: 'center',
              },
            },
          }}
        >
          {subtitle}
        </ParagraphSmall>
        <FlexItem>
          <Button
            onClick={onBack}
            overrides={{
              BaseButton: {
                style: {
                  marginRight: scale300,
                },
              },
            }}
          >
            {goBackButtonText}
          </Button>
          <SecondaryButton onClick={onTryAgain} kind="secondary">
            {tryAgainButtonText}
          </SecondaryButton>
        </FlexItem>
      </Box>
    </Box>
  );
};
