import React, { useMemo, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SideNav, SideNavProps } from '.';
import { ParagraphSmall } from '../typography';
import { Box } from '../box';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { SideMenuFlexGridItem } from '../edit-page';
import { ContainerFull } from '../container';

export default {
  title: 'Components/Side nav',
  component: SideNav,
} as Meta;

enum Tab {
  Tab1 = 'Tab1',
  Tab2 = 'Tab2',
}

const Template: Story<SideNavProps> = () => {
  const [tab, setTab] = useState<string>(Tab.Tab1);

  const sideNavItems = [
    {
      id: Tab.Tab1,
      title: Tab.Tab1,
      component: () => <ParagraphSmall>{Tab.Tab1}</ParagraphSmall>,
    },
    {
      id: Tab.Tab2,
      title: Tab.Tab2,
      component: () => <ParagraphSmall>{Tab.Tab2}</ParagraphSmall>,
    },
  ];

  const contentComponent = useMemo(() => {
    const navItem = sideNavItems.find(({ id }) => id === tab);

    if (navItem?.component) {
      return <>{navItem.component()}</>;
    }
  }, [tab]);

  return (
    <FlexGrid flexGridColumnCount={2} flexGridColumnGap="scale900" flexGridRowGap="scale1600">
      <SideMenuFlexGridItem>
        <Box maxHeight="90vh" overflow="auto">
          <SideNav activeItemId={tab} items={sideNavItems} handleNavigation={(nextTab) => setTab(nextTab)} />
        </Box>
      </SideMenuFlexGridItem>

      <FlexGridItem>{contentComponent}</FlexGridItem>
    </FlexGrid>
  );
};

export const Default = Template.bind({});
