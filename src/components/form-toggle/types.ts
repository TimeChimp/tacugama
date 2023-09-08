export enum FormToggleSize {
  small = 'small',
  large = 'large',
}

export interface FormToggleItem {
  isChecked: boolean;
  onToggleChange: () => void;
  label: string;
  disabled?: boolean;
}

export interface FormToggleProps {
  isChecked: boolean;
  onToggleChange: () => void;
  additionalContent: JSX.Element;
  caption?: string;
  label?: string;
  size?: FormToggleSize;
  disabled?: boolean;
  items?: FormToggleItem[];
  multi?: boolean;
}
