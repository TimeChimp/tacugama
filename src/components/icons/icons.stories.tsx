import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  TcClock,
  Account as AccountIcon,
  Lock as LockIcon,
  LockFilled as LockFilledIcon,
  Flag as FlagIcon,
  AuthLock as AuthLockIcon,
  PhoneLock as PhoneLockIcon,
} from './';
import { SVGProps } from './Icon';

export default {
  title: 'Components/Icons',
  component: TcClock,
} as Meta;

const ClockTemplate: Story<SVGProps> = (args) => <TcClock {...args} />;
const AccountTemplate: Story<SVGProps> = (args) => <AccountIcon {...args} />;
const LockTemplate: Story<SVGProps> = (args) => <LockIcon {...args} />;
const LockFilledTemplate: Story<SVGProps> = (args) => <LockFilledIcon {...args} />;
const FlagTemplate: Story<SVGProps> = (args) => <FlagIcon {...args} />;
const AuthLockTemplate: Story<SVGProps> = (args) => <AuthLockIcon {...args} />;
const PhoneLockTemplate: Story<SVGProps> = (args) => <PhoneLockIcon {...args} />;

export const Clock = ClockTemplate.bind({});
Clock.args = {};

export const Account = AccountTemplate.bind({});
Account.args = {};

export const Lock = LockTemplate.bind({});
Lock.args = {};

export const LockFilled = LockFilledTemplate.bind({});
LockFilled.args = {};

export const Flag = FlagTemplate.bind({});
Flag.args = {};

export const AuthLock = AuthLockTemplate.bind({});
AuthLock.args = {};

export const PhoneLock = PhoneLockTemplate.bind({});
PhoneLock.args = {};
