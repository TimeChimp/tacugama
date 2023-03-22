import React from 'react';
import { Tag } from '../tag';
import { ClickableTagProps } from './types';
import { Button } from '../button';
import { ButtonKind } from '../../models';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  return (
    <Button kind={ButtonKind.minimal} onClick={onClick} type="button" {...buttonProps}>
      <Tag value={label} cursor="pointer" {...tagProps} />
    </Button>
  );
};
