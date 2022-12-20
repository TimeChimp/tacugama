import { Option, SelectProps as BaseSelectProps } from 'baseui/select';

interface CustomParams {
  value: any;
  option: Option | undefined | null;
  type?: any;
}

export interface SelectProps extends BaseSelectProps {
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
  options: Option[];
  onChangeHandler: (params: CustomParams) => void;
  propOverrides?: {
    dropdownListItemProps?: () => {};
    rootProps?: () => {};
  };
}
