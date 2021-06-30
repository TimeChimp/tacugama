import { Option, Value, SelectProps as BaseSelectProps } from '../select';

export interface FormInput {
  role: Value;
}
export interface RowSelectProps extends BaseSelectProps {
  showSkeleton?: boolean;
  isLocked?: boolean;
  options: Option[];
  propOverrides?: {
    dropdownListItemProps?: () => {};
    rootProps?: () => {};
  };
  placeholder: string;
  labelKey: string;
  valueKey: string;
  onChangeHandler: (data: { value: Value }, userId: string) => void;
  data: {
    userId: string;
  };
}
