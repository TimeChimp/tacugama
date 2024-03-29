import { ActionMeta, MultiValue } from 'react-select';
import { SingleSelectOption } from '..';

interface BaseMultiSelectProps<ValueType, ValueKey extends string, LabelKey extends string> {
  valueKey?: ValueKey;
  labelKey?: LabelKey;
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
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
  defaultValue?: MultiValue<SingleSelectOption<ValueType, ValueKey, LabelKey>> | null;
  value?: MultiValue<SingleSelectOption<ValueType, ValueKey, LabelKey>> | null;
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  createText?: (inputValue: string) => string;
  noOptionsMessage?: () => string;
  onCreateOption?: (inputValue: string) => void;
  inputId?: string;
}

interface MultiSelectPropsWithGroups<ValueType, ValueKey extends string, LabelKey extends string>
  extends BaseMultiSelectProps<ValueType, ValueKey, LabelKey> {
  isGrouped: true;
  options: { label: string; options: SingleSelectOption<ValueType, ValueKey, LabelKey>[] }[];
}

interface MultiSelectPropsWithoutGroups<ValueType, ValueKey extends string, LabelKey extends string>
  extends BaseMultiSelectProps<ValueType, ValueKey, LabelKey> {
  isGrouped?: false;
  options: SingleSelectOption<ValueType, ValueKey, LabelKey>[];
}

export type MultiSelectProps<ValueType, ValueKey extends string, LabelKey extends string> =
  | MultiSelectPropsWithGroups<ValueType, ValueKey, LabelKey>
  | MultiSelectPropsWithoutGroups<ValueType, ValueKey, LabelKey>;
