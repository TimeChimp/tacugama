import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  ParagraphXSmall,
  ParagraphSmall,
  ParagraphMedium,
  LabelXSmall,
  LabelSmall,
  LabelMedium,
  HeadingXSmall,
  HeadingSmall,
  HeadingMedium,
  HeadingLarge,
  HeadingXLarge,
  HeadingXXLarge,
} from './';

export default {
  title: 'Components/Typography',
  component: HeadingSmall,
} as Meta;

const Template: Story = () => (
  <>
    <HeadingXXLarge>HeadingXXLarge</HeadingXXLarge>
    <HeadingXLarge>HeadingXLarge</HeadingXLarge>
    <HeadingLarge>HeadingLarge</HeadingLarge>
    <HeadingMedium>HeadingMedium</HeadingMedium>
    <HeadingSmall>HeadingSmall</HeadingSmall>
    <HeadingXSmall>HeadingXSmall</HeadingXSmall>
    <LabelMedium>LabelMedium</LabelMedium>
    <LabelSmall>LabelSmall</LabelSmall>
    <LabelXSmall>LabelXSmall</LabelXSmall>
    <ParagraphMedium>ParagraphMedium</ParagraphMedium>
    <ParagraphSmall>ParagraphSmall</ParagraphSmall>
    <ParagraphXSmall>ParagraphXSmall</ParagraphXSmall>
  </>
);

export const Default = Template.bind({});
Default.args = {};
