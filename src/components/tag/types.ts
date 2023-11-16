import { TagProps as BaseTagProps } from 'baseui/tag';

export enum TagSize {
  small = 'small',
  large = 'large',
}

export interface TagProps extends BaseTagProps {
  value?: string;
  // children?: ReactNode;
  // size?: TagSize;
  closeable?: boolean;
  // cursor?: string;
  color?: string;
  // fontColor?: string;
  // backgroundColor?: string;
  // borderColor?: string;
  // width?: string;
  // maxWidth?: string;
}
