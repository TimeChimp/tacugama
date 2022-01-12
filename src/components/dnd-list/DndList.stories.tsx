import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DndList } from './';
import { DndListProps } from './types';
import { ParagraphLarge } from 'baseui/typography';

export default {
  title: 'Components/Drag-and-drop List',
  component: DndList,
} as Meta;

const Template: Story<DndListProps> = (args) => <DndList {...args}></DndList>;

export const Default = Template.bind({});
Default.args = {
  items: [
    <ParagraphLarge>Item 1</ParagraphLarge>,
    <ParagraphLarge>Item 2</ParagraphLarge>,
    <ParagraphLarge>Item 3</ParagraphLarge>,
  ],
  setItems: (items: any[]) => {
    console.log(items);
  },
};
