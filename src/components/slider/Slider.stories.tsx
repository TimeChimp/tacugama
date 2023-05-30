import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Slider } from '.';
import { SliderProps } from "baseui/slider";


export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta;

const Template: Story<SliderProps> = (args) => <Slider {...args}  />;

export const Default = Template.bind({});
Default.args = {};
