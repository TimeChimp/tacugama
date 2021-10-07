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
  TagIcon,
  Crown as CrownIcon,
  CrownOutlined as CrownOutlinedIcon,
  Folder as FolderIcon,
  FolderAdd as FolderAddIcon,
  Info as InfoIcon,
  AddSquare as AddSquareIcon,
  FilesLabeled as FilesLabeledIcon,
  FileAttachment as FileAttachmentIcon,
  Attachment as AttachmentIcon,
  Communication as CommunicationIcon,
  Approve as ApproveIcon,
  Reject as RejectIcon,
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
const AttachmentTemplate: Story<SVGProps> = (args) => <AttachmentIcon {...args} />;
const CommunicationTemplate: Story<SVGProps> = (args) => <CommunicationIcon {...args} />;
const ApproveTemplate: Story<SVGProps> = (args) => <ApproveIcon {...args} />;
const RejectTemplate: Story<SVGProps> = (args) => <RejectIcon {...args} />;

export const Clock = ClockTemplate.bind({});
Clock.args = {
  size: '12',
};

export const Account = AccountTemplate.bind({});
Account.args = {
  size: '12',
};

export const Lock = LockTemplate.bind({});
Lock.args = {
  size: '12',
};

export const LockFilled = LockFilledTemplate.bind({});
LockFilled.args = {
  size: '12',
};

export const Flag = FlagTemplate.bind({});
Flag.args = {
  size: '12',
};

export const AuthLock = AuthLockTemplate.bind({});
AuthLock.args = {
  size: '12',
};

export const PhoneLock = PhoneLockTemplate.bind({});
PhoneLock.args = {
  size: '12',
};

export const Copy = CopyTemplate.bind({});
Copy.args = {
  size: '12',
};

export const Tag = TagTemplate.bind({});
Tag.args = {
  size: '12',
};

export const Crown = CrownTemplate.bind({});
Crown.args = {
  size: '12',
};

export const CrownOutlined = CrownOutlinedTemplate.bind({});
CrownOutlined.args = {
  size: '12',
};

export const Folder = FolderTemplate.bind({});
Folder.args = {
  size: '12',
};

export const FolderAdd = FolderAddTemplate.bind({});
FolderAdd.args = {
  size: '12',
};

export const Info = InfoTemplate.bind({});
Info.args = {
  size: '12',
};

export const AddSquare = AddSquareTemplate.bind({});
AddSquare.args = {
  size: '12',
};

export const FilesLabeled = FilesLabeledTemplate.bind({});
FilesLabeled.args = {
  size: '12',
};

export const FileAttachment = FileAttachmentTemplate.bind({});
FileAttachment.args = {
  size: '12',
};

export const Attachment = AttachmentTemplate.bind({});
Attachment.args = {
  size: '12',
};

export const Communication = CommunicationTemplate.bind({});
Communication.args = {
  size: '12',
};

export const Approve = ApproveTemplate.bind({});
Approve.args = {
  size: '12',
};

export const Reject = RejectTemplate.bind({});
Reject.args = {
  size: '12',
};
