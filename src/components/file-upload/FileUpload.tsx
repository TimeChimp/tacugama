import React from 'react';
import {
  FileUploader as BaseFileUploader,
  FileUploaderOverrides as BaseFileUploaderOverrides,
  FileUploaderProps as BaseFileUploaderProps,
  StyleProps,
} from 'baseui/file-uploader';
import FileUploadInstruction from './FileUploadInstruction';
import FileUploadPreview from './FileUploadPreview';
import { padding } from 'utils';

const fileUploaderOverrides = (
  instructionMessage: string,
  preview?: string,
): BaseFileUploaderOverrides<StyleProps> => ({
  FileDragAndDrop: {
    style: {
      margin: '0',
      ...padding('0'),
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
    },
  },
  ButtonComponent: {
    props: {
      size: 'compact',
      kind: 'secondary',
      shape: 'pill',
    },
  },
  ContentMessage: {
    // eslint-disable-next-line react/display-name
    component: preview ? FileUploadPreview : FileUploadInstruction,
    props: {
      message: instructionMessage,
      preview,
    },
  },
  ContentSeparator: {
    component: () => null,
  },
});

export interface FileUploadProps extends Omit<BaseFileUploaderProps, 'overrides'> {
  instructionMessage: string;
  preview?: string;
}

export const FileUpload = ({ instructionMessage, preview, ...rest }: FileUploadProps) => {
  return <BaseFileUploader {...rest} overrides={fileUploaderOverrides(instructionMessage, preview)} />;
};
