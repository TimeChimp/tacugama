import { Tag } from '../tag';
import { TransparentButton } from '../button/transparent-button';
import React from 'react';
import { ClickableTagProps } from './types';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <TransparentButton onClick={onClick} type="button" {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </TransparentButton>
  );
};
