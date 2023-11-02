import React from 'react';
import { Tag } from '../tag';
import { ClickableTagProps } from './types';
import { Button } from '../button';
import { ButtonKind } from '../../models';
import { useTheme } from '../../providers';

export const ClickableTag = ({ onClick, label, tagProps = {}, buttonProps = {} }: ClickableTagProps) => {
  const {
    theme: {
      current: {
        customColors: { dark2, light6 },
      },
    },
  } = useTheme();
  return (
    <Button kind={ButtonKind.minimal} onClick={onClick} {...buttonProps}>
      <Tag
        value={label}
        cursor="pointer"
        backgroundColor={light6}
        borderColor={dark2}
        fontColor={dark2}
        {...tagProps}
      />
    </Button>
  );
};
