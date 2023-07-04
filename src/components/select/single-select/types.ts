export type Option = {
  [key: string]: string;
};

export interface SingleSelectProps {
  valueKey?: string;
  labelKey?: string;
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
  options: Option[];
  clearable?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  onChange?: (value: Option | null) => void;
  placeholder?: string;
  error?: boolean;
  success?: boolean;
}
