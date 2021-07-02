import { Option, Value, SelectProps as BaseSelectProps } from '../select';

export interface FormInput {
  selectOption: Value;
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
  onChangeHandler: (data: any) => void;
  optionProp: string;
  data: {
    [key: string]: any;
  };
}
