import React from 'react';
import { StyledSideNavItem, StyledSideNavItemIcon, StyledSideNavItemTitle } from './styles';
import { SideNavItemProps } from './types';
import { LabelMedium } from '../typography';
import { useTheme } from '../../providers';
import { XCircle } from '@phosphor-icons/react';

export const SideNavItem = ({ id, icon: Icon, title, isRightAlign, onClick, hasError }: SideNavItemProps) => {
  const {
    theme: {
      current: {
        sizing: { scale700 },
        colors: { primary },
        customColors: { red0 },
      },
    },
  } = useTheme();

  return (
    <StyledSideNavItem onClick={onClick} $isRightAlign={isRightAlign} data-test-id={`nav-link-${id}`}>
      {Icon && (
        <StyledSideNavItemIcon>
          <Icon color={primary} size={scale700} />
        </StyledSideNavItemIcon>
      )}
      <StyledSideNavItemTitle $hasIcon={!!Icon} $isRightAlign={isRightAlign}>
        <LabelMedium color={primary}>{title}</LabelMedium>
      </StyledSideNavItemTitle>

      {hasError ? <XCircle color={red0} /> : null}
    </StyledSideNavItem>
  );
};
