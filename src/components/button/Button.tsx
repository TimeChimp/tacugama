import React, { forwardRef } from 'react';
import { useTheme } from '../../providers';
import { borderBottom, borderLeft, borderRadius, borderRight, borderTop } from '../../utils';
import { Button as BaseButton, ButtonProps as BaseButtonProps, KIND } from 'baseui/button';

export enum ButtonType {
  default = 'default',
  success = 'success',
  error = 'error',
}
export interface ButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
  kind?: KIND[keyof KIND];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, isLoading, disabled, buttonType = ButtonType.default, kind = KIND.primary, ...rest }: ButtonProps,
    ref,
  ) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale600 },
          colors: { primaryB, primary300, primary400, borderTransparent, backgroundPositive },
        },
      },
    } = useTheme();

    const getBackgroundColor = (type: ButtonType) => {
      const colors = {
        default: primary400,
        success: backgroundPositive,
        error: '#FF5C5C',
      };

      return colors[type];
    };

    const getBackgroundHoverColor = (type: ButtonType) => {
      const colors = {
        default: '#5147A8',
        success: '#06C270',
        error: '#FF3B3B',
      };

      return colors[type];
    };

    return (
      <BaseButton
        ref={ref}
        kind={kind}
        isLoading={isLoading}
        disabled={disabled || isLoading}
        overrides={{
          Root: {
            style: {
              ...borderRadius(scale0),
              backgroundColor: getBackgroundColor(buttonType),
              ':hover': {
                backgroundColor: getBackgroundHoverColor(buttonType),
              },
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
      </BaseButton>
    );
  },
);

export default Button;
