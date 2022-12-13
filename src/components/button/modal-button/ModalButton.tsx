import React from 'react';
import { ModalButton as BaseModalButton } from 'baseui/modal';
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
import { ModalButtonProps } from './types';

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
        sizing: { scale0, scale200, scale600, scale950 },
        colors: { primaryB, borderTransparent },
        customColors,
      },
    },
  } = useTheme();

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
            height: scale950,
            backgroundColor: getButtonBackgroundColor(buttonType, customColors),
            ...border({
              ...$theme.borders.border300,
              borderColor: getButtonBackgroundColor(buttonType, customColors),
            }),
            ':hover': {
              backgroundColor: getButtonBackgroundHoverColor(buttonType, customColors),
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
