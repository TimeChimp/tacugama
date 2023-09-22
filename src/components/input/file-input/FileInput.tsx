import React from 'react';
import { FileInputProps } from './types';
import { ATTACHMENTS_TYPE_ACCEPT } from '../../../models';

export const FileInput = ({ inputRef, onChange, accept = ATTACHMENTS_TYPE_ACCEPT }: FileInputProps) => (
  <input style={{ display: 'none' }} ref={inputRef} type="file" onChange={onChange} accept={accept} />
);
