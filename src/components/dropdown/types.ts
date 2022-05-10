import { TetherPlacement } from 'baseui/layer';

export interface ActionItemFilterCondition {
  comparator: (value: any, name: string, data: any) => boolean;
  value: any;
  name: string;
}

export interface DropdownItem {
  id?: string;
  label: string;
  icon?: JSX.Element;
  iconEnd?: JSX.Element;
  action?: (selectedIds?: string[]) => void;
  color?: string;
  checkbox?: boolean;
  isChecked?: boolean;
  isBold?: boolean;
  filterConditions?: ActionItemFilterCondition[];
  context?: any;
}

export interface DropdownOptionProps {
  item: DropdownItem;
  onItemSelect: (item: DropdownItem) => void;
}

export interface DropdownProps {
  children?: React.ReactNode;
  items: DropdownItem[];
  placement?: TetherPlacement[keyof TetherPlacement];
  showSearch?: boolean;
  searchPlaceholder?: string;
  onClose?: () => any;
  onOpen?: () => any;
  selection?: boolean;
  selectedIds?: Array<string>;
  footer?: JSX.Element;
  customOption?: React.ForwardRefExoticComponent<any & React.RefAttributes<any>>;
  propOverrides?: {
    listProps: () => {};
    optionProps: () => {};
  };
  isLoading?: boolean;
}
