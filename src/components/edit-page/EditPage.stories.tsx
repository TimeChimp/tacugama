import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { EditPage, EditPageProps } from './';
import { ParagraphSmall } from 'baseui/typography';
import { SideNavItem } from '../side-nav';
import { ContainerFull } from '../container';

export default {
  title: 'Components/Edit Page',
  component: EditPage,
} as Meta;

const Template: Story<EditPageProps> = () => {
  const getSideNavItems = (): SideNavItem[] => [
    {
      id: 'first-page',
      title: 'First page',
      component: () => <ParagraphSmall>First page</ParagraphSmall>,
    },
    {
      id: 'second-page',
      title: 'Second page',
      component: () => <ParagraphSmall>Second page</ParagraphSmall>,
    },
  ];

  return (
    <EditPage
      entity="team"
      sideNavItems={getSideNavItems()}
      title={'Edit Page'}
      returnToTitle={'Page'}
      onCancel={() => console.log('Cancel')}
      loading={false}
      onSave={async () => console.log('Save')}
      cancelText={'Cancel'}
      saveText={'Save'}
      backText={'Back'}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
