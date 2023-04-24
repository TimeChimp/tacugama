import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Toggle, ToggleProps } from './';
import { ToggleSize } from 'components';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => {
return (
<>
<Toggle {...args} />
<Toggle checked={false} />
<Toggle {...args} disabled />
<Toggle {...args} checked={false} disabled />
</>)};

export const Default = Template.bind({});
Default.args = {
  checked: true,
  size: ToggleSize.small,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11187',
  },
};
