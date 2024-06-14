import React, { useMemo, MouseEvent, useCallback } from 'react';
import {
  StyledSideNavItemIcon,
  StyledSideNavItemTitle,
  StyledSideNavItem,
  StyledSideNavItemTitleBox,
  StyledSideNavGroupLink,
  BottomArrowWrapper,
  TripleDotsMenu,
} from './styles';
import { SideNavItemWithSubItemsProps } from './types';
import { LabelMedium } from '../typography';
import { Dropdown } from '../dropdown';
import { Block } from '../block';
import { useTheme } from '../../providers';
import { CaretDown, DotsThree, XCircle } from '@phosphor-icons/react';

export const SideNavGroupLink = ({
  icon: Icon,
  title,
  color,
  isExpanded,
  onClick,
  onToggleExpand,
  id,
  isActive,
  isClickable,
  handleNavigation,
  menuItems,
  hasError,
}: SideNavItemWithSubItemsProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale550, scale700 },
        customColors: { red0, dark3 },
      },
    },
  } = useTheme();

  const handleToggleExpand = useCallback(
    (e?: MouseEvent<HTMLDivElement>) => {
      e?.stopPropagation();
      onToggleExpand();
    },
    [onToggleExpand],
  );

  const content = useMemo(
    () => (
      <StyledSideNavItem onClick={onClick}>
        {Icon && (
          <StyledSideNavItemIcon>
            <Icon color={color} size={scale500} />
          </StyledSideNavItemIcon>
        )}
        <StyledSideNavItemTitleBox>
          <StyledSideNavItemTitle>
            <LabelMedium color={color}>{title}</LabelMedium>
          </StyledSideNavItemTitle>

          {menuItems ? (
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Dropdown items={menuItems}>
                <TripleDotsMenu>
                  <DotsThree weight="bold" size={scale550} color={dark3} />
                </TripleDotsMenu>
              </Dropdown>
            </div>
          ) : null}

          {hasError ? <XCircle color={red0} /> : null}

          <BottomArrowWrapper $isExpanded={isExpanded} onClick={handleToggleExpand}>
            <Block height={scale700} display="flex">
              <CaretDown color={dark3} />
            </Block>
          </BottomArrowWrapper>
        </StyledSideNavItemTitleBox>
      </StyledSideNavItem>
    ),
    [
      onClick,
      Icon,
      color,
      scale500,
      title,
      menuItems,
      scale550,
      dark3,
      hasError,
      red0,
      scale700,
      isExpanded,
      handleToggleExpand,
    ],
  );

  return isClickable ? (
    <StyledSideNavGroupLink onClick={() => handleNavigation(id)} $active={isActive}>
      {content}
    </StyledSideNavGroupLink>
  ) : (
    content
  );
};
