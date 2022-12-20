import React from 'react';
import { border, borderRadius, margin, padding } from '../../../utils';
import { useTheme } from '../../../providers';
import { ModalButton } from 'baseui/modal';
import { SecondaryModalButtonProps } from './types';
import { ButtonKind } from '../types';
import { CustomThemeType } from '../../../models';

export const SecondaryModalButton = ({ children, size = 'compact', ...rest }: SecondaryModalButtonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale500, scale950 },
        borders: { radius200, border300 },
        customColors: { dark1, dark3, dark4, light2, light4, light7 },
      },
    },
  } = useTheme();

  return (
    <ModalButton
      kind={ButtonKind.Secondary}
      size={size}
      {...rest}
      overrides={{
        BaseButton: {
          style: ({ $theme }: { $theme: CustomThemeType }) => {
            return {
              ...border({
                ...border300,
                borderColor: light2,
              }),
              ...borderRadius(radius200),
              ...padding(scale200, scale500),
              height: scale950,
              fontWeight: 'normal',
              boxSizing: 'border-box',
              backgroundColor: light4,
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
              ':not(:last-child)': {
                ...margin('0', $theme.sizing.scale300, '0', '0'),
              },
            };
          },
        },
      }}
    >
      {children}
    </ModalButton>
  );
};
