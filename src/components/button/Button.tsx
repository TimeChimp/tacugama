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
import { ButtonKind, ButtonType, ButtonShape } from '../../models';
import { ButtonProps } from './types';

const transitionProperties = {
  transitionProperty: 'all',
  transitionDuration: '0.2s',
  transitionTimingFunction: 'ease-in-out',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      height,
      width,
      isLoading,
      disabled,
      buttonType = ButtonType.default,
      type = 'button',
      kind = ButtonKind.primary,
      size = SIZE.compact,
      shape = ButtonShape.default,
      testId,
      rootOverrides,
      color,
      backgroundColor,
      borderColor,
      cursorType,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale100, scale200, scale300, scale400, scale500, scale600, scale800 },
          borders: { border100, border300, radius200 },
          colors,
          customColors,
          customSizing: { scale50, scale825, scale975 },
          typography: { ParagraphSmall },
        },
      },
    } = useTheme();
    const { primaryB, borderTransparent, primary } = colors;
    const { dark1, dark3, dark4, light2, light4, light7 } = customColors;

    const getButtonHeight = () => {
      if (kind === ButtonKind.primary || kind === ButtonKind.secondary) {
        return height ?? scale975;
      }

      if (kind === ButtonKind.tertiary) {
        return height ?? scale825;
      }

      return height ?? scale800;
    };

    const getPadding = () => {
      if (kind === ButtonKind.primary || kind === ButtonKind.secondary) {
        if (shape === ButtonShape.square) {
          return padding(scale400);
        }
        return padding(scale200, scale500);
      }
      if (shape === ButtonShape.square) {
        return padding(scale50);
      }
      if (kind === ButtonKind.tertiary) {
        return padding(scale0, scale100);
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
                  borderColor: borderColor ?? getButtonBackgroundColor(buttonType, customColors, colors),
                }),
                fontWeight: 'normal',
                height: getButtonHeight(),
                ...(width && { width }),
                backgroundColor: backgroundColor ?? getButtonBackgroundColor(buttonType, customColors, colors),
                color: color ?? light4,
                ':hover': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, colors),
                  ...border({
                    ...border100,
                    borderColor: borderColor ?? getButtonBackgroundHoverColor(buttonType, colors),
                  }),
                },
                ':active': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, colors),
                  ...border({
                    ...border100,
                    borderColor: borderColor ?? getButtonBackgroundHoverColor(buttonType, colors),
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
                cursor: cursorType ?? 'pointer',
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
                ...(width && { width }),
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
                cursor: cursorType ?? 'pointer',
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
                ...ParagraphSmall,
                height: getButtonHeight(),
                ...(width && { width }),
                backgroundColor: backgroundColor ?? primaryB,
                color: color ?? dark1,
                ...border({
                  ...border300,
                  borderColor: borderColor ?? light2,
                }),
                ...borderRadius(radius200),
                ...getPadding(),
                ...transitionProperties,
                ':hover': {
                  backgroundColor: backgroundColor ?? primaryB,
                  borderColor: borderColor ?? dark4,
                  ...transitionProperties,
                },
                ':active': {
                  backgroundColor: backgroundColor ?? primaryB,
                  borderColor: borderColor ?? dark4,
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
                cursor: cursorType ?? 'pointer',
              },
            },
            StartEnhancer: {
              style: {
                ...margin('0', scale100, '0', '0'),
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
                ...(width && { width }),
                ...padding('0px'),
                ...borderRadius('0'),
                ...borderBottom(),
                backgroundColor: 'transparent',
                color: color ?? primary,
                height: height,
                ':hover': {
                  backgroundColor: 'transparent',
                },

                ':active': {
                  backgroundColor: 'transparent',
                },

                ':disabled': {
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                  color: color ?? dark4,
                },
                cursor: cursorType ?? 'pointer',
              },
            },
            StartEnhancer: {
              style: {
                ...margin('0', scale100, '0', '0'),
                ':disabled': {
                  color: dark4,
                },
              },
            },
            EndEnhancer: {
              style: {
                ...margin('0', '0', '0', scale100),
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
                ...(width && { width }),
                ...borderRadius(radius200),
                ...getPadding(),
                ...border({
                  ...border100,
                  borderColor: getButtonBackgroundColor(buttonType, customColors, colors),
                }),
                fontWeight: 'normal',
                backgroundColor: backgroundColor ?? getButtonBackgroundColor(buttonType, customColors, colors),
                color: color ?? light4,
                ':hover': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, colors),
                  ...border({
                    ...border100,
                    borderColor: getButtonBackgroundHoverColor(buttonType, colors),
                  }),
                },
                ':active': {
                  backgroundColor: backgroundColor ?? getButtonBackgroundHoverColor(buttonType, colors),
                  ...border({
                    ...border100,
                    borderColor: getButtonBackgroundHoverColor(buttonType, colors),
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
                cursor: cursorType ?? 'pointer',
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
        disabled={disabled}
        overrides={buttonOverrides()}
        {...rest}
      >
        {children}
      </BaseButton>
    );
  },
);

export default Button;
