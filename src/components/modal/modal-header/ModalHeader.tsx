import React from 'react';
import { ModalHeader as BaseModalHeader } from 'baseui/modal';
import { modalHeaderStyle } from '../ModalStyles';
import { HeadingXSmall } from '../../typography';

export interface ModalHeaderProps {
  children: React.ReactNode;
}

export const ModalHeader = ({ children }: ModalHeaderProps) => {
  return (
    <BaseModalHeader $style={modalHeaderStyle}>
      <HeadingXSmall>{children}</HeadingXSmall>
    </BaseModalHeader>
  );
};
