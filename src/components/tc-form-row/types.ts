import { ReactElement } from 'react';
import {
  Control,
  ControllerRenderProps,
  ControllerFieldState,
  UseFormStateReturn,
  RegisterOptions,
  FieldValues,
} from 'react-hook-form';

export interface TCFormRowProps<T extends FieldValues, K extends string> {
  name: keyof T | `${K}.${number}.${string}`;
  label: string;
  forLabel?: string;
  defaultValue?: any;
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
}
