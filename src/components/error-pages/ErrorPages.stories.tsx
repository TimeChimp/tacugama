import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Forbidden, ForbiddenProps } from './Forbidden';

export default {
  title: 'Components/Error pages',
  component: Forbidden,
} as Meta;

const Template: Story<ForbiddenProps> = (args) => <Forbidden {...args} />;
export const ForbiddenPage = Template.bind({});
ForbiddenPage.args = {
  title: 'The door is locked.',
  subtitle: "This area is under lock and key, and you don't have the the right permissions.",
  goBackButtonText: 'Go back',
  tryAgainButtonText: 'Try again',
};
