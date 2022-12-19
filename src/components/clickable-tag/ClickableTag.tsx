import { Tag, Button } from '..';
import React from 'react';
import { ClickableTagProps } from './types';
import { ButtonKind } from '../../models';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <Button buttonKind={ButtonKind.minimal} onClick={onClick} type="button" isTransparent {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </Button>
  );
};
