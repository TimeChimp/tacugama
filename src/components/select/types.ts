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
    dropdownListItemProps?: () => {};
    rootProps?: () => {};
  };
  success?: boolean;
  stickyButtonWidth?: string;
  stickyPopoverWidth?: string;
  stickyButtonText?: string;
  stickyButtonOnClick?: () => void;
}
