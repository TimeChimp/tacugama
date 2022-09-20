import React, { forwardRef } from 'react';
import { Button } from '../Button';
import {
  border,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  margin,
  padding,
} from '../../../utils';
import { SecondaryButtonProps } from './types';
import { useTheme } from '../../../providers';

export const SecondaryButton = forwardRef<HTMLButtonElement, SecondaryButtonProps>(
  ({ children, ...rest }: SecondaryButtonProps, ref) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale100, scale200, scale600 },
          borders: { radius200, border300 },
          colors,
        },
      },
    } = useTheme();
    const { primaryB, primary400, borderTransparent } = colors;

    return (
      <Button
        ref={ref}
        kind="secondary"
        overrides={{
          Root: {
            style: {
              ...borderRadius(radius200),
              ...padding(scale200, scale600),
              fontWeight: 'normal',
              backgroundColor: 'transparent',
              ...border({
                ...border300,
                borderColor: primary400,
              }),
              color: primary400,
              ':hover': {
                backgroundColor: primary400,
                color: primaryB,
              },
            },
          },
          StartEnhancer: {
            style: {
              ...margin('0', scale100, '0', '0'),
            },
          },
          LoadingSpinner: {
            style: {
              width: scale600,
              height: scale600,
              ...borderBottom({
                borderWidth: scale0,
                borderStyle: 'solid',
                borderColor: primaryB,
              }),
              ...borderLeft({
                borderWidth: scale0,
                borderStyle: 'solid',
                borderColor: primaryB,
              }),
              ...borderRight({
                borderWidth: scale0,
                borderStyle: 'solid',
                borderColor: primaryB,
              }),
              ...borderTop({
                borderWidth: scale0,
                borderStyle: 'solid',
                borderColor: borderTransparent,
              }),
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

export default SecondaryButton;
