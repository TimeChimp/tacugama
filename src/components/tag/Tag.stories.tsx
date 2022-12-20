import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Tag } from '.';
import { TagProps, TagSize } from './types';
import { customColors } from '../../theme/colors';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Important',
  size: TagSize.small,
  closeable: false,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2896%3A26306&t=tHx4AtFBqz1T5TQB-4',
  },
};

export const Approved = Template.bind({});
Approved.args = {
  value: 'Approved',
  color: customColors.green0,
};
Approved.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2896%3A26306&t=tHx4AtFBqz1T5TQB-4',
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
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2896%3A26306&t=tHx4AtFBqz1T5TQB-4',
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
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2896%3A26306&t=tHx4AtFBqz1T5TQB-4',
  },
};

export const Open = Template.bind({});
Open.args = {
  value: 'Open',
  color: customColors.dark2,
};
Open.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2896%3A26306&t=tHx4AtFBqz1T5TQB-4',
  },
};

export const WrittenOff = Template.bind({});
WrittenOff.args = {
  value: 'Written off',
  color: customColors.purple2,
};
WrittenOff.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2896%3A26306&t=tHx4AtFBqz1T5TQB-4',
  },
};

export const Invoiced = Template.bind({});
Invoiced.args = {
  value: 'Invoiced',
  color: customColors.blue1,
};
Invoiced.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2896%3A26306&t=tHx4AtFBqz1T5TQB-4',
  },
};
