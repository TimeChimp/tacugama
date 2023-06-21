import { Option } from 'baseui/select';
import { SIZE } from 'baseui/button';

export interface FixedSizeSelectProps {
  items: Option[];
  showSearch: boolean;
  selection: boolean;
  selectedIds: string[];
  searchPlaceholder: string;
  isLoading?: boolean;
  title: string;
  startEnhancer: any;
  size: keyof typeof SIZE;
  isActive: boolean;
  onClear: () => void;
  hasValue?: boolean;
  arrows?: boolean;
}
