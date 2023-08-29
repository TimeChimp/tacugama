import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Breadcrumbs, BreadcrumbsProps, StyledBreadcrumbItem } from './';
import { Block } from '../block';
import { HeadingXSmall } from '../typography';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: Story<BreadcrumbsProps> = () => (
  <Breadcrumbs>
    <StyledBreadcrumbItem onClick={() => console.log('Back')}>Parent Page</StyledBreadcrumbItem>
    <Block display="flex" justifyContent="center" alignItems="center">
      <HeadingXSmall>Current Page</HeadingXSmall>
    </Block>
  </Breadcrumbs>
);

export const Default = Template.bind({});
Default.args = {};
