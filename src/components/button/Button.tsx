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
import { Button as BaseButton, ButtonProps as BaseButtonProps, SIZE } from 'baseui/button';
import { ButtonKind, ButtonType } from '../../models';

export interface ButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
  buttonKind?: ButtonKind;
  testId?: string;
  height?: string;
  color?: string;
  isTransparent?: boolean;
  rootOverrides?: { [key: string]: number | string };
  backgroundColor?: string;
  borderColor?: string;
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
      buttonKind = ButtonKind.primary,
      size = SIZE.compact,
      testId,
      rootOverrides,
      color,
      isTransparent,
      backgroundColor,
      borderColor,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale200, scale300, scale400, scale500, scale600, scale750, scale950 },
          borders: { border100, border300, radius200 },
          colors: { primaryB, borderTransparent },
          customColors,
        },
      },
    } = useTheme();
    const { dark1, dark3, dark4, light2, light3, light4, light7, primaryMain } = customColors;

    const buttonOverrides = () => {
      switch (buttonKind) {
        case ButtonKind.primary:
          return {
            Root: {
              style: {
                ...borderRadius(radius200),
                ...padding(scale200, scale500),
                ...border({
                  ...border100,
                  borderColor: getButtonBackgroundColor(buttonType, customColors),
                }),
                fontWeight: 'normal',
                height: height ?? scale950,
                backgroundColor: backgroundColor ?? getButtonBackgroundColor(buttonType, customColors),
                color: color ?? light4,
                ':hover': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, customColors),
                  ...border({
                    ...border100,
                    borderColor: getButtonBackgroundHoverColor(buttonType, customColors),
                  }),
                },
                ':active': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, customColors),
                  ...border({
                    ...border100,
                    borderColor: getButtonBackgroundHoverColor(buttonType, customColors),
                  }),
                },
                ':disabled': {
                  borderColor: light2,
                  backgroundColor: backgroundColor ?? light7,
                  color: color ?? dark4,
                  ':hover': {
                    borderColor: light2,
                    backgroundColor: backgroundColor ?? light7,
                    color: color ?? dark4,
                  },
                },
                ...rootOverrides,
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
          };
        case ButtonKind.secondary:
          return {
            Root: {
              style: {
                ...borderRadius(radius200),
                ...padding(scale200, scale500),
                fontWeight: 'normal',
                backgroundColor: backgroundColor ?? light4,
                height: height ?? scale950,
                ...border({
                  ...border300,
                  borderColor: light2,
                }),
                color: color ?? dark1,
                ':hover': {
                  borderColor: dark3,
                  backgroundColor: backgroundColor ?? light4,
                },
                ':disabled': {
                  borderColor: light2,
                  backgroundColor: backgroundColor ?? light7,
                  color: color ?? dark4,
                  ':hover': {
                    borderColor: light2,
                    backgroundColor: backgroundColor ?? light7,
                    color: color ?? dark4,
                  },
                },
                ':active': {
                  borderColor: dark3,
                  backgroundColor: backgroundColor ?? light4,
                },
                ...rootOverrides,
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
          };
        case ButtonKind.tertiary:
          return {
            Root: {
              style: {
                height: height ?? scale750,
                backgroundColor: backgroundColor ?? light3,
                color: color ?? dark1,
                ...border({
                  ...border300,
                  borderColor: light2,
                }),
                ...borderRadius(radius200),
                ...padding(scale300),
                ':hover': {
                  backgroundColor: backgroundColor ?? light3,
                  borderColor: dark3,
                },
                ':active': {
                  backgroundColor: backgroundColor ?? light3,
                },
                ':disabled': {
                  borderColor: light2,
                  backgroundColor: backgroundColor ?? light7,
                  color: color ?? dark4,
                  ':hover': {
                    borderColor: light2,
                    backgroundColor: backgroundColor ?? light7,
                    color: color ?? dark4,
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
          };
        case ButtonKind.minimal:
          return {
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
                  color: color ?? dark4,
                  ':hover': {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    color: color ?? dark4,
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
          };
        case ButtonKind.quarternary:
          return {
            Root: {
              style: {
                height: height ?? scale750,
                ...borderRadius(radius200),
                ...padding(scale300),
                ...border({
                  ...border100,
                  borderColor: getButtonBackgroundColor(buttonType, customColors),
                }),
                fontWeight: 'normal',
                backgroundColor: backgroundColor ?? getButtonBackgroundColor(buttonType, customColors),
                color: color ?? light4,
                ':hover': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, customColors),
                  ...border({
                    ...border100,
                    borderColor: getButtonBackgroundHoverColor(buttonType, customColors),
                  }),
                },
                ':active': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, customColors),
                  ...border({
                    ...border100,
                    borderColor: getButtonBackgroundHoverColor(buttonType, customColors),
                  }),
                },
                ':disabled': {
                  borderColor: light2,
                  backgroundColor: backgroundColor ?? light7,
                  color: color ?? dark4,
                  ':hover': {
                    borderColor: light2,
                    backgroundColor: backgroundColor ?? light7,
                    color: color ?? dark4,
                  },
                },
                ...rootOverrides,
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
          };
      }
    };

    return (
      <BaseButton
        type={type}
        ref={ref}
        size={size}
        data-test-id={testId}
        isLoading={isLoading}
        disabled={disabled || isLoading}
        overrides={buttonOverrides()}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  },
);

export default Button;
