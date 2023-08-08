import React, { ReactElement, ReactNode } from 'react';
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

export enum FormRowVariant {
  Primary,
  Secondary,
}

export interface FormRowProps<T extends FieldValues, K extends string> {
  name: keyof T | `${K}.${number}.${string}`;
  label?: string | JSX.Element | null;
  labelEndEnhancer?: ReactNode | (() => ReactNode);
  defaultValue?: any;
  error?: string;
  control?: Control<T, any>;
  caption?: string | JSX.Element;
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<T, any>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
  }) => ReactElement<any>;
  rules?: Omit<RegisterOptions<T, any>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  marginBottom?: any;
  toolTip?: string;
  hideSeparator?: boolean;
  actionButtons?: React.ReactNode[];
  showLabelInline?: boolean;
  variant?: FormRowVariant;
  minHeight?: any;
  alignItems?: string;
}
