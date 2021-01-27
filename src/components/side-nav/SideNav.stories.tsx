import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Pencil } from '../icons/Pencil';

import { SideNav, SideNavProps } from '.';

export default {
  title: 'Components/Side nav',
  component: SideNav,
} as Meta;

const Template: Story<SideNavProps> = (args) => <SideNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: '1',
      icon: <Pencil />,
      title: 'Item 1',
    },
    {
      id: '2',
      icon: <Pencil />,
      title: 'Item 2',
      subItems: [
        {
          id: '2a',
          title: 'Item 2a',
        },
      ],
    },
  ],
};
