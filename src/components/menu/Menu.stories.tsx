import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { StatefulMenu, StatefulMenuProps } from './';

export default {
  title: 'Components/Menu',
  component: StatefulMenu,
} as Meta;

const Template: Story<StatefulMenuProps> = (args) => <StatefulMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [{ label: 'Item One' }, { label: 'Item Two' }, { label: 'Item Three' }, { label: 'Item Four' }],
};
