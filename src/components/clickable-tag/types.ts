import { SyntheticEvent } from 'react';
import { ButtonProps } from '..';
import { TagProps } from '../tag/types';

export interface ClickableTagProps {
  label: string;
  onClick: (e: SyntheticEvent<HTMLButtonElement, Event>) => void;
  tagProps?: TagProps;
  buttonProps?: ButtonProps;
}
