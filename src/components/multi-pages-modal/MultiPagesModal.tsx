import React, { useEffect, useMemo, useState } from 'react';
import { MultiPagesModalProps } from './types';
import { Modal, ModalBody, ModalFooter, ModalHeader, ModalSize } from '../modal';
import { Button } from '../button';
import { ButtonKind, ButtonType } from '../../models';

export const MultiPagesModal = ({
  isOpen,
  onClose,
  loading,
  title,
  pages,
  submitText,
  resetOnClose,
  disableCounterTitle = false,
  nextPageDisabled = false,
  noSubmit = false,
  onSubmit,
  validatePage,
  cancelText,
  previousText,
  nextText,
  modalName = 'multi-pages-modal',
}: MultiPagesModalProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (!isOpen && resetOnClose) {
      setCurrentPage(1);
    }
  }, [isOpen, resetOnClose]);

  const CurrentPageContent = useMemo(() => pages[currentPage - 1].component, [currentPage, pages]);

  const onNextPage = async () => {
    if (validatePage) {
      const isValidPage = await validatePage();
      if (isValidPage) {
        setCurrentPage((page) => page + 1);
      }
    } else {
      setCurrentPage((page) => page + 1);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={ModalSize.LARGE} name={modalName}>
      <form
        onSubmit={onSubmit}
        onKeyUp={(e) => {
          if (e.key === 'Enter' && currentPage !== 4) {
            onNextPage();
          }
        }}
      >
        <ModalHeader>
          {title}
          {!disableCounterTitle ? ` ${currentPage}/${pages.length}` : ''}
        </ModalHeader>
        <ModalBody>{isOpen ? CurrentPageContent : null}</ModalBody>
        <ModalFooter>
          {currentPage === 1 ? (
            <Button kind={ButtonKind.secondary} onClick={onClose}>
              {cancelText}
            </Button>
          ) : (
            <Button kind={ButtonKind.secondary} onClick={() => setCurrentPage((page) => page - 1)}>
              {previousText}
            </Button>
          )}
          {!noSubmit ? (
            <>
              {currentPage === pages.length ? (
                <Button
                  buttonType={ButtonType.success}
                  key="submit-button"
                  testId="team-modal-submit"
                  isLoading={loading}
                  type="submit"
                  disabled={pages[currentPage - 1].submitButtonDisabled}
                >
                  {submitText}
                </Button>
              ) : (
                <Button onClick={onNextPage} disabled={pages[currentPage - 1].submitButtonDisabled || nextPageDisabled}>
                  {nextText}
                </Button>
              )}
            </>
          ) : null}
        </ModalFooter>
      </form>
    </Modal>
  );
};
