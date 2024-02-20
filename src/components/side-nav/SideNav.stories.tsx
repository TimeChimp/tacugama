import React, { useMemo, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SideNav, SideNavItem, SideNavProps } from '.';
import { ParagraphSmall } from '../typography';
import { Box } from '../box';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { SideMenuFlexGridItem } from '../edit-page';

export default {
  title: 'Components/Side nav',
  component: SideNav,
} as Meta;

enum Tab {
  General = 'General',
  Approval = 'Approval',
  Invoices = 'Invoices',
}

const Template: Story<SideNavProps> = () => {
  const [tab, setTab] = useState<string>(Tab.General);

  const sideNavItems: SideNavItem[] = [
    {
      id: Tab.General,
      title: Tab.General,
      subtitle: 'Subtitle',
      component: () => <ParagraphSmall>{Tab.General}</ParagraphSmall>,
    },
    {
      id: Tab.Approval,
      title: Tab.Approval,
      component: () => <ParagraphSmall>{Tab.Approval}</ParagraphSmall>,
      disabled: true,
      disabledText: 'Activate module in App Center',
      disabledOnClick: () => console.log('Redirect to App Center'),
    },
    {
      id: Tab.Invoices,
      title: Tab.Invoices,
      component: () => <ParagraphSmall>{Tab.Invoices}</ParagraphSmall>,
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
