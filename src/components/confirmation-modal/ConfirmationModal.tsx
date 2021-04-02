import React, { useState } from 'react';
import { Modal } from '../modal/Modal';
import { ModalHeader } from '../modal/ModalHeader';
import { SecondaryModalButton } from '../button/SecondaryModalButton';
import { ModalFooter } from '../modal/ModalFooter';
import { ModalBody } from '../modal/ModalBody';
import { HeadingSmall } from '../typography/HeadingSmall';
import { ParagraphSmall } from '../typography/ParagraphSmall';
import { ModalButton } from '../button/ModalButton';
import { ButtonType, ConfirmationModalType } from '../../models';

export interface ConfirmationModalProps {
  title: string;
  description: string | JSX.Element;
  type: ConfirmationModalType;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
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
}: ConfirmationModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleCancel = async () => {
    if (cancelOnClick) {
      await cancelOnClick();
    }
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    if (submitOnClick) {
      setLoading(true);
      await submitOnClick();
      setLoading(false);
    }
    setIsOpen(false);
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
        <SecondaryModalButton onClick={handleCancel}>{cancelLabel}</SecondaryModalButton>
        <ModalButton
          buttonType={getButtonType()}
          isLoading={loading}
          onClick={handleSubmit}
          testId={submitButtonTestId}
        >
          {submitLabel}
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
