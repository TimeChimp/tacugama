import { ReactNode } from 'react';
import { DropdownItem } from '../../dropdown';
import { FilterValue } from '../types';

export interface MultiFilterProps {
  searchPlaceholder: string;
  valuesLoading?: boolean;
  values: DropdownItem[];
  icon?: ReactNode;
  isFilterActive: boolean;
  title: string;
  initialSelectedFilterIds: string[];
  onSetFilterClear: () => void;
  onApplyFilter: (selectedItems: FilterValue['value'][]) => void;
}
