import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MAX_NAME_INPUT_LENGTH } from '../../../../models';
import { ModalFooter, ModalBody, ModalHeader, Modal } from '../../../modal';
import { ModalButton, SecondaryModalButton } from '../../../button';
import { HeadingSmall } from '../../../typography';
import { FormControl } from '../../../form-control';
import { Input } from '../../../input';
import { RenameViewModalProps } from '../../types';

interface FormInput {
  name: string;
}

export const RenameViewModal = ({ isOpen, onClose, handleRenameView, translations, view }: RenameViewModalProps) => {
  const { errors, handleSubmit, register, setValue, reset } = useForm<FormInput>({
    mode: 'onChange',
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      reset({ name: view.name });
    }
  }, [view, setValue, isOpen, reset]);

  const onSubmit = async ({ name }: FormInput) => {
    setLoading(true);
    await handleRenameView(view.id, name);
    setLoading(false);
    onClose();
  };

  return (
    <Modal name="rename-view" isOpen={isOpen} onClose={() => onClose()}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <HeadingSmall>{translations.renameView}</HeadingSmall>
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
        </ModalBody>
        <ModalFooter>
          <SecondaryModalButton type="button" onClick={() => onClose()}>
            {translations.cancel}
          </SecondaryModalButton>
          <ModalButton testId="rename-view-modal-submit" isLoading={loading} type="submit">
            {translations.renameView}
          </ModalButton>
        </ModalFooter>
      </form>
    </Modal>
  );
};
