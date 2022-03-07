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
  CircleCheckmark as CircleCheckmarkIcon,
  CircleCross as CircleCrossIcon,
  LineChartIcon,
  BarChartIcon,
  CircleClock as CircleClockIcon,
  CircleEuroCurrency as CircleEuroCurrencyIcon,
  CircleWallet as CircleWalletIcon,
  Done as DoneIcon,
  UserInvited as UserInvitedIcon,
  LockOpen as LockOpenIcon,
  Settings as SettingsIcon,
  WorkspaceSettings as WorkspaceSettingsIcon,
  UserStatus as UserStatusIcon,
  FormatPoints as FormatPointsIcon,
  Loader as LoaderIcon,
  LogoWithName as LogoWithNameIcon,
  CircleClockInverted as CircleClockInvertedIcon,
  Plane as PlaneIcon,
  Calculator as CalculatorIcon,
  OrganizationMenu as OrganizationMenuIcon,
  User as UserIcon,
  Clinic as ClinicIcon,
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
const CircleCheckmarkTemplate: Story<SVGProps> = (args) => <CircleCheckmarkIcon {...args} />;
const CircleCrossTemplate: Story<SVGProps> = (args) => <CircleCrossIcon {...args} />;
const LineChartIconTemplate: Story<SVGProps> = (args) => <LineChartIcon {...args} />;
const BarChartIconTemplate: Story<SVGProps> = (args) => <BarChartIcon {...args} />;
const CircleClockTemplate: Story<SVGProps> = (args) => <CircleClockIcon {...args} />;
const CircleEuroCurrencyTemplate: Story<SVGProps> = (args) => <CircleEuroCurrencyIcon {...args} />;
const CircleWalletTemplate: Story<SVGProps> = (args) => <CircleWalletIcon {...args} />;
const DoneTemplate: Story<SVGProps> = (args) => <DoneIcon {...args} />;
const UserInvitedTemplate: Story<SVGProps> = (args) => <UserInvitedIcon {...args} />;
const LockOpenTemplate: Story<SVGProps> = (args) => <LockOpenIcon {...args} />;
const SettingsTemplate: Story<SVGProps> = (args) => <SettingsIcon {...args} />;
const WorkspaceSettingsTemplate: Story<SVGProps> = (args) => <WorkspaceSettingsIcon {...args} />;
const UserStatusTemplate: Story<SVGProps> = (args) => <UserStatusIcon {...args} />;
const FormatPointsTemplate: Story<SVGProps> = (args) => <FormatPointsIcon {...args} />;
const LoaderTemplate: Story<SVGProps> = (args) => <LoaderIcon {...args} />;
const LogoWithNameTemplate: Story<SVGProps> = (args) => <LogoWithNameIcon {...args} />;
const CircleClockInvertedTemplate: Story<SVGProps> = (args) => <CircleClockInvertedIcon {...args} />;
const PlaneTemplate: Story<SVGProps> = (args) => <PlaneIcon {...args} />;
const ClinicTemplate: Story<SVGProps> = (args) => <ClinicIcon {...args} />;
const CalculatorTemplate: Story<SVGProps> = (args) => <CalculatorIcon {...args} />;
const OrganizationMenuTemplate: Story<SVGProps> = (args) => <OrganizationMenuIcon {...args} />;
const UserTemplate: Story<SVGProps> = (args) => <UserIcon {...args} />;

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

export const LockOpen = LockOpenTemplate.bind({});
LockOpen.args = {
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

export const CircleCheckmark = CircleCheckmarkTemplate.bind({});
CircleCheckmark.args = {
  size: '12',
};

export const CircleCross = CircleCrossTemplate.bind({});
CircleCross.args = {
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

export const LineChart = LineChartIconTemplate.bind({});
LineChart.args = {
  size: '12',
};

export const BarChart = BarChartIconTemplate.bind({});
BarChart.args = {
  size: '12',
};

export const CircleClock = CircleClockTemplate.bind({});
CircleClock.args = {
  size: '12',
};

export const CircleEuroCurrency = CircleEuroCurrencyTemplate.bind({});
CircleEuroCurrency.args = {
  size: '12',
};

export const CircleWallet = CircleWalletTemplate.bind({});
CircleWallet.args = {
  size: '12',
};

export const Done = DoneTemplate.bind({});
Done.args = {
  size: '54',
};

export const UserInvited = UserInvitedTemplate.bind({});
UserInvited.args = {
  size: '16',
};

export const Settings = SettingsTemplate.bind({});
Settings.args = {
  size: '16',
};

export const WorkspaceSettings = WorkspaceSettingsTemplate.bind({});
WorkspaceSettings.args = {
  size: '16',
};

export const UserStatus = UserStatusTemplate.bind({});
UserStatus.args = {
  size: '12',
};

export const FormatPoints = FormatPointsTemplate.bind({});
FormatPoints.args = {
  size: '12',
};

export const Loader = LoaderTemplate.bind({});
Loader.args = {
  size: '20',
  color: 'red',
};

export const LogoWithName = LogoWithNameTemplate.bind({});

export const CircleClockInverted = CircleClockInvertedTemplate.bind({});

export const Plane = PlaneTemplate.bind({});
Plane.args = {
  size: '16',
};

export const Calculator = CalculatorTemplate.bind({});
Calculator.args = {
  size: '16',
};

export const OrganizationMenu = OrganizationMenuTemplate.bind({});
OrganizationMenu.args = {
  size: '16',
};

export const User = UserTemplate.bind({});
User.args = {
  size: '16',
};

export const Clinic = ClinicTemplate.bind({});
Clinic.args = {
  size: '16',
};
