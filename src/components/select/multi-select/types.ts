import { ActionMeta, MultiValue } from 'react-select';
import { SingleSelectOption } from '..';

export interface MultiSelectProps<ValueType, ValueKey extends string, LabelKey extends string> {
  valueKey?: ValueKey;
  labelKey?: LabelKey;
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
  options: SingleSelectOption<ValueType, ValueKey, LabelKey>[];
  clearable?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  creatable?: boolean;
  onChange:
    | ((
        newValue: MultiValue<SingleSelectOption<ValueType, ValueKey, LabelKey>>,
        actionMeta: ActionMeta<SingleSelectOption<ValueType, ValueKey, LabelKey>>,
      ) => void)
    | undefined;
  defaultValue?: SingleSelectOption<ValueType, ValueKey, LabelKey> | null;
  value?: SingleSelectOption<ValueType, ValueKey, LabelKey> | null;
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  createText?: (inputValue: string) => string;
  noOptionsMessage?: () => string;
  onCreateOption?: (inputValue: string) => void;
}
