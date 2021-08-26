import React from 'react';
import {
  FileUploader as BaseFileUploader,
  FileUploaderOverrides as BaseFileUploaderOverrides,
  FileUploaderProps as BaseFileUploaderProps,
  StyleProps,
} from 'baseui/file-uploader';
import FileUploadInstruction from './FileUploadInstruction';
import FileUploadPreview from './FileUploadPreview';
import { borderRadius, margin, padding } from '../../utils';
import { Button } from 'baseui/button';
import { useTheme } from '../../providers/ThemeProvider';

export interface FileUploadProps extends Omit<BaseFileUploaderProps, 'overrides'> {
  instructionMessage: string;
  buttonText: string;
  preview?: string;
  error?: boolean;
}

export const FileUpload = ({ instructionMessage, preview, buttonText, error, ...rest }: FileUploadProps) => {
  const { theme } = useTheme();
  const {
    current: {
      sizing: { scale100, scale400, scale500, scale550, scale850 },
      colors: { negative, white },
      customColors: { dark0 },
    },
  } = theme;

  const fileUploaderOverrides = (
    instructionMessage: string,
    buttonText: string,
    preview?: string,
    error?: boolean,
  ): BaseFileUploaderOverrides<StyleProps> => ({
    FileDragAndDrop: {
      style: {
        margin: '0',
        ...padding(scale850, '0'),
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      },
    },
    ButtonComponent: (props) => (
      <Button
        {...props}
        overrides={{
          BaseButton: {
            style: () => ({
              backgroundColor: white,
              color: error ? negative : dark0,
              ...margin(scale550, '0', '0'),
              ...padding(scale400, scale500),
              ...borderRadius(scale100),
              fontSize: scale550,
            }),
          },
        }}
      >
        {buttonText}
      </Button>
    ),
    ContentMessage: {
      // eslint-disable-next-line react/display-name
      component: preview ? FileUploadPreview : FileUploadInstruction,
      props: {
        message: instructionMessage,
        preview,
      },
    },
    ErrorMessage: {
      style: {
        fontSize: scale550,
        ...margin('0', '0', scale500),
      },
    },
    ContentSeparator: {
      component: () => null,
    },
  });

  return (
    <BaseFileUploader {...rest} overrides={fileUploaderOverrides(instructionMessage, buttonText, preview, error)} />
  );
};
