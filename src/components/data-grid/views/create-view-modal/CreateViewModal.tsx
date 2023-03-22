import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ButtonKind, MAX_NAME_INPUT_LENGTH } from '../../../../models';
import { ModalFooter, ModalBody, Modal, ModalHeader } from '../../../modal';
import { Button } from '../../../button';
import { HeadingSmall } from '../../../typography';
import { FormControl } from '../../../form-control';
import { Input } from '../../../input';
import { CreateViewModalProps, DataGridState } from '../../types';
import { Checkbox } from '../../../checkbox';

interface FormInput {
  name: string;
}

export const CreateViewModal = ({
  isOpen,
  onClose,
  handleCreateView,
  translations,
  gridApi,
  gridColumnApi,
}: CreateViewModalProps) => {
  const {
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm<FormInput>({
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
      viewState,
    });
    setLoading(false);
    onClose();
  };

  return (
    <Modal name="create-view" isOpen={isOpen} onClose={() => onClose()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <HeadingSmall>{translations.addView}</HeadingSmall>
        </ModalHeader>
        <ModalBody>
          <FormControl label={translations.viewName}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, maxLength: MAX_NAME_INPUT_LENGTH }}
              render={({ field: { value, onChange, onBlur } }) => (
                <Input
                  testId="view-name-input"
                  name="name"
                  size="compact"
                  error={!!errors.name}
                  autoComplete="off"
                  placeholder={translations.viewName}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
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
          <Button kind={ButtonKind.secondary} onClick={() => onClose()}>
            {translations.cancel}
          </Button>
          <Button testId="create-view-modal-submit" isLoading={loading} type="submit">
            {translations.addView}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
