import { ModalProps } from '../modal';

export interface MultiPagesModalPage {
  component: JSX.Element;
  submitButtonDisabled?: boolean;
}

export interface MultiPagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  title: string | JSX.Element;
  pages: MultiPagesModalPage[];
  submitText: string;
  onSubmit?: () => void;
  noSubmit?: boolean;
  resetOnClose?: boolean;
  disableCounterTitle?: boolean;
  modalOverrides?: ModalProps['overrides'];
  nextPageDisabled?: boolean;
  validatePage?: () => Promise<boolean>;
  cancelText: string;
  previousText: string;
  nextText: string;
}
