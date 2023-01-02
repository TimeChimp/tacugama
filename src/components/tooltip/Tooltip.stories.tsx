import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { StatefulTooltip, TooltipProps } from '.';
import { PLACEMENT, TRIGGER_TYPE } from 'baseui/tooltip';

export default {
  title: 'Components/Tooltip',
  component: StatefulTooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <StatefulTooltip {...args} content={'Hello this is a tooltip'} showArrow returnFocus autoFocus popoverMargin={2}>
    Hover me
  </StatefulTooltip>
);

export const Default = Template.bind({});
Default.args = {
  placement: PLACEMENT.right,
  triggerType: TRIGGER_TYPE.hover,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1978%3A22501&t=mrz0KszIHApsFCKJ-4',
  },
};
