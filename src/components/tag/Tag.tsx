import React, { ReactNode } from 'react';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../providers';
import { padding } from '../../utils';

export interface TagProps {
  value?: string;
  children?: ReactNode;
}

export const Tag = ({ value }: TagProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale300 },
        customColors: { light2 },
        borders: { radius100 },
      },
    },
  } = useTheme();

  return (
    <ParagraphSmall
      overrides={{
        Block: {
          style: {
            display: 'inline-flex',
            background: light2,
            ...padding(scale0, scale300),
            borderRadius: radius100,
          },
        },
      }}
    >
      {value}
    </ParagraphSmall>
  );
};
