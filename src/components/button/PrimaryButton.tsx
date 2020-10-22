import React, { forwardRef, ReactNode } from 'react';
import { useTheme } from '../../providers';
import { borderBottom, borderLeft, borderRadius, borderRight, borderTop } from '../../utils';
import { Button, ButtonProps } from '..';

export interface PrimaryButtonProps extends ButtonProps {
  children?: ReactNode;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, isLoading, disabled, ...rest }: PrimaryButtonProps, ref) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale600 },
          colors: { primaryB, borderTransparent, primary300 },
        },
      },
    } = useTheme();

    return (
      <Button
        ref={ref}
        kind="primary"
        isLoading={isLoading}
        disabled={disabled || isLoading}
        overrides={{
          Root: {
            style: {
              ...borderRadius(scale0),
              ':disabled': {
                backgroundColor: primary300,
                color: primaryB,
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

export default PrimaryButton;
