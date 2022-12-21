import { ButtonProps } from '../button';
import { MouseEvent } from 'react';
import { TagProps } from '../tag/types';

export interface ClickableTagProps {
  label: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  tagProps?: TagProps;
  buttonProps?: ButtonProps;
}
