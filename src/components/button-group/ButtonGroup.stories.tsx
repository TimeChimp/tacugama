import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonGroup } from './';
import { ButtonGroupProps } from './ButtonGroup';
import { Button } from 'components';

export default {
  title: 'Components/Button Group',
  component: ButtonGroup,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  shape: 'default',
  disabled: false,
};
