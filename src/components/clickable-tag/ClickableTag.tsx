import React from 'react';
import { Tag } from '../tag';
import { ClickableTagProps } from './types';
import { KIND } from 'baseui/button';
import { Button } from '../button';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <Button kind={KIND.minimal} onClick={onClick} type="button" isTransparent {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </Button>
  );
};
