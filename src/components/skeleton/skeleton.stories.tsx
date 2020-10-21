import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Skeleton, SkeletonPropsT } from './';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

const Template: Story<SkeletonPropsT> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    animation: true,
    height: '30px',
    width: '100%',
};
