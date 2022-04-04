import React from 'react';
import { ModalButton as BaseModalButton } from 'baseui/modal';
import { ButtonProps as BaseButtonProps } from 'baseui/button';
import {
  borderBottom,
  borderLeft,
  borderRadius,
  borderRight,
  borderTop,
  getButtonBackgroundColor,
  getButtonBackgroundHoverColor,
} from '../../../utils';
import { useTheme } from '../../../providers';
import { ButtonType, CustomThemeType } from '../../../models';

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
        sizing: { scale0, scale600 },
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
          style: ({ $theme }: { $theme: CustomThemeType }) => ({
            ...borderRadius($theme.borders.radius100),
            backgroundColor: getButtonBackgroundColor(buttonType, colors),
            ':hover': {
              backgroundColor: getButtonBackgroundHoverColor(buttonType, colors),
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
