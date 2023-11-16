import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ColoredLabel } from '.';
import { ColoredLabelProps } from './types';
import { customColors } from '../../theme/colors';

export default {
  title: 'Components/ColoredLabel',
  component: ColoredLabel,
} as Meta;

const Template: Story<ColoredLabelProps> = (args) => <ColoredLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Important',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=6000%3A48161&mode=dev',
  },
};

export const Approved = Template.bind({});
Approved.args = {
  value: 'Approved',
  color: customColors.green1,
};
Approved.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=6000%3A48161&mode=dev',
  },
};

export const Submitted = Template.bind({});
Submitted.args = {
  value: 'Submitted',
  color: customColors.yellow5,
};
Submitted.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=6000%3A48161&mode=dev',
  },
};

export const Rejected = Template.bind({});
Rejected.args = {
  value: 'Rejected',
  color: customColors.red0,
};
Rejected.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=6000%3A48161&mode=dev',
  },
};

export const Open = Template.bind({});
Open.args = {
  value: 'Open',
  color: customColors.dark5,
};
Open.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=6000%3A48161&mode=dev',
  },
};

export const WrittenOff = Template.bind({});
WrittenOff.args = {
  value: 'Written off',
  color: customColors.blue1,
};
WrittenOff.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=6000%3A48161&mode=dev',
  },
};

export const Invoiced = Template.bind({});
Invoiced.args = {
  value: 'Invoiced',
  color: customColors.blue6,
};
Invoiced.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=6000%3A48161&mode=dev',
  },
};
