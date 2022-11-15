import React, { forwardRef } from 'react';
import { useTheme } from '../../providers';
import {
  border,
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  getButtonBackgroundColor,
  getButtonBackgroundHoverColor,
  margin,
  padding,
} from '../../utils';
import { Button as BaseButton, ButtonProps as BaseButtonProps, KIND, SIZE } from 'baseui/button';
import { ButtonType } from '../../models';

export interface ButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
  kind?: KIND[keyof KIND];
  testId?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      isLoading,
      disabled,
      buttonType = ButtonType.default,
      type = 'submit',
      kind = KIND.primary,
      size = SIZE.compact,
      testId,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale100, scale200, scale600, scale900 },
          borders: { radius200, border100 },
          colors,
        },
      },
    } = useTheme();
    const { primaryB, primary300, borderTransparent } = colors;

    return (
      <BaseButton
        type={type}
        ref={ref}
        kind={kind}
        size={size}
        data-test-id={testId}
        isLoading={isLoading}
        disabled={disabled || isLoading}
        overrides={{
          Root: {
            style: {
              ...borderRadius(radius200),
              ...padding(scale200, scale600),
              ...border({
                ...border100,
                borderColor: getButtonBackgroundColor(buttonType, colors),
              }),
              fontWeight: 'normal',
              height: scale900,
              backgroundColor: getButtonBackgroundColor(buttonType, colors),
              ':hover': {
                backgroundColor: getButtonBackgroundHoverColor(buttonType, colors),
                ...border({
                  ...border100,
                  borderColor: getButtonBackgroundHoverColor(buttonType, colors),
                }),
              },
              ':disabled': {
                backgroundColor: primary300,
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
      </BaseButton>
    );
  },
);

export default Button;
