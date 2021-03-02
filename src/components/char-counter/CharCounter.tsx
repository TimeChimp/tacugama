import React from 'react';
import { margin } from '../../utils';
import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';
import { ParagraphXSmall } from '../typography';

export interface CharCounterProps {
  error?: boolean;
  charCount: number;
  title: string;
}

export const CharCounterWrapper = themedStyled('div', ({ $theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  textAlign: 'right',
  justifyContent: 'flex-end',
  height: $theme.sizing.scale600,
  ...margin($theme.sizing.scale100, '0'),
}));

export const CharCounter = ({ charCount, title, error = false }: CharCounterProps) => (
  <CharCounterWrapper>
    <ParagraphXSmall
      overrides={{
        Block: {
          style: ({ $theme }: { $theme: CustomThemeType }) => ({
            color: error ? $theme.customColors.red2 : $theme.customColors.dark4,
            lineHeight: $theme.sizing.scale600,
          }),
        },
      }}
    >
      {error ? `${title} (${charCount})` : title}
    </ParagraphXSmall>
  </CharCounterWrapper>
);
