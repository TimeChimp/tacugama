import React from 'react';
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
  action?: (selectedIds?: string[], additionalProperties?: any) => void;
  color?: string;
  checkbox?: boolean;
  isChecked?: boolean;
  isBold?: boolean;
  filterConditions?: ActionItemFilterCondition[];
  context?: any;
  showTooltip?: boolean;
}

export interface DropdownOptionProps {
  item: DropdownItem;
  onItemSelect: (item: DropdownItem) => void;
}

export interface DropdownProps {
  children?: React.ReactNode;
  items: DropdownItem[];
  placement?: TetherPlacement;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onClose?: () => any;
  onOpen?: () => any;
  selection?: boolean;
  selectedIds?: Array<string>;
  footer?: JSX.Element;
  customOption?: React.ForwardRefExoticComponent<any & React.RefAttributes<any>>;
  propOverrides?: {
    listProps?: () => object;
    optionProps?: () => object;
    bodyProps?: () => object;
  };
  isLoading?: boolean;
  // Additional properties to pass to the action function of a dropdown item i.e. a reference to the GridApi
  additionalProperties?: any;
  customList?: React.ComponentType<any>;
}
