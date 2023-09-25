import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Banner } from './Banner';
import { BannerProps, BannerType } from './types';
import { ParagraphSmall } from '../typography';

export default {
  title: 'Components/Banner',
  component: Banner,
} as Meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is just a nice bit of information',
};

export const Info = Template.bind({});
Info.args = {
  text: 'This is just a nice bit of information',
};

export const Error = Template.bind({});
Error.args = {
  type: BannerType.error,
  text: 'Oops',
};

export const Success = Template.bind({});
Success.args = {
  type: BannerType.success,
  text: 'Ooh yeaa!',
};

export const Warning = Template.bind({});
Warning.args = {
  type: BannerType.warning,
  text: 'Warning!',
};

const bannerText = 'Banner with custom ';

export const BannerWithLink = Template.bind({});
BannerWithLink.args = {
  type: BannerType.error,
  customText: (
    <ParagraphSmall>
      {bannerText}
      <a href="#">link</a>
    </ParagraphSmall>
  ),
};
