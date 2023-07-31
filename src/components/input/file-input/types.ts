import { MutableRefObject } from 'react';

export interface FileInputProps {
  inputRef: MutableRefObject<any>;
  onChange: (e: any) => void;
}
