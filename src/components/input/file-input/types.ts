import { MutableRefObject } from 'react';

export interface FileInputProps {
  inputRef: MutableRefObject<any>;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  accept?: string;
}
