import React from 'react';
import { ModalButton as BaseModalButton } from 'baseui/modal';
import { ButtonProps as BaseButtonProps } from 'baseui/button';
import { borderBottom, borderLeft, borderRadius, borderRight, borderTop } from '../../utils';
import useTheme from '../../providers/ThemeProvider';

export const ModalButton = ({ children, size = 'compact', ...rest }: BaseButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale600 },
        colors: { primaryB, borderTransparent },
      },
    },
  } = useTheme();
  return (
    <BaseModalButton
      size={size}
      overrides={{
        BaseButton: {
          style: ({ $theme }) => ({
            ...borderRadius($theme.borders.radius100),
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
