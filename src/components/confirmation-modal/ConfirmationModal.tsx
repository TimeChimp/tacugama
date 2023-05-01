import React, { useState } from 'react';
import { ModalHeader, ModalFooter, ModalBody, Modal } from '../modal';
import { HeadingSmall, ParagraphSmall } from '../typography';
import { Button } from '../button';
import { ButtonKind, ButtonType, ConfirmationModalType } from '../../models';

export interface ConfirmationModalProps {
  title: string;
  description: string | JSX.Element;
  type: ConfirmationModalType;
  isOpen: boolean;
  /**
   * @deprecated The prop should not be used. Use onClose instead.
   */
  setIsOpen?: (open: boolean) => void;
  onClose: () => void;
  submitLabel: string;
  submitOnClick?: () => Promise<void>;
  cancelLabel: string;
  cancelOnClick?: () => Promise<void>;
  submitButtonTestId?: string;
}

export const ConfirmationModal = ({
  title,
  description,
  type = ConfirmationModalType.default,
  isOpen,
  setIsOpen,
  submitLabel,
  submitOnClick,
  cancelLabel,
  cancelOnClick,
  submitButtonTestId,
  onClose,
}: ConfirmationModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCancel = async () => {
    if (cancelOnClick) {
      await cancelOnClick();
    }
    if (setIsOpen) {
      setIsOpen(false);
    }
    onClose();
  };

  const handleSubmit = async () => {
    if (submitOnClick) {
      setLoading(true);
      await submitOnClick();
      setLoading(false);
    }
    if (setIsOpen) {
      setIsOpen(false);
    }
    onClose();
  };

  const getButtonType = () => {
    switch (type) {
      case ConfirmationModalType.default:
        return ButtonType.default;
      case ConfirmationModalType.danger:
        return ButtonType.error;
      case ConfirmationModalType.success:
        return ButtonType.success;
    }
  };

  return (
    <Modal name="confirmation-modal" isOpen={isOpen} onClose={handleCancel}>
      <ModalHeader>
        <HeadingSmall>{title}</HeadingSmall>
      </ModalHeader>
      <ModalBody>
        <ParagraphSmall>{description}</ParagraphSmall>
      </ModalBody>
      <ModalFooter>
        <Button kind={ButtonKind.secondary} onClick={handleCancel}>
          {cancelLabel}
        </Button>
        <Button buttonType={getButtonType()} isLoading={loading} onClick={handleSubmit} testId={submitButtonTestId}>
          {submitLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
