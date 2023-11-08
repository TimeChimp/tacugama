import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Box } from './Box';
import { BoxHeader } from './box-header';
import { BoxBody } from './box-body';
import { BoxFooter } from './box-footer';

import { Button, BoxProps, HeadingSmall, Input } from '../../components';

export default {
  title: 'Components/Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => (
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

export const NoBorder = Template.bind({});
NoBorder.args = {
  width: '200px',
  noBorder: true,
};
