export type Option<T, ValueKey extends string, LabelKey extends string> = {
  [key in ValueKey]: T;
} & {
  [key in LabelKey]: string | JSX.Element;
} & {
  [key: string]: any;
};

export interface SingleSelectProps<ValueType, ValueKey extends string, LabelKey extends string> {
  valueKey?: ValueKey;
  labelKey?: LabelKey;
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
  options: Option<ValueType, ValueKey, LabelKey>[];
  clearable?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  creatable?: boolean;
  onChange?: (value: Option<ValueType, ValueKey, LabelKey> | null) => void;
  defaultValue?: Option<ValueType, ValueKey, LabelKey> | null;
  value?: Option<ValueType, ValueKey, LabelKey> | null;
  placeholder?: string;
  error?: boolean;
  success?: boolean;
  createText?: (inputValue: string) => string;
  noOptionsMessage?: () => string;
  onCreateOption?: (inputValue: string) => void;
  multi?: boolean;
}
