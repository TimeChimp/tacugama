import { useTheme } from '../../../providers';
import { borderBottom, margin, padding } from '../../../utils';
import React, { forwardRef } from 'react';
import { Button } from '../Button';
import { MinimalButtonProps } from './types';

export const MinimalButton = forwardRef<HTMLButtonElement, MinimalButtonProps>(
  ({ children, isTransparent, height, color, ...rest }: MinimalButtonProps, ref) => {
    const {
      theme: {
        current: {
          sizing: { scale400 },
          borders: { border100 },
          customColors: { primaryMain, dark4, light2 },
        },
      },
    } = useTheme();

    return (
      <Button
        ref={ref}
        kind="minimal"
        overrides={{
          Root: {
            style: {
              ...padding('0px'),
              backgroundColor: 'transparent',
              color: color ?? primaryMain,
              height: height,
              ':hover': {
                backgroundColor: 'transparent',
                ...(!isTransparent && {
                  ...borderBottom({
                    ...border100,
                    borderStyle: 'solid',
                    borderColor: primaryMain,
                  }),
                }),
              },

              ':disabled': {
                backgroundColor: 'transparent',
                borderColor: light2,
                color: dark4,
                ':hover': {
                  backgroundColor: 'transparent',
                  borderColor: light2,
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

export default MinimalButton;
