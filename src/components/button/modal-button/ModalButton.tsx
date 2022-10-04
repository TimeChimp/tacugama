import React from 'react';
import { ModalButton as BaseModalButton } from 'baseui/modal';
import { ButtonProps as BaseButtonProps } from 'baseui/button';
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
} from '../../../utils';
import { useTheme } from '../../../providers';
import { ButtonType, CustomThemeProps } from '../../../models';

export interface ModalButtonProps extends BaseButtonProps {
  buttonType?: ButtonType;
  testId?: string;
}

export const ModalButton = ({
  children,
  size = 'compact',
  buttonType = ButtonType.default,
  testId,
  ...rest
}: ModalButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale200, scale600 },
        colors,
      },
    },
  } = useTheme();
  const { primaryB, borderTransparent } = colors;

  return (
    <BaseModalButton
      size={size}
      data-test-id={testId}
      overrides={{
        BaseButton: {
          style: ({ $theme }: CustomThemeProps) => ({
            ...borderRadius($theme.borders.radius200),
            ...padding(scale200, scale600),
            fontWeight: 'normal',
            backgroundColor: getButtonBackgroundColor(buttonType, colors),
            ...border({
              ...$theme.borders.border300,
              borderColor: getButtonBackgroundColor(buttonType, colors),
            }),
            ':hover': {
              backgroundColor: getButtonBackgroundHoverColor(buttonType, colors),
            },
            ':not(:last-child)': {
              ...margin('0', $theme.sizing.scale300, '0', '0'),
            },
          }),
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
    </BaseModalButton>
  );
};

export default ModalButton;
