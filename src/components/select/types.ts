import { Option, SelectProps as BaseSelectProps } from 'baseui/select';

interface CustomParams {
  value: any;
  option: Option | undefined | null;
  type?: any;
}

export interface SelectProps extends Omit<BaseSelectProps, 'type'> {
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
  options: Option[] | { [key: string]: Option[] };
  onChangeHandler: (params: CustomParams) => void;
  propOverrides?: {
    dropdownListItemProps?: () => void;
    rootProps?: () => void;
  };
  success?: boolean;
  stickyButtonText?: string;
  stickyButtonOnClick?: () => void;
}
