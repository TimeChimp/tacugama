import React, { forwardRef } from 'react';
import { useTheme } from '../../providers';
import {
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  getButtonBackgroundColor,
  getButtonBackgroundHoverColor,
} from '../../utils';
import { Button as BaseButton, ButtonProps as BaseButtonProps, KIND, SIZE } from 'baseui/button';
import { ButtonType } from '../../models';

export interface ButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
  kind?: KIND[keyof KIND];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLoading,
      disabled,
      buttonType = ButtonType.default,
      kind = KIND.primary,
      size = SIZE.compact,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale600 },
          colors,
        },
      },
    } = useTheme();
    const { primaryB, primary300, borderTransparent } = colors;

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
              backgroundColor: getButtonBackgroundColor(buttonType, colors),
              ':hover': {
                backgroundColor: getButtonBackgroundHoverColor(buttonType),
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
