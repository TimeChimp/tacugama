import React from 'react';
import { border, borderRadius, padding } from '../../../utils';
import { useTheme } from '../../../providers';
import { TertiaryButton } from '../tertiary-button';
import { SquareButtonProps } from './types';

export const SquareButton = ({ children, borderColor, backgroundColor, ...props }: SquareButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale900 },
        colors: { primaryB },
        customColors: { light2, light7 },
        borders: { radius200, border300 },
      },
    },
  } = useTheme();

  return (
    <TertiaryButton
      size="compact"
      {...props}
      overrides={{
        BaseButton: {
          style: {
            backgroundColor: backgroundColor ?? primaryB,
            ...border({
              ...border300,
              borderColor: borderColor ?? light2,
            }),
            ...borderRadius(radius200),
            ...padding('0'),
            height: scale900,
            width: scale900,
            ':disabled': {
              backgroundColor: light7,
              ...border(border300),
            },
            ':hover': {
              backgroundColor: backgroundColor ?? primaryB,
              ...border({
                ...border300,
                borderColor: borderColor ?? light2,
              }),
            },
          },
        },
      }}
    >
      {children}
    </TertiaryButton>
  );
};
