import React from 'react';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../providers';
import { borderRadius, padding } from '../../utils';

export interface StatusProps {
  value: string;
  color?: string;
  fontColor?: string;
}

export const Status = ({ value, color = '#E7E7E9', fontColor = '#0F1020' }: StatusProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale300 },
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
            background: color,
            ...padding(scale0, scale300),
            ...borderRadius(radius100),
            color: fontColor,
          },
        },
      }}
    >
      {value}
    </ParagraphSmall>
  );
};
