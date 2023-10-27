import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { SideMenuFlexGridItem } from './styles';
import { Box } from '../box';
import { SideNav, SideNavItem } from '../side-nav';
import { useTheme } from '../../providers';
import { EditPageContentProps } from './types';

export const EditPageContent = ({ sideNavItems, selectedTab, selectedSubTab }: EditPageContentProps) => {
  const {
    theme: {
      current: {
        sizing: { scale800, scale1600 },
      },
    },
  } = useTheme();
  const [tab, setTab] = useState<string>(sideNavItems[0]?.id);
  const [secondaryTab, setSecondaryTab] = useState<string>();

  const getAllSubItems = useCallback(() => {
    return sideNavItems.reduce((acc: SideNavItem[], item: SideNavItem) => {
      return [...acc, ...(item.subItems || [])];
    }, []);
  }, [sideNavItems]);

  const contentComponent = useMemo(() => {
    let navItem;
    const subItems = getAllSubItems();

    if (secondaryTab) {
      if (subItems.length) {
        navItem = subItems.find((item) => item.id === secondaryTab && item.secondaryId === tab);
      } else {
        navItem = sideNavItems.find((item) => item.id === tab && item.secondaryId === secondaryTab);
      }
    } else {
      navItem = sideNavItems.find(({ id }) => id === tab);
    }

    if (navItem?.component) {
      return <>{navItem.component()}</>;
    }

    return (subItems.length ? [...subItems, ...sideNavItems] : sideNavItems).map(({ id, component: Component }) =>
      Component ? <Component key={id} /> : null,
    );
  }, [sideNavItems, getAllSubItems, tab, secondaryTab]);

  const handleNavigation = (tab: string) => {
    setTab(tab);
    setSecondaryTab('');
  };

  const handleSecondaryTabNavigation = (tab: string, parentId: string) => {
    setSecondaryTab(tab);
    setTab(parentId);
  };

  useEffect(() => {
    if (selectedTab) {
      setTab(selectedTab);
    }
  }, [selectedTab]);

  useEffect(() => {
    if (selectedSubTab) {
      setSecondaryTab(selectedSubTab);
    }
  }, [selectedSubTab]);

  return (
    <FlexGrid flexGridColumnCount={2} flexGridColumnGap={scale800} flexGridRowGap={scale1600}>
      <SideMenuFlexGridItem>
        <Box>
          <SideNav
            items={sideNavItems}
            activeItemId={tab}
            activeSecondaryItemId={secondaryTab}
            handleSecondaryTabNavigation={handleSecondaryTabNavigation}
            handleNavigation={handleNavigation}
          />
        </Box>
      </SideMenuFlexGridItem>
      <FlexGridItem>{contentComponent}</FlexGridItem>
    </FlexGrid>
  );
};
