import React from 'react';
import { Modal as BaseModal, ModalProps as BaseModelProps } from 'baseui/modal';
import { useTheme } from 'providers/ThemeProvider';
import merge from 'deepmerge';

import { border, borderRadius, MountStateNotifier, MountStates } from '../../utils';

export interface ModalProps extends BaseModelProps {
  children: React.ReactNode;
  onStateChange?: (mountState: MountStates[keyof MountStates]) => void;
  name?: string;
}

export const Modal = ({ children, onStateChange, name, overrides, ...rest }: ModalProps) => {
  // By utilizing the `MountStateNotifier` inside of `BaseModal` it will know the mountstate for when
  // the modal is closed. The base modal is unmounted, but this component `Modal` is still mounted.
  // Hence using a component to check the current state so the modal can use animations for mount states.

  const { theme } = useTheme();

  const defaultOverrides = {
    Dialog: {
      style: {
        ...border(theme.current.borders.border100),
        ...borderRadius(theme.current.borders.radius100),
      },
      props: {
        'data-testid': `${name ? name + '-' : ''}modal`,
      },
    },
    Close: {
      style: {
        color: theme.current.colors.contentTertiary,
        right: theme.current.sizing.scale700,
        top: theme.current.sizing.scale700,
      },
    },
  };

  return (
    <BaseModal
      autoFocus={false}
      unstable_ModalBackdropScroll={true} // prop will be removed in the next major version but implemented as the default behavior
      overrides={merge(overrides || {}, defaultOverrides)}
      {...rest}
    >
      {onStateChange && <MountStateNotifier onStateChange={onStateChange} />}
      {children}
    </BaseModal>
  );
};
