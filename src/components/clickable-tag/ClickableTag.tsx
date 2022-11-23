import { Tag, TransparentButton } from '..';
import React from 'react';
import { ClickableTagProps } from './types';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <TransparentButton
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      {...buttonProps}
    >
      <Tag value={label} cursor="pointer" {...tagProps} />
    </TransparentButton>
  );
};
