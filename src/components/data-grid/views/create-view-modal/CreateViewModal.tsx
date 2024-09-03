import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ButtonKind, MAX_NAME_INPUT_LENGTH } from '../../../../models';
import { ModalFooter, ModalBody, Modal, ModalHeader } from '../../../modal';
import { Button } from '../../../button';
import { HeadingSmall } from '../../../typography';
import { FormControl } from '../../../form-control';
import { Input } from '../../../input';
import { CreateViewModalProps, DataGridState } from '../../types';
import { Banner } from '../../../banner';

interface FormInput {
  name: string;
}

export const CreateViewModal = ({ isOpen, onClose, handleCreateView, translations, gridApi }: CreateViewModalProps) => {
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

  useEffect(() => {
    if (isOpen) {
      reset({ name: '' });
    }
  }, [setValue, isOpen, reset, gridApi]);

  const getState = () => {
    const state: DataGridState = {
      columnState: gridApi?.getColumnState(),
      columnGroupState: gridApi?.getColumnGroupState(),
      pageSize: gridApi?.paginationGetPageSize(),
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
          <Banner text={translations.viewsExplanation} />
        </ModalBody>
        <ModalFooter>
          <Button kind={ButtonKind.secondary} onClick={() => onClose()}>
            {translations.cancel}
          </Button>
          <Button testId="create-view-modal-submit" isLoading={loading} type="submit">
            {translations.add}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};
