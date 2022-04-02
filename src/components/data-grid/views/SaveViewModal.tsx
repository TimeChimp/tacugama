import React, { useEffect, useState } from 'react';
import { ModalFooter, ModalBody, Modal, ModalHeader } from '../../modal';
import { ModalButton, SecondaryModalButton } from '../../button';
import { HeadingSmall } from '../../typography';
import { FormControl } from '../../form-control/FormControl';
import { SaveViewModalProps, DataGridState } from '../types';
import { Checkbox } from '../../checkbox/Checkbox';

export const SaveViewModal = ({
  isOpen,
  setIsOpen,
  handleSaveView,
  translations,
  gridApi,
  gridColumnApi,
  view,
}: SaveViewModalProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [saveColumns, setSaveColumns] = useState<boolean>(true);
  const [saveGrouping, setSaveGrouping] = useState<boolean>(true);
  const [saveFilters, setSaveFilters] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      setSaveColumns(true);
      setSaveGrouping(true);
      setSaveFilters(true);
    }
  }, [isOpen, gridColumnApi]);

  const getState = () => {
    const state: DataGridState = {
      columnState: saveColumns ? gridColumnApi?.getColumnState() : [],
      columnGroupState: saveGrouping ? gridColumnApi?.getColumnGroupState() : [],
      filterModel: saveFilters ? gridApi?.getFilterModel() : [],
    };
    return JSON.stringify(state);
  };

  const onSubmit = async () => {
    setLoading(true);
    const viewState = getState();
    await handleSaveView(view.id, viewState);
    setLoading(false);
    setIsOpen(false);
  };

  return (
    <Modal name="save-view" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalHeader>
        <HeadingSmall>{translations.saveView}</HeadingSmall>
      </ModalHeader>
      <ModalBody>
        <FormControl>
          <Checkbox checked={saveColumns} onChange={() => setSaveColumns(!saveColumns)}>
            {translations.saveColumns}
          </Checkbox>
        </FormControl>
        <FormControl>
          <Checkbox checked={saveGrouping} onChange={() => setSaveGrouping(!saveGrouping)}>
            {translations.saveGrouping}
          </Checkbox>
        </FormControl>
        <FormControl>
          <Checkbox checked={saveFilters} onChange={() => setSaveFilters(!saveFilters)}>
            {translations.saveFilters}
          </Checkbox>
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <SecondaryModalButton type="button" onClick={() => setIsOpen(false)}>
          {translations.cancel}
        </SecondaryModalButton>
        <ModalButton onClick={onSubmit} testId="save-view-modal-submit" isLoading={loading}>
          {translations.saveView}
        </ModalButton>
      </ModalFooter>
    </Modal>
  );
};
