import React, { ReactElement, ReactNode } from 'react';
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

export interface FormRowProps<T extends FieldValues, K extends string> {
  name: keyof T | `${K}.${number}.${string}`;
  control?: Control<T, any>;
  label?: string | JSX.Element | null;
  labelEndEnhancer?: ReactNode | (() => ReactNode);
  forLabel?: string;
  defaultValue?: any;
  error?: string;
  render: ({
    field,
    fieldState,
    formState,
  }: {
    field: ControllerRenderProps<T, any>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<T>;
  }) => ReactElement<any>;
  caption?: string | JSX.Element;
  rules?: Omit<RegisterOptions<T, any>, 'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  toolTip?: string;
  actionButtons?: React.ReactNode[];
}
