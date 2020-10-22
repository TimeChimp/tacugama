import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FlexGrid, FlexGridItem, FlexGridProps } from '.';

export default {
  title: 'Components/Flex Grid',
  component: FlexGrid,
} as Meta;

const Template: Story<FlexGridProps> = (args) => (
  <FlexGrid {...args}>
    <FlexGridItem>1</FlexGridItem>
    <FlexGridItem>2</FlexGridItem>
    <FlexGridItem>3</FlexGridItem>
    <FlexGridItem>4</FlexGridItem>
  </FlexGrid>
);

export const Default = Template.bind({});
Default.args = {
  flexGridColumnCount: 4,
  flexGridColumnGap: 'scale800',
  flexGridRowGap: 'scale800',
};
