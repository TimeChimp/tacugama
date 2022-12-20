import React from 'react';
import { Tag } from '../tag';
import { ClickableTagProps } from './types';
import { Button, ButtonKind } from '../button';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <Button kind={ButtonKind.Minimal} onClick={onClick} type="button" isTransparent {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </Button>
  );
};
