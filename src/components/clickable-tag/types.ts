import { TagProps, ButtonProps } from '..';
import { SyntheticEvent } from 'react';

export interface ClickableTagProps {
  label: string;
  onClick: (e: SyntheticEvent<HTMLButtonElement, Event>) => void;
  tagProps?: TagProps;
  buttonProps?: ButtonProps;
}
