import React, { ReactNode } from 'react';
import { useTheme } from '../../providers';
import { FlexGridItem } from '../flex-grid';
import { themedStyled } from '../../theme';
import { margin } from '../../utils';

export const SideMenuFlexGridItem = ({
  children,
  isInsideModal = false,
  ...rest
}: {
  children?: ReactNode;
  isInsideModal?: boolean;
}) => {
  const {
    theme: {
      current: {
        customSizing: { scale5000, scale7500 },
      },
    },
  } = useTheme();

  return (
    <FlexGridItem
      overrides={{
        Block: {
          style: {
            width: isInsideModal ? scale5000 : scale7500,
            flexGrow: 0,
          },
        },
      }}
      {...rest}
    >
      {children}
    </FlexGridItem>
  );
};

export const ButtonBox = themedStyled('div', () => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const SkeletonNavContainer = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale200, '0'),
}));

export const SkeletonMainContainer = themedStyled('div', ({ $theme }) => ({
  ...margin($theme.sizing.scale700, '0'),
}));
