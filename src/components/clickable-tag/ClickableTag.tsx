import { Tag, MinimalButton } from '..';
import React from 'react';
import { ClickableTagProps } from './types';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <MinimalButton onClick={onClick} type="button" isTransparent {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </MinimalButton>
  );
};
