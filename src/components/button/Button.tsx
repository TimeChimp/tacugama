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
import { Button as BaseButton, SIZE } from 'baseui/button';
import { ButtonKind, ButtonType } from '../../models';
import { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      height,
      isLoading,
      disabled,
      buttonType = ButtonType.default,
      type = 'submit',
      kind = ButtonKind.primary,
      size = SIZE.compact,
      shape = 'default',
      testId,
      rootOverrides,
      color,
      isLink,
      backgroundColor,
      borderColor,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale200, scale300, scale400, scale500, scale600, scale800 },
          borders: { border100, border300, radius200 },
          colors: { primaryB, borderTransparent },
          customColors,
        },
      },
    } = useTheme();
    const { dark1, dark3, dark4, light2, light3, light4, light7, primaryMain } = customColors;

    const getButtonHeight = () => {
      if (kind === ButtonKind.primary || kind === ButtonKind.secondary) {
        return height ?? '38px'; // NOTE: Value does not exist in theme
      }
      return height ?? scale800;
    };

    const getPadding = () => {
      if (kind === ButtonKind.primary || kind === ButtonKind.secondary) {
        if (shape === 'square') {
          return padding(scale400);
        }
        return padding(scale200, scale500);
      }
      if (shape === 'square') {
        return padding('3px'); // NOTE: Value does not exist in theme
      }
      return padding(scale300);
    };

    const buttonOverrides = () => {
      switch (kind) {
        case ButtonKind.primary:
          return {
            Root: {
              style: {
                ...borderRadius(radius200),
                ...getPadding(),
                ...border({
                  ...border100,
                  borderColor: getButtonBackgroundColor(buttonType, customColors),
                }),
                fontWeight: 'normal',
                height: getButtonHeight(),
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
                ...getPadding(),
                fontWeight: 'normal',
                backgroundColor: backgroundColor ?? light4,
                height: getButtonHeight(),
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
                height: getButtonHeight(),
                backgroundColor: backgroundColor ?? light3,
                color: color ?? dark1,
                ...border({
                  ...border300,
                  borderColor: light2,
                }),
                ...borderRadius(radius200),
                ...getPadding(),
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
                ...borderRadius('0'),
                ...borderBottom({
                  ...border100,
                  borderStyle: 'solid',
                  borderColor: 'transparent',
                }),
                backgroundColor: 'transparent',
                color: color ?? primaryMain,
                height: height,
                ':hover': {
                  backgroundColor: 'transparent',
                  ...(isLink && {
                    ...borderBottom({
                      ...border100,
                      borderStyle: 'solid',
                      borderColor: primaryMain,
                    }),
                  }),
                },

                ':active': {
                  backgroundColor: 'transparent',
                },

                ':disabled': {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  color: color ?? dark4,
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
                height: getButtonHeight(),
                ...borderRadius(radius200),
                ...getPadding(),
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
