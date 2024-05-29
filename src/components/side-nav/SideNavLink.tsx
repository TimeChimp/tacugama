import React from 'react';
import { useTheme } from '../../providers';
import { ParagraphSmall } from '../typography';
import { StyledSideNavLink, StyledSideNavItemIcon, StyledSideNavItemTitle } from './styles';
import { SideNavLinkProps } from './types';
import { StatefulTooltip } from '../tooltip';
import { XCircle } from '@phosphor-icons/react';

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
  disabled,
  disabledText,
  disabledOnClick,
}: SideNavLinkProps) => {
  const {
    theme: {
      current: {
        sizing: { scale550 },
        customColors: { red0, light2 },
      },
    },
  } = useTheme();

  const navItemTitle = (color: string) => {
    return (
      <StyledSideNavItemTitle $hasIcon={!!Icon}>
        <ParagraphSmall color={color}>{title}</ParagraphSmall>
      </StyledSideNavItemTitle>
    );
  };

  return (
    <StyledSideNavLink
      onClick={() => (disabled && disabledOnClick ? disabledOnClick() : handleNavigation(id))}
      $active={isActive}
      data-test-id={`nav-link-${id}`}
      $isRightAlign={isRightAlign}
      $isClickable={isClickable}
      $isDisabled={disabled}
    >
      {Icon ? (
        <StyledSideNavItemIcon>
          <Icon color={disabled ? light2 : color} size={scale550} />
        </StyledSideNavItemIcon>
      ) : null}
      {disabled ? (
        <StatefulTooltip placement="top" showArrow triggerType="hover" content={disabledText}>
          <div>{navItemTitle(light2)}</div>
        </StatefulTooltip>
      ) : (
        navItemTitle(color)
      )}
      {hasError ? <XCircle color={red0} /> : null}
    </StyledSideNavLink>
  );
};
