import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ClickableTag, ClickableTagProps } from '.';

export default {
  title: 'Components/Clickable tag',
  component: ClickableTag,
} as Meta;

const Template: Story<ClickableTagProps> = (args) => <ClickableTag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tag',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick: () => {},
};
