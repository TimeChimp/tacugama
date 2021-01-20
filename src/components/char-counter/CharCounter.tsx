import React from 'react';
import { margin } from '../../utils';
import { CustomThemeType } from '../../models';
import { themedStyled } from '../../theme';
import { ParagraphXSmall } from '../typography';

export interface CharCounterProps {
  visible?: boolean;
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

export const CharCounter = ({ charCount, title, visible = false }: CharCounterProps) => (
  <CharCounterWrapper>
    {visible && (
      <ParagraphXSmall
        overrides={{
          Block: {
            style: ({ $theme }: { $theme: CustomThemeType }) => ({
              color: $theme.customColors.red2,
              lineHeight: $theme.sizing.scale600,
            }),
          },
        }}
      >{`${title} (${charCount})`}</ParagraphXSmall>
    )}
  </CharCounterWrapper>
);
