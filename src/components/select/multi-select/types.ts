import { SelectProps as BaseSelectProps } from 'baseui/select';

type OmittedProps = 'type' | 'multi';

export interface SelectProps extends Omit<BaseSelectProps, OmittedProps> {
  showSkeleton?: boolean;
  disableSortOptions?: boolean;
  propOverrides?: {
    dropdownListItemProps?: () => object;
    rootProps?: () => object;
  };
  success?: boolean;
  // @deprecated In a future (V10) release, this will be removed in favor of the separation of single and multi select
  multi?: boolean;
}
