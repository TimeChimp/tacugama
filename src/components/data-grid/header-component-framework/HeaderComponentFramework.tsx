import React from 'react';
import { useTheme } from '../../../providers';
import { ParagraphSmall } from '../../typography';
import { HeaderComponentFrameworkProps } from '../types';

export const HeaderComponentFramework = ({ label }: HeaderComponentFrameworkProps) => {
  const {
    theme: {
      current: {
        customColors: { dark1 },
      },
    },
  } = useTheme();

  return <ParagraphSmall color={dark1}>{label}</ParagraphSmall>;
};

export default HeaderComponentFramework;
