import React from 'react';
import { Modal as BaseModal, ModalOverrides, ModalProps as BaseModelProps } from 'baseui/modal';
import { useTheme } from '../../providers';
import merge from 'deepmerge';

import { border, borderRadius, margin, MountStateNotifier, MountStates } from '../../utils';

export interface ModalProps extends BaseModelProps {
  children: React.ReactNode;
  onStateChange?: (mountState: MountStates[keyof MountStates]) => void;
  name?: string;
}

export const Modal = ({ children, onStateChange, name, overrides = {}, ...rest }: ModalProps) => {
  // By utilizing the `MountStateNotifier` inside of `BaseModal` it will know the mountstate for when
  // the modal is closed. The base modal is unmounted, but this component `Modal` is still mounted.
  // Hence using a component to check the current state so the modal can use animations for mount states.

  const {
    theme: {
      current: {
        sizing: { scale600, scale700 },
        borders: { border100, radius200 },
        colors: { contentTertiary },
      },
    },
  } = useTheme();

  const mergedOverrides: ModalOverrides = merge(overrides, {
    Dialog: {
      style: {
        ...border(border100),
        ...borderRadius(radius200),
        ...margin('-20vh', scale600, scale600, scale600), // -20vh is fix for aligning modal in bright eyes iframe
      },
    },
    Close: {
      style: {
        color: contentTertiary,
        right: scale700,
        top: scale700,
      },
    },
    DialogContainer: {
      style: {
        transitionDuration: '0ms', // use no transition because bright eyes has non for the backdrop
      },
    },
  });

  return (
    <BaseModal
      autoFocus={false}
      unstable_ModalBackdropScroll={true} // prop will be removed in the next major version but implemented as the default behavior
      overrides={mergedOverrides}
      {...rest}
    >
      {onStateChange && <MountStateNotifier onStateChange={onStateChange} />}
      {children}
    </BaseModal>
  );
};
