import React from 'react';
import { FileInputProps } from './types';

export const FileInput = ({ inputRef, onChange }: FileInputProps) => (
  <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={onChange} />
);
