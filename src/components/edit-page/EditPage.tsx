import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SideNav, SideNavItem } from '../side-nav';
import { ButtonBox, SideMenuFlexGridItem } from './styles';
import { EditPageProps } from './types';
import { EditPageSkeleton } from './EditPageSkeleton';
import { useTheme } from '../../providers';
import { FlexItem } from '../flex-item';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { HeadingSmall } from '../typography';
import { Button } from '../button';
import { ButtonKind } from '../../models';
import { CaretLeftIcon } from '../icons';
import { Box } from '../box';

export const EditPage = ({
  sideNavItems,
  title,
  selectedTab,
  selectedSubTab,
  loading,
  updating,
  isSaveDisabled,
  saveText,
  backText,
  cancelText,
  onCancel,
}: EditPageProps) => {
  const [tab, setTab] = useState<string>(sideNavItems[0]?.id);
  const [secondaryTab, setSecondaryTab] = useState<string>();

  const {
    theme: {
      current: {
        sizing: { scale800, scale500, scale1600 },
      },
    },
  } = useTheme();

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

  const onCancelClick = () => {
    if (onCancel) {
      onCancel();
    }
  };

  if (loading) {
    return <EditPageSkeleton numberOfSideNavItems={sideNavItems.length} />;
  }

  return (
    <>
      <FlexItem justifyContent="space-between" marg1="0" marg2="0" marg3={scale500} marg4="0" flexWrap="nowrap">
        <HeadingSmall whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
          {title}
        </HeadingSmall>
        <ButtonBox>
          {saveText ? (
            <>
              <Button kind={ButtonKind.secondary} onClick={onCancelClick}>
                {cancelText}
              </Button>
              <Button isLoading={updating} disabled={isSaveDisabled} type="submit">
                {saveText}
              </Button>
            </>
          ) : (
            <Button kind={ButtonKind.secondary} onClick={onCancelClick} startEnhancer={<CaretLeftIcon />}>
              {backText}
            </Button>
          )}
        </ButtonBox>
      </FlexItem>
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
    </>
  );
};

export default EditPage;
