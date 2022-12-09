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
  height?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      height,
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
          sizing: { scale0, scale200, scale400, scale500, scale600, scale950 },
          borders: { radius200, border100 },
          colors,
          customColors,
        },
      },
    } = useTheme();
    const { primaryB, borderTransparent } = colors;
    const { light2, light4, light7, dark4 } = customColors;

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
              ...padding(scale200, scale500),
              ...border({
                ...border100,
                borderColor: getButtonBackgroundColor(buttonType, colors),
              }),
              fontWeight: 'normal',
              height: height ?? scale950,
              backgroundColor: getButtonBackgroundColor(buttonType, colors),
              color: light4,
              ':hover': {
                backgroundColor: getButtonBackgroundHoverColor(buttonType, customColors),
                ...border({
                  ...border100,
                  borderColor: getButtonBackgroundHoverColor(buttonType, customColors),
                }),
              },
              ':active': {
                backgroundColor: getButtonBackgroundHoverColor(buttonType, customColors),
                ...border({
                  ...border100,
                  borderColor: getButtonBackgroundHoverColor(buttonType, customColors),
                }),
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
