import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MAX_NAME_INPUT_LENGTH } from '../../../models/MaxInputLength';
import { ModalFooter } from '../../modal/ModalFooter';
import { ModalBody } from '../../modal/ModalBody';
import { Modal } from '../../modal/Modal';
import ModalButton from '../../button/ModalButton';
import { SecondaryModalButton } from '../../button/SecondaryModalButton';
import { ModalHeader } from '../../modal/ModalHeader';
import { HeadingSmall } from '../../typography/HeadingSmall';
import { FormControl } from '../../form-control/FormControl';
import { Input } from '../../input/Input';
import { CreateViewModalProps, DataGridState } from '../types';
import { Checkbox } from '../../checkbox/Checkbox';

interface FormInput {
  name: string;
}

export const CreateViewModal = ({
  dataGridId,
  isOpen,
  setIsOpen,
  handleCreateView,
  translations,
  gridApi,
  gridColumnApi,
}: CreateViewModalProps) => {
  const { errors, handleSubmit, register, setValue, reset } = useForm<FormInput>({
    mode: 'onChange',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [saveColumns, setSaveColumns] = useState<boolean>(true);
  const [saveGrouping, setSaveGrouping] = useState<boolean>(true);
  const [saveFilters, setSaveFilters] = useState<boolean>(true);

  useEffect(() => {
    if (isOpen) {
      reset({ name: '' });
      setSaveColumns(true);
      setSaveGrouping(true);
      setSaveFilters(true);
    }
  }, [setValue, isOpen, reset, gridColumnApi]);

  const getState = () => {
    const state: DataGridState = {
      columnState: saveColumns ? gridColumnApi?.getColumnState() : [],
      columnGroupState: saveGrouping ? gridColumnApi?.getColumnGroupState() : [],
      filterModel: saveFilters ? gridApi?.getFilterModel() : [],
    };
    return JSON.stringify(state);
  };

  const onSubmit = async ({ name }: FormInput) => {
    setLoading(true);
    const viewState = getState();
    await handleCreateView({
      name,
      viewType: dataGridId,
      viewState,
    });
    setLoading(false);
    setIsOpen(false);
  };

  return (
    <Modal name="create-view" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <HeadingSmall>{translations.addView}</HeadingSmall>
        </ModalHeader>
        <ModalBody>
          <FormControl label={translations.viewName}>
            <Input
              inputRef={register({
                required: true,
                maxLength: MAX_NAME_INPUT_LENGTH,
              })}
              testId="view-name-input"
              name="name"
              size="compact"
              error={!!errors.name}
              autoComplete="off"
              placeholder={translations.viewName}
            />
          </FormControl>
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
          <ModalButton testId="create-view-modal-submit" isLoading={loading} type="submit">
            {translations.addView}
          </ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  );
};
