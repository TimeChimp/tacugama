import { InputProps } from '../types';

export interface ColorInputProps extends Omit<InputProps, 'value' | 'uppercase' | 'onChange' | 'placeholder'> {
  onChange: (color: string) => void;
  value?: string;
  generateRandomColor?: boolean;
}

export const colors = [
  '#eccc68',
  '#ffa502',
  '#ff7f50',
  '#ff6348',
  '#ff6b81',
  '#ff4757',
  '#7bed9f',
  '#2ed573',
  '#70a1ff',
  '#1e90ff',
  '#5352ed',
  '#3742fa',
  '#6559D2',
  '#a4b0be',
  '#747d8c',
  '#57606f',
  '#2f3542',
];
