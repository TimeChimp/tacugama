import React, { useState } from 'react';
import { ModalHeader, ModalFooter, ModalBody, Modal } from '../modal';
import { HeadingSmall, ParagraphSmall } from '../typography';
import { Button } from '../button';
import { ButtonKind, ButtonType, ConfirmationModalType } from '../../models';
import { FlexItem } from '../flex-item';
import { Block } from '../block';
import { useTheme } from '../../providers';
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
  submitButtondisabled?: boolean;
  footerLeftComponent?: JSX.Element;
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
  submitButtondisabled,
  footerLeftComponent,
}: ConfirmationModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    theme: {
      current: {
        sizing: { scale300 },
      },
    },
  } = useTheme();

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
        <FlexItem justifyContent="space-between" alignItems="center" gap={scale300}>
          <Block>{footerLeftComponent}</Block>
          <Block display="flex" gridGap={scale300}>
            <Button kind={ButtonKind.secondary} onClick={handleCancel}>
              {cancelLabel}
            </Button>
            <Button
              buttonType={getButtonType()}
              isLoading={loading}
              onClick={handleSubmit}
              testId={submitButtonTestId}
              disabled={submitButtondisabled}
            >
              {submitLabel}
            </Button>
          </Block>
        </FlexItem>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
