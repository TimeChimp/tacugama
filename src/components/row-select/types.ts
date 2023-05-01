import { Option, Value, SelectProps as BaseSelectProps } from '../select';

export interface FormInput {
  selectOption: Value;
}
export interface RowSelectProps extends BaseSelectProps {
  showSkeleton?: boolean;
  isLockedIconDisplayedFunc?: (data: any) => boolean;
  options: Option[];
  propOverrides?: {
    dropdownListItemProps?: () => object;
    rootProps?: () => object;
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
