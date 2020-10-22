import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PageLayout, PageLayoutProps } from './PageLayout';
import { HeadingSmall } from 'components';

export default {
  title: 'Components/Page Layout',
  component: PageLayout,
} as Meta;

const Template: Story<PageLayoutProps> = (args) => (
  <PageLayout {...args}>
    <div />
  </PageLayout>
);

export const Default = Template.bind({});
Default.args = {
  pageTitle: <HeadingSmall>Test title</HeadingSmall>,
};
