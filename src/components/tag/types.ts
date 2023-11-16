import { ReactNode } from 'react';
import { TagProps as TagComponentProps } from 'baseui/tag';

export enum TagSize {
  small = 'small',
  large = 'large',
}

export interface TagProps extends TagComponentProps {
  value?: string;
  // children?: ReactNode;
  // size?: TagSize;
  // closeable?: boolean;
  // cursor?: string;
  color?: string;
  // fontColor?: string;
  // backgroundColor?: string;
  // borderColor?: string;
  // width?: string;
  // maxWidth?: string;
}
