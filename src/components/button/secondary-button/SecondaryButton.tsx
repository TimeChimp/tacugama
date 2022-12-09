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
          sizing: { scale0, scale200, scale400, scale500, scale600, scale950 },
          borders: { radius200, border300 },
          customColors: { dark1, dark3, dark4, light2, light4, light7 },
          colors,
        },
      },
    } = useTheme();
    const { primaryB, borderTransparent } = colors;

    return (
      <Button
        ref={ref}
        kind="secondary"
        overrides={{
          Root: {
            style: {
              ...borderRadius(radius200),
              ...padding(scale200, scale500),
              fontWeight: 'normal',
              backgroundColor: light4,
              height: scale950,
              ...border({
                ...border300,
                borderColor: light2,
              }),
              color: dark1,
              ':hover': {
                borderColor: dark3,
                backgroundColor: light4,
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
              ':active': {
                borderColor: dark3,
                backgroundColor: light4,
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
