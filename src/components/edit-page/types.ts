import { ReactNode } from 'react';
import { SideNavItem } from 'components/side-nav';
import { UseFormReset } from 'react-hook-form';
import { ButtonProps } from '../button';

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

export interface RouterPromptProps {
  show?: boolean | undefined;
  reset: UseFormReset<any>;
}

export interface EditPageContainerProps {
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
  justifyFooterButtons?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  secondaryFooterButtonTitle?: string;
  secondaryFooterButtonProps?: ButtonProps;
  paddingLeftRight?: string;
  routerPrompt?: JSX.Element;
}
