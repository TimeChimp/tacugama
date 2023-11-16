import { TagProps } from 'baseui/tag';

export interface ColoredLabelProps extends TagProps {
  value: string;
  color?: string;
}
