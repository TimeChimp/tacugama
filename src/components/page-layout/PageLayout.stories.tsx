import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PageLayout, PageLayoutProps } from './PageLayout';
import { HeadingLarge } from 'components';

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
Default.args = {};

export const StringHeader = Template.bind({});
StringHeader.args = {
  pageTitle: 'Test',
};

export const ComponentHeader = Template.bind({});
ComponentHeader.args = {
  pageTitle: <HeadingLarge>Page Layout</HeadingLarge>,
};
