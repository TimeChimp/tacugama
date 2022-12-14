import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { StyledIconGrid, SVGProps } from '..';
import * as IconComponents from '.';

export default {
  title: 'Components/Icons',
} as Meta;

const DefaultTemplate: Story<SVGProps> = (args) => {
  return (
    <StyledIconGrid>
      {Object.keys(IconComponents).map((iconName) => {
        const Icon = IconComponents[iconName as keyof typeof IconComponents];
        return <Icon {...args} />;
      })}
    </StyledIconGrid>
  );
};

export const Default = DefaultTemplate.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1511%3A16944&t=oBIAxTUhqN3eRtIL-0',
  },
};
