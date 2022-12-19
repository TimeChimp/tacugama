import { TagProps, ButtonProps } from '..';
import { MouseEvent } from 'react';

export interface ClickableTagProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  tagProps?: TagProps;
  buttonProps?: ButtonProps;
}
