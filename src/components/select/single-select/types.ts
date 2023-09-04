export type Option<T, ValueKey extends string, LabelKey extends string> = {
  [key in ValueKey]: T;
} & {
  [key in LabelKey]: string | JSX.Element;
} & {
  [key: string]: any;
};

interface BaseSingleSelectProps<ValueType, ValueKey extends string, LabelKey extends string> {
  valueKey?: ValueKey;
  labelKey?: LabelKey;
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
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
  loadOptions?: (inputValue: string) => Promise<Option<ValueType, ValueKey, LabelKey>[]>;
  cacheOptions?: boolean;
}

interface SingleSelectPropsWithGroups<ValueType, ValueKey extends string, LabelKey extends string>
  extends BaseSingleSelectProps<ValueType, ValueKey, LabelKey> {
  isGrouped: true;
  options: { label: string; options: Option<ValueType, ValueKey, LabelKey>[] }[];
}

interface SingleSelectPropsWithoutGroups<ValueType, ValueKey extends string, LabelKey extends string>
  extends BaseSingleSelectProps<ValueType, ValueKey, LabelKey> {
  isGrouped?: false;
  options: Option<ValueType, ValueKey, LabelKey>[];
}

export type SingleSelectProps<ValueType, ValueKey extends string, LabelKey extends string> =
  | SingleSelectPropsWithGroups<ValueType, ValueKey, LabelKey>
  | SingleSelectPropsWithoutGroups<ValueType, ValueKey, LabelKey>;
