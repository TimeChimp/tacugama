import { ReactNode } from 'react';
import { SideNavItem } from 'components/side-nav';
import { UseFormReset } from 'react-hook-form';
import { ButtonProps } from '../button';
import { CustomThemeType } from '../../models';

export interface EditPageSkeletonProps {
  numberOfSideNavItems?: number;
}

export interface EditPageProps {
  loading?: boolean;
  updating?: boolean;
  entity: string;
  title: string | undefined;
  selectedTab?: string;
  selectedSubTab?: string;
  returnToTitle?: string | null;
  sideNavItems: SideNavItem[];
  onCancel?: () => void;
  onSave?: () => Promise<void>;
  isSaveDisabled?: boolean;
  cancelText: string;
  saveText: string;
  backText: string;
}

export interface RouterPromptProps<T> {
  show: boolean | undefined;
  reset?: UseFormReset<T>;
}

export interface EditPageContainerProps<T> {
  title: string;
  fullWidth?: boolean;
  width?: string;
  children: ReactNode;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  headerButtonTitle?: string;
  onHeaderButtonClick?: () => void;
  footerButtonTitle?: string;
  footerButtonIsLoading?: boolean;
  footerButtonType?: 'button' | 'submit' | 'reset';
  onFooterButtonClick?: () => Promise<void>;
  secondaryFooterButtonTitle?: string;
  secondaryFooterButtonProps?: ButtonProps;
  hasUnsavedChanges?: boolean;
  reset?: UseFormReset<T>;
  paddingLeftRight?: CustomThemeType;
  RouterPrompt: <T>({ show, reset }: RouterPromptProps<T>) => JSX.Element;
}
