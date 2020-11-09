import React from 'react';
import { Modal as BaseModal, ModalProps as BaseModelProps, ModalOverrides } from 'baseui/modal';

import { border, borderRadius, MountStateNotifier, MountStates } from '../../utils';

const modalOverride = (name?: string): ModalOverrides => ({
  Dialog: {
    style: ({ $theme }) => ({
      ...border($theme.borders.border300),
      ...borderRadius($theme.borders.radius100),
    }),
    props: {
      'data-testid': `${name ? name + '-' : ''}modal`,
    },
  },
  Close: {
    style: ({ $theme }) => ({
      color: $theme.colors.contentTertiary,
      right: $theme.sizing.scale700,
      top: $theme.sizing.scale700,
    }),
  },
});

export interface ModalProps extends BaseModelProps {
  children: React.ReactNode;
  onStateChange?: (mountState: MountStates[keyof MountStates]) => void;
  name?: string;
}

export const Modal = ({ children, onStateChange, name, ...rest }: ModalProps) => {
  // By utilizing the `MountStateNotifier` inside of `BaseModal` it will know the mountstate for when
  // the modal is closed. The base modal is unmounted, but this component `Modal` is still mounted.
  // Hence using a component to check the current state so the modal can use animations for mount states.
  return (
    <BaseModal
      autoFocus={false}
      unstable_ModalBackdropScroll={true} // prop will be removed in the next major version but implemented as the default behavior
      {...rest}
      overrides={modalOverride(name)}
    >
      {onStateChange && <MountStateNotifier onStateChange={onStateChange} />}
      {children}
    </BaseModal>
  );
};
