import React from 'react';
import { useTheme } from '../../providers';
import { ErrorIcon } from '../icons';
import { LabelSmall } from '../typography';
import { StyledSideNavLink, StyledSideNavItemIcon, StyledSideNavItemTitle } from './styles';
import { SideNavLinkProps } from './types';

export const SideNavLink = ({
  id,
  isActive,
  icon: Icon,
  title,
  color,
  isRightAlign,
  hasError,
  handleNavigation,
  isClickable,
}: SideNavLinkProps) => {
  const {
    theme: {
      current: {
        sizing: { scale550 },
        customColors: { red0 },
      },
    },
  } = useTheme();

  return (
    <StyledSideNavLink
      onClick={() => handleNavigation(id)}
      $active={isActive}
      data-test-id={`nav-link-${id}`}
      $isRightAlign={isRightAlign}
      $isClickable={isClickable}
    >
      {Icon ? (
        <StyledSideNavItemIcon>
          <Icon color={color} size={scale550} />
        </StyledSideNavItemIcon>
      ) : null}
      <StyledSideNavItemTitle $hasIcon={!!Icon}>
        <LabelSmall color={color}>{title}</LabelSmall>
      </StyledSideNavItemTitle>

      {hasError ? <ErrorIcon color={red0} /> : null}
    </StyledSideNavLink>
  );
};
