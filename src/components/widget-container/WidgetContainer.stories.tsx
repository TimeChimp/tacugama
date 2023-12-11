import React from 'react';
import { WidgetContainer as WidgetContainerComponent } from './WidgetContainer';
import { Story, Meta } from '@storybook/react/types-6-0';
import { WidgetContainerProps } from './types';
import { Button } from '../button';
import { AddLineIcon } from '../icons';
import { ButtonKind } from '../../models';
import { ParagraphSmall } from '../typography';

export default {
  title: 'Components/WidgetContainer',
  component: WidgetContainerComponent,
} as Meta;

const WidgetContainerTemplate: Story<WidgetContainerProps> = (args) => (
  <WidgetContainerComponent {...args}>
    <ParagraphSmall>Widget wrapper</ParagraphSmall>
  </WidgetContainerComponent>
);

export const Default = WidgetContainerTemplate.bind({});
Default.args = {
  title: 'Default widget wrapper',
};

const WidgetContainerButtonTemplate: Story<WidgetContainerProps> = (args) => (
  <WidgetContainerComponent {...args}>
    <ParagraphSmall>Widget wrapper</ParagraphSmall>
  </WidgetContainerComponent>
);

export const ButtonWrapper = WidgetContainerButtonTemplate.bind({});
ButtonWrapper.args = {
  title: 'Button widget wrapper',
  customButton: (
    <Button kind={ButtonKind.tertiary} startEnhancer={<AddLineIcon />}>
      New
    </Button>
  ),
};
