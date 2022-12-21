import React from 'react';
import { ButtonKind as Kind } from '../../models';
import { SHAPE } from 'baseui/button';

export const DEFAULT_OPTIONS = [
  {
    label: 'Option 1',
    id: 'option-1',
  },
  {
    label: 'Option 2',
    id: 'option-2',
  },
];

interface ActionButtonOption {
  label: string;
  id: string;
}

export interface ActionButtonProps {
  options: ActionButtonOption[];
  selectedOption: ActionButtonOption;
  kind?: Kind;
  shape?: SHAPE[keyof SHAPE];
  startEnhancer?: React.ReactNode;
  disabled?: boolean;
  placeholder?: string;
}
