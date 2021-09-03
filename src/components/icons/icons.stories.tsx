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
  Copy as CopyIcon,
  Tag as TagIcon,
  Crown as CrownIcon,
  CrownOutlined as CrownOutlinedIcon,
  Folder as FolderIcon,
  FolderAdd as FolderAddIcon,
  Info as InfoIcon,
  AddSquare as AddSquareIcon,
  FilesLabeled as FilesLabeledIcon,
  FileAttachment as FileAttachmentIcon,
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
const CopyTemplate: Story<SVGProps> = (args) => <CopyIcon {...args} />;
const TagTemplate: Story<SVGProps> = (args) => <TagIcon {...args} />;
const CrownTemplate: Story<SVGProps> = (args) => <CrownIcon {...args} />;
const CrownOutlinedTemplate: Story<SVGProps> = (args) => <CrownOutlinedIcon {...args} />;
const FolderTemplate: Story<SVGProps> = (args) => <FolderIcon {...args} />;
const FolderAddTemplate: Story<SVGProps> = (args) => <FolderAddIcon {...args} />;
const InfoTemplate: Story<SVGProps> = (args) => <InfoIcon {...args} />;
const AddSquareTemplate: Story<SVGProps> = (args) => <AddSquareIcon {...args} />;
const FilesLabeledTemplate: Story<SVGProps> = (args) => <FilesLabeledIcon {...args} />;
const FileAttachmentTemplate: Story<SVGProps> = (args) => <FileAttachmentIcon {...args} />;

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

export const Copy = CopyTemplate.bind({});
Copy.args = {};

export const Tag = TagTemplate.bind({});
Tag.args = {};

export const Crown = CrownTemplate.bind({});
Crown.args = {};

export const CrownOutlined = CrownOutlinedTemplate.bind({});
CrownOutlined.args = {};

export const Folder = FolderTemplate.bind({});
Folder.args = {};

export const FolderAdd = FolderAddTemplate.bind({});
FolderAdd.args = {};

export const Info = InfoTemplate.bind({});
Info.args = {};

export const AddSquare = AddSquareTemplate.bind({});
AddSquare.args = {};

export const FilesLabeled = FilesLabeledTemplate.bind({});
FilesLabeled.args = {};

export const FileAttachment = FileAttachmentTemplate.bind({});
FileAttachment.args = {};
