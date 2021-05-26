import React from 'react';
import { useTheme } from '../../providers';
import { StyledNoRowsTemplate, StyledNoRowsTemplateContainer } from './styles';
import { HeadingSmall, ParagraphMedium } from '../typography';
import { NoRowsTemplateProps } from './types';

export const NoRowsTemplate = ({ translations }: NoRowsTemplateProps) => {
  const {
    theme: {
      current: {
        sizing: { scale900 },
        colors: { primary },
      },
    },
  } = useTheme();

  return (
    <StyledNoRowsTemplate>
      <StyledNoRowsTemplateContainer>
        <HeadingSmall color={primary} marginTop={scale900}>
          {translations.noRowsTitle}
        </HeadingSmall>
        <ParagraphMedium marginTop={scale900} marginBottom={scale900}>
          {translations.noRowsSubtext}
        </ParagraphMedium>
      </StyledNoRowsTemplateContainer>
    </StyledNoRowsTemplate>
  );
};

export default NoRowsTemplate;
