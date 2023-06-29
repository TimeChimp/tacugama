import React, { useEffect, useState } from 'react';
import { ModalFooter, ModalBody, Modal, ModalHeader } from '../../../modal';
import { Button } from '../../../button';
import { HeadingSmall, ParagraphSmall } from '../../../typography';
import { SaveViewModalProps, DataGridState } from '../../types';
import { ButtonKind } from '../../../../models';

export const SaveViewModal = ({
  isOpen,
  onClose,
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
      filterModel: saveFilters ? gridApi?.getFilterModel() : {},
    };
    return JSON.stringify(state);
  };

  const onSubmit = async () => {
    setLoading(true);
    const viewState = getState();
    await handleSaveView(view.id, viewState);
    setLoading(false);
    onClose();
  };

  return (
    <Modal name="save-view" isOpen={isOpen} onClose={() => onClose()}>
      <ModalHeader>
        <HeadingSmall>{translations.saveView}</HeadingSmall>
      </ModalHeader>
      <ModalBody>
        {/* <FormControl>
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
        </FormControl> */}
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
