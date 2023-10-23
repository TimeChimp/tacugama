import { InputProps as BaseInputProps, SIZE } from 'baseui/input';

export enum Align {
  left = 'left',
  right = 'right',
}

export interface InputProps extends BaseInputProps {
  uppercase?: boolean;
  noBorder?: boolean;
  success?: boolean;
  width?: string;
  showSkeleton?: boolean;
  align?: Align;

  // DEPRECATED

  /** Id attribute value to be added to the input element and as a label's for attribute value.
   * If not provided, the component will use the name prop as the id.
   * @deprecated Don't use this prop, it will be removed in the future
   */
  id?: string;
  /** @deprecated Don't use this prop, it will be removed in the future */
  testId?: string;
  /** @deprecated Don't use this prop, it will be removed in the future */
  size?: keyof typeof SIZE;
}
