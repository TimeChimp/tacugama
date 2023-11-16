import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SingularTag } from '.';
import { SingularTagProps } from './types';
import { customColors } from '../../theme/colors';

export default {
  title: 'Components/SingularTag',
  component: SingularTag,
} as Meta;

const Template: Story<SingularTagProps> = (args) => <SingularTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Important',
};

export const Approved = Template.bind({});
Approved.args = {
  value: 'Aproved',
  color: customColors.green1,
};
