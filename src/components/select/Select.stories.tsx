import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps, Value } from './Select';
import { ColorSelect, ColorSelectProps } from './color-select';
import { OPTIONS } from './test-data';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<Value>([]);
  return (
    <Select
      {...args}
      onChangeHandler={({ option }) => setSelectedValue(option ? [option] : [])}
      value={selectedValue}
    />
  );
};
Template.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};

const ColorSelectTemplate: Story<ColorSelectProps> = (args) => <ColorSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: OPTIONS,
  placeholder: 'Placeholder',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};

export const Multi = Template.bind({});
Multi.args = {
  options: OPTIONS,
  placeholder: 'Placeholder',
  multi: true,
};
Multi.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};

export const Loading = Template.bind({});
Loading.args = {
  options: OPTIONS,
  placeholder: 'Placeholder',
  isLoading: true,
};
Loading.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};

export const Color = ColorSelectTemplate.bind({});
Color.args = {
  placeholder: 'Placeholder',
  colors: OPTIONS,
};
Color.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1733%3A11543&t=NbmXDJ7K9Ilt6afV-4',
  },
};
