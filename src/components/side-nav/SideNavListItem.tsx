import React, { useState, useMemo, useCallback } from 'react';
import { SideNavListItemProps } from './types';
import { SideNavLink } from './SideNavLink';
import { SideNavGroupLink } from './SideNavGroupLink';
import { SideNavItem } from './SideNavItem';
import { useTheme } from '../../providers';
import { LabelXSmall } from '../typography';

export const SideNavListItem = ({
  item: {
    subItems = [],
    id: itemId,
    icon: Icon,
    title,
    subtitle,
    bottomSubtitle,
    onClick,
    color = '',
    isClickable,
    isRightAlign,
    menuItems,
    setExpanded,
    expanded,
    hasError,
  },
  activeItemId,
  activeSecondaryItemId,
  handleNavigation,
}: SideNavListItemProps) => {
  const {
    theme: {
      current: {
        colors: { primary, contentSecondary },
        customColors: { dark3 },
        sizing: { scale400, scale500 },
      },
    },
  } = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const toggleSideNavItem = () => {
    if (setExpanded) {
      setExpanded(expanded);
      return;
    }
    setIsExpanded(!isExpanded);
  };
  const isActive = useCallback(
    (id: string, secondaryId?: string) => {
      if (secondaryId || activeSecondaryItemId) {
        return id === activeSecondaryItemId && activeItemId === secondaryId;
      }

      return id === activeItemId;
    },
    [activeItemId, activeSecondaryItemId],
  );

  const getColor = useCallback(
    (id: string, secondaryId?: string) => (isActive(id, secondaryId) ? primary : contentSecondary),
    [isActive, primary, contentSecondary],
  );

  const navLink = useMemo(() => {
    if (onClick) {
      return (
        <SideNavItem
          id={itemId}
          onClick={onClick}
          title={title}
          icon={Icon}
          isRightAlign={isRightAlign}
          hasError={hasError}
        />
      );
    }
    return (
      <>
        {subtitle && (
          <LabelXSmall color={dark3} marginTop={scale500} marginBottom={scale400}>
            {subtitle.toUpperCase()}
          </LabelXSmall>
        )}
        <SideNavLink
          id={itemId}
          title={title}
          color={color || getColor(itemId)}
          isActive={isActive(itemId)}
          icon={Icon}
          hasError={hasError}
          handleNavigation={handleNavigation}
          isClickable={isClickable}
        />
        {bottomSubtitle && (
          <LabelXSmall color={dark3} marginTop={scale500} marginBottom={scale400}>
            {bottomSubtitle.toUpperCase()}
          </LabelXSmall>
        )}
      </>
    );
  }, [
    onClick,
    subtitle,
    bottomSubtitle,
    dark3,
    itemId,
    title,
    color,
    getColor,
    isActive,
    Icon,
    hasError,
    handleNavigation,
    isRightAlign,
  ]);

  const expandedItems = setExpanded ? !!expanded : isExpanded;
  return (
    <>
      {subItems.length ? (
        <SideNavGroupLink
          title={title}
          color={getColor(itemId)}
          icon={Icon}
          onClick={onClick}
          onToggleExpand={toggleSideNavItem}
          isExpanded={expandedItems}
          id={itemId}
          isActive={isActive(itemId)}
          isClickable={isClickable}
          handleNavigation={handleNavigation}
          menuItems={menuItems}
          hasError={hasError}
        />
      ) : (
        navLink
      )}
    </>
  );
};
