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
  ArrowDown as ArrowDownIcon,
  Drag as DragIcon,
  EmptyCalendar as EmptyCalendarIcon,
  QuestionMark as QuestionMarkIcon,
  Star as StarIcon,
  Eye as EyeIcon,
  Asterisk as AsteriskIcon,
  Play as PlayIcon,
  Stop as StopIcon,
  OpenNew as OpenNewIcon,
  Checkmark as CheckmarkIcon,
  Check as CheckIcon,
  Cross as CrossIcon,
  TimeClockSuccess as TimeClockSuccessIcon,
  Text as TextIcon,
  Schedule as ScheduleIcon,
  Unpublished as UnpublishedIcon,
  Refresh as RefreshIcon,
  LocationMarker as LocationMarkerIcon,
  WarningTriangleFull as WarningTriangleFullIcon,
  TaFilter as TaFilterIcon,
  Position as PositionIcon,
  LocationPoint as LocationPointIcon,
  TagOutlined as TagOutlinedIcon,
  CalendarOutlined as CalendarOutlinedIcon,
  ClockOutlined as ClockOutlinedIcon,
  AppleOutlined as AppleOutlinedIcon,
  EmployeeOutlined as EmployeeOutlinedIcon,
  PositionOutlined as PositionOutlinedIcon,
  LocationOutlined as LocationOutlinedIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  CheckmarkOutlined as CheckmarkOutlinedIcon,
  ExclamationMark as ExclamationMarkIcon,
  Hospital as HospitalIcon,
} from './';
import { SVGProps } from './icon/Icon';

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
const ArrowDownTemplate: Story<SVGProps> = (args) => <ArrowDownIcon {...args} />;
const DragTemplate: Story<SVGProps> = (args) => <DragIcon {...args} />;
const EmptyCalendarTemplate: Story<SVGProps> = (args) => <EmptyCalendarIcon {...args} />;
const QuestionMarkTemplate: Story<SVGProps> = (args) => <QuestionMarkIcon {...args} />;
const StarTemplate: Story<SVGProps> = (args) => <StarIcon {...args} />;
const EyeTemplate: Story<SVGProps> = (args) => <EyeIcon {...args} />;
const AsteriskTemplate: Story<SVGProps> = (args) => <AsteriskIcon {...args} />;
const PlayTemplate: Story<SVGProps> = (args) => <PlayIcon {...args} />;
const StopTemplate: Story<SVGProps> = (args) => <StopIcon {...args} />;
const OpenNewTemplate: Story<SVGProps> = (args) => <OpenNewIcon {...args} />;
const CheckmarkTemplate: Story<SVGProps> = (args) => <CheckmarkIcon {...args} />;
const CheckTemplate: Story<SVGProps> = (args) => <CheckIcon {...args} />;
const CrossTemplate: Story<SVGProps> = (args) => <CrossIcon {...args} />;
const TimeClockSuccessTemplate: Story<SVGProps> = (args) => <TimeClockSuccessIcon {...args} />;
const TextTemplate: Story<SVGProps> = (args) => <TextIcon {...args} />;
const ScheduleTemplate: Story<SVGProps> = (args) => <ScheduleIcon {...args} />;
const UnpublishedTemplate: Story<SVGProps> = (args) => <UnpublishedIcon {...args} />;
const RefreshTemplate: Story<SVGProps> = (args) => <RefreshIcon {...args} />;
const LocationMarkerTemplate: Story<SVGProps> = (args) => <LocationMarkerIcon {...args} />;
const WarningTriangleFullTemplate: Story<SVGProps> = (args) => <WarningTriangleFullIcon {...args} />;
const TaFilterTemplate: Story<SVGProps> = (args) => <TaFilterIcon {...args} />;
const PositionTemplate: Story<SVGProps> = (args) => <PositionIcon {...args} />;
const LocationPointTemplate: Story<SVGProps> = (args) => <LocationPointIcon {...args} />;
const TagOutlinedTemplate: Story<SVGProps> = (args) => <TagOutlinedIcon {...args} />;
const CalendarOutlinedTemplate: Story<SVGProps> = (args) => <CalendarOutlinedIcon {...args} />;
const ClockOutlinedTemplate: Story<SVGProps> = (args) => <ClockOutlinedIcon {...args} />;
const AppleOutlinedTemplate: Story<SVGProps> = (args) => <AppleOutlinedIcon {...args} />;
const EmployeeOutlinedTemplate: Story<SVGProps> = (args) => <EmployeeOutlinedIcon {...args} />;
const PositionOutlinedTemplate: Story<SVGProps> = (args) => <PositionOutlinedIcon {...args} />;
const LocationOutlinedTemplate: Story<SVGProps> = (args) => <LocationOutlinedIcon {...args} />;
const DescriptionOutlinedTemplate: Story<SVGProps> = (args) => <DescriptionOutlinedIcon {...args} />;
const CheckmarkOutlinedTemplate: Story<SVGProps> = (args) => <CheckmarkOutlinedIcon {...args} />;
const ExclamationMarkTemplate: Story<SVGProps> = (args) => <ExclamationMarkIcon {...args} />;
const HospitalTemplate: Story<SVGProps> = (args) => <HospitalIcon {...args} />;

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

export const EmptyCalendar = EmptyCalendarTemplate.bind({});
EmptyCalendar.args = {
  size: '16',
};

export const ArrowDown = ArrowDownTemplate.bind({});
ArrowDown.args = {
  size: '16',
};

export const Drag = DragTemplate.bind({});
Drag.args = {
  size: '16',
};

export const QuestionMark = QuestionMarkTemplate.bind({});
QuestionMark.args = {
  size: '16',
};

export const Star = StarTemplate.bind({});
Star.args = {
  size: '16',
};

export const Asterisk = AsteriskTemplate.bind({});
Asterisk.args = {
  size: '16',
};

export const Eye = EyeTemplate.bind({});
Eye.args = {
  size: '16',
};

export const Play = PlayTemplate.bind({});
Play.args = {
  size: '16',
};

export const Stop = StopTemplate.bind({});
Stop.args = {
  size: '16',
};

export const OpenNew = OpenNewTemplate.bind({});
OpenNew.args = {
  size: '16',
};

export const Checkmark = CheckmarkTemplate.bind({});
Checkmark.args = {
  size: '16',
};

export const Check = CheckTemplate.bind({});
Check.args = {
  size: '16',
};

export const Cross = CrossTemplate.bind({});
Cross.args = {
  size: '16',
};

export const TimeClockSuccess = TimeClockSuccessTemplate.bind({});
TimeClockSuccess.args = {
  size: '16',
};

export const Text = TextTemplate.bind({});
Text.args = {
  size: '16',
};

export const Schedule = ScheduleTemplate.bind({});
Schedule.args = {
  size: '16',
};

export const Unpublished = UnpublishedTemplate.bind({});
Unpublished.args = {
  size: '16',
};

export const Refresh = RefreshTemplate.bind({});
Refresh.args = {
  size: '16',
};

export const LocationMarker = LocationMarkerTemplate.bind({});
LocationMarkerTemplate.args = {
  size: '16',
};

export const WarningTriangleFull = WarningTriangleFullTemplate.bind({});
WarningTriangleFull.args = {
  size: '16',
};

export const TaFilter = TaFilterTemplate.bind({});
TaFilter.args = {
  size: '16',
};

export const Position = PositionTemplate.bind({});
Position.args = {
  size: '16',
};

export const LocationPoint = LocationPointTemplate.bind({});
LocationPoint.args = {
  size: '16',
};

export const TagOutlined = TagOutlinedTemplate.bind({});
TagOutlined.args = {
  size: '16',
};

export const CalendarOutlined = CalendarOutlinedTemplate.bind({});
CalendarOutlined.args = {
  size: '16',
};

export const ClockOutlined = ClockOutlinedTemplate.bind({});
ClockOutlined.args = {
  size: '16',
};

export const AppleOutlined = AppleOutlinedTemplate.bind({});
AppleOutlined.args = {
  size: '16',
};

export const EmployeeOutlined = EmployeeOutlinedTemplate.bind({});
EmployeeOutlined.args = {
  size: '16',
};

export const PositionOutlined = PositionOutlinedTemplate.bind({});
PositionOutlined.args = {
  size: '16',
};

export const LocationOutlined = LocationOutlinedTemplate.bind({});
LocationOutlined.args = {
  size: '16',
};

export const DescriptionOutlined = DescriptionOutlinedTemplate.bind({});
DescriptionOutlined.args = {
  size: '16',
};

export const CheckmarkOutlined = CheckmarkOutlinedTemplate.bind({});
CheckmarkOutlined.args = {
  size: '16',
};

export const ExclamationMark = ExclamationMarkTemplate.bind({});
ExclamationMark.args = {
  size: '16',
};

export const Hospital = HospitalTemplate.bind({});
Hospital.args = {
  size: '16',
};
