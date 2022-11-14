import { Tag, TransparentButton } from '..';
import React from 'react';
import { ClickableTagProps } from './types';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <TransparentButton onClick={onClick} {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </TransparentButton>
  );
};
