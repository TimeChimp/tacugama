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
import { DataGridView } from '../types';

export interface CreateViewModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  handleCreateView: (view: DataGridView) => Promise<void>;
}

interface FormInput {
  name: string;
}

export const CreateViewModal = ({ isOpen, setIsOpen, handleCreateView }: CreateViewModalProps) => {
  const { errors, handleSubmit, register, setValue, reset } = useForm<FormInput>({
    mode: 'onChange',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      reset({ name: '' });
    }
  }, [setValue, isOpen, reset]);

  const onSubmit = async ({ name }: FormInput) => {
    setLoading(true);
    await handleCreateView({
      name,
      pinned: true,
      order: 0,
      viewState: '',
    });
    setLoading(false);
  };

  return (
    <Modal name="create-view" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <HeadingSmall></HeadingSmall>
        </ModalHeader>
        <ModalBody>
          <FormControl label={'Name'}>
            <>
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
                placeholder={'Name'}
              />
            </>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <SecondaryModalButton type="button" onClick={() => setIsOpen(false)}>
            {'Cancel'}
          </SecondaryModalButton>
          <ModalButton testId="view-modal-submit" isLoading={loading} type="submit">
            {'Create'}
          </ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  );
};
