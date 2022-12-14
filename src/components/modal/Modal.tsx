import React from 'react';
import { Modal as BaseModal, ModalOverrides, ModalProps as BaseModelProps } from 'baseui/modal';
import { useTheme } from '../../providers';
import merge from 'deepmerge';

import { borderRadius, margin, MountStateNotifier, MountStates } from '../../utils';

export enum ModalSize {
  DEFAULT = '700px',
  LARGE = '900px',
}
export interface ModalProps extends Omit<BaseModelProps, 'size'> {
  children: React.ReactNode;
  onStateChange?: (mountState: MountStates[keyof MountStates]) => void;
  name?: string;
  size?: ModalSize;
}

export const Modal = ({
  children,
  onStateChange,
  name,
  overrides = {},
  size = ModalSize.DEFAULT,
  ...rest
}: ModalProps) => {
  // By utilizing the `MountStateNotifier` inside of `BaseModal` it will know the mountstate for when
  // the modal is closed. The base modal is unmounted, but this component `Modal` is still mounted.
  // Hence using a component to check the current state so the modal can use animations for mount states.

  const {
    theme: {
      current: {
        sizing: { scale550, scale850, scale1200 },
        borders: { radius200 },
        customColors: { dark2 },
      },
    },
  } = useTheme();

  const mergedOverrides: ModalOverrides = merge(overrides, {
    Root: {
      style: {
        zIndex: 1000,
      },
    },
    Dialog: {
      style: {
        width: size,
        ...borderRadius(radius200),
        ...margin('0'),
      },
    },
    Close: {
      style: {
        color: dark2,
        right: scale1200,
        top: scale550,
        height: scale850,
        width: scale850,
      },
    },
    DialogContainer: {
      style: {
        transitionDuration: '0ms', // use no transition because bright eyes has non for the backdrop
        alignItems: 'flex-start',
        overflow: 'hidden',
      },
    },
  });

  return (
    <BaseModal
      autoFocus={false}
      unstable_ModalBackdropScroll={true} // prop will be removed in the next major version but implemented as the default behavior
      overrides={mergedOverrides}
      size="default"
      {...rest}
    >
      {onStateChange && <MountStateNotifier onStateChange={onStateChange} />}
      {children}
    </BaseModal>
  );
};
