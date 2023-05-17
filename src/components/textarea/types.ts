import { TextareaProps as BaseTextareaProps } from 'baseui/textarea';

export interface TextareaProps extends BaseTextareaProps {
  resizeable?: boolean;
  testId?: string;
  success?: boolean;
  value: string;
  showSkeleton?: boolean;
}
