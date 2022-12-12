import { Tag, Button } from '..';
import React from 'react';
import { ClickableTagProps } from './types';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <Button kind="minimal" onClick={onClick} type="button" isTransparent {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </Button>
  );
};
