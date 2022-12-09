import { TagProps, MinimalButtonProps } from '..';
import { MouseEvent } from 'react';

export interface ClickableTagProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  tagProps?: TagProps;
  buttonProps?: MinimalButtonProps;
}
