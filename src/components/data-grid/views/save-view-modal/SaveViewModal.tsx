import React, { useState } from 'react';
import { ModalFooter, ModalBody, Modal, ModalHeader } from '../../../modal';
import { Button } from '../../../button';
import { HeadingSmall, ParagraphSmall } from '../../../typography';
import { SaveViewModalProps, DataGridState } from '../../types';
import { ButtonKind } from '../../../../models';

export const SaveViewModal = ({ isOpen, onClose, handleSaveView, translations, gridApi, view }: SaveViewModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  const getState = () => {
    const state: DataGridState = {
      columnState: gridApi?.getColumnState(),
      columnGroupState: gridApi?.getColumnGroupState(),
      pageSize: gridApi?.paginationGetPageSize(),
    };
    return JSON.stringify(state);
  };

  const onSubmit = async () => {
    setLoading(true);
    const viewState = getState();
    await handleSaveView(view.id, JSON.stringify(viewState));
    setLoading(false);
    onClose();
  };

  return (
    <Modal name="save-view" isOpen={isOpen} onClose={() => onClose()}>
      <ModalHeader>
        <HeadingSmall>{translations.saveView}</HeadingSmall>
      </ModalHeader>
      <ModalBody>
        <ParagraphSmall>{translations.saveViewDescription}</ParagraphSmall>
      </ModalBody>
      <ModalFooter>
        <Button kind={ButtonKind.secondary} onClick={() => onClose()}>
          {translations.cancel}
        </Button>
        <Button onClick={onSubmit} testId="save-view-modal-submit" isLoading={loading}>
          {translations.save}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
