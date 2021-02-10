import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TcClock, Account as AccountIcon, Lock as LockIcon, Flag as FlagIcon } from './';
import { SVGProps } from './Icon';

export default {
  title: 'Components/Icons',
  component: TcClock,
} as Meta;

const ClockTemplate: Story<SVGProps> = (args) => <TcClock {...args} />;
const AccountTemplate: Story<SVGProps> = (args) => <AccountIcon {...args} />;
const LockTemplate: Story<SVGProps> = (args) => <LockIcon {...args} />;
const FlagTemplate: Story<SVGProps> = (args) => <FlagIcon {...args} />;

export const Clock = ClockTemplate.bind({});
Clock.args = {};

export const Account = AccountTemplate.bind({});
Clock.args = {};

export const Lock = LockTemplate.bind({});
Clock.args = {};

export const Flag = FlagTemplate.bind({});
Clock.args = {};
