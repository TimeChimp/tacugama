import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EditPageContainer, EditPageContainerProps } from './';
import { ParagraphSmall } from '../typography';
import { FlexGridItem } from '../flex-grid';

export default {
  title: 'Components/Edit Container',
  component: EditPageContainer,
} as Meta;

const Template: Story<EditPageContainerProps> = (args) => {
  return (
    <EditPageContainer {...args}>
      <FlexGridItem>
        <ParagraphSmall>{'Page'}</ParagraphSmall>
      </FlexGridItem>
    </EditPageContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Edit Page',
  footerButtonTitle: 'Save',
  onFooterButtonClick: () => console.log('Save'),
  footerButtonIsLoading: false,
};
