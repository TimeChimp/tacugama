import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Block, BlockProps } from '.';

export default {
  title: 'Components/Block',
  component: Block,
} as Meta;

const Template: Story<BlockProps> = (args) => <Block {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: ['20px', '40px', '80px', '160px'],
  backgroundColor: 'primary200',
};
