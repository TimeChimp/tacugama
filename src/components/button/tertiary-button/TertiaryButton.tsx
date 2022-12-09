import { useTheme } from '../../../providers';
import { border, borderRadius, margin, padding } from '../../../utils';
import React, { forwardRef } from 'react';
import { Button } from '../Button';
import { TertiaryButtonProps } from './types';

export const TertiaryButton = forwardRef<HTMLButtonElement, TertiaryButtonProps>(
  ({ children, ...rest }: TertiaryButtonProps, ref) => {
    const {
      theme: {
        current: {
          sizing: { scale400, scale750, scale300 },
          borders: { radius200, border300 },
          customColors: { dark1, dark3, dark4, light2, light3, light7 },
        },
      },
    } = useTheme();

    return (
      <Button
        ref={ref}
        kind="tertiary"
        overrides={{
          Root: {
            style: {
              height: scale750,
              backgroundColor: light3,
              color: dark1,
              ...border({
                ...border300,
                borderColor: light2,
              }),
              ...borderRadius(radius200),
              ...padding(scale300),
              ':hover': {
                backgroundColor: light3,
                borderColor: dark3,
              },
              ':active': {
                backgroundColor: light3,
              },
              ':disabled': {
                borderColor: light2,
                backgroundColor: light7,
                color: dark4,
                ':hover': {
                  borderColor: light2,
                  backgroundColor: light7,
                  color: dark4,
                },
              },
            },
          },
          StartEnhancer: {
            style: {
              ...margin('0', scale400, '0', '0'),
              ':disabled': {
                color: dark4,
              },
            },
          },
        }}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);

export default TertiaryButton;
