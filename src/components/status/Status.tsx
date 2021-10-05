import React from 'react';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../providers';
import { borderRadius, padding } from '../../utils';
import { customColors } from '../../theme/colors';

export interface StatusProps {
  value: string;
  color?: string;
  fontColor?: string;
}

export const Status = ({ value, color = customColors.light2, fontColor = customColors.dark0 }: StatusProps) => {
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
