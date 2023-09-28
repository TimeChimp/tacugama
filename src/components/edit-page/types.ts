import { ReactNode } from 'react';
import { SideNavItem } from 'components/side-nav';
import { UseFormReset } from 'react-hook-form';

export interface EditPageSkeletonProps {
  numberOfSideNavItems?: number;
}

export enum HeaderButtonTypeEditPageContainer {
  Add = 'add',
  Remove = 'remove',
}

export interface EditPageProps {
  loading?: boolean;
  updating?: boolean;
  title: string | undefined;
  selectedTab?: string;
  selectedSubTab?: string;
  returnToTitle?: string | null;
  sideNavItems: SideNavItem[];
  onCancel?: () => void;
  isSaveDisabled?: boolean;
  cancelText: string;
  saveText?: string;
  backText: string;
}

export interface RouterPromptProps {
  show?: boolean | undefined;
  reset: UseFormReset<any>;
}

export interface EditPageContainerProps {
  title: string;
  children: ReactNode;
  headerButtonTitle?: string;
  onHeaderButtonClick?: () => void;
  headerButtonType?: HeaderButtonTypeEditPageContainer;
  submitButtonText?: string;
  updating?: boolean;
  updatingHeaderButton?: boolean;
}
