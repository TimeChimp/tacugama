import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box } from './Box';
import { BoxHeader } from './BoxHeader';
import { BoxBody } from './BoxBody';
import { BoxFooter } from './BoxFooter';

import { Button, BlockProps, HeadingSmall, Input } from 'components';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

const Template: Story<BlockProps> = (args) => (
  <Box {...args}>
    <BoxHeader>
      <HeadingSmall>Title</HeadingSmall>
    </BoxHeader>
    <BoxBody>
      <Input></Input>
    </BoxBody>
    <BoxFooter>
      <Button>Save</Button>
    </BoxFooter>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  width: '200px',
};
