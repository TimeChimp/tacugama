import { SelectProps as BaseSelectProps } from 'baseui/select';

type OmittedProps = 'type' | 'multi';

export interface MultiSelectProps extends Omit<BaseSelectProps, OmittedProps> {
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
  propOverrides?: {
    dropdownListItemProps?: () => object;
    rootProps?: () => object;
  };
  success?: boolean;
}
