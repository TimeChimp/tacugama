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
  color?: string;
  isTransparent?: boolean;
  rootOverrides?: { [key: string]: number | string };
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
      rootOverrides,
      color,
      isTransparent,
      ...rest
    }: ButtonProps,
    ref,
  ) => {
    const {
      theme: {
        current: {
          sizing: { scale0, scale200, scale300, scale400, scale500, scale600, scale750, scale950 },
          borders: { border100, border300, radius200 },
          colors,
          customColors,
        },
      },
    } = useTheme();
    const { primaryB, borderTransparent } = colors;
    const { dark1, dark3, dark4, light2, light3, light4, light7, primaryMain } = customColors;

    const buttonOverrides = () => {
      switch (kind) {
        case KIND.primary:
          return {
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
        case KIND.secondary:
          return {
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
        case KIND.tertiary:
          return {
            Root: {
              style: {
                height: scale750,
                backgroundColor: light3,
                color: dark1,
                ...border({
                  ...border300,
                  borderColor: light2,
                }),
                ...borderRadius(radius200),
                ...padding(scale300),
                ':hover': {
                  backgroundColor: light3,
                  borderColor: dark3,
                },
                ':active': {
                  backgroundColor: light3,
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
          };
        case KIND.minimal:
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
                  color: dark4,
                  ':hover': {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
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
          };
      }
    };

    return (
      <BaseButton
        type={type}
        ref={ref}
        kind={kind}
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
