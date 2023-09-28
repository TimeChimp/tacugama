import React from 'react';
import {
  FileUploader as BaseFileUploader,
  FileUploaderOverrides as BaseFileUploaderOverrides,
  FileUploaderProps as BaseFileUploaderProps,
} from 'baseui/file-uploader';
import { FileUploadInstruction } from './file-upload-instruction';
import { FileUploadPreview } from './file-upload-preview';
import { borderRadius, margin, padding } from '../../utils';
import { Button } from 'baseui/button';
import { useTheme } from '../../providers';
import { ButtonKind } from '../../models';

export interface FileUploadProps extends Omit<BaseFileUploaderProps, 'overrides'> {
  instructionMessage: string;
  buttonText: string;
  preview?: string;
  error?: boolean;
  progressMessage?: string;
  maxHeight?: string;
}

export const FileUpload = ({
  instructionMessage,
  preview,
  buttonText,
  error,
  progressMessage,
  maxHeight,
  ...rest
}: FileUploadProps) => {
  const { theme } = useTheme();
  const {
    current: {
      sizing: { scale100, scale400, scale500, scale550, scale850 },
      colors: { negative, white },
      customColors: { dark0 },
      customColors: { light2, light7 },
    },
  } = theme;

  const buttonOverrides = {
    basicStyle: {
      backgroundColor: white,
      color: dark0,
      ...margin(scale550, '0', '0'),
      ...padding(scale400, scale500),
      ...borderRadius(scale100),
      fontSize: scale550,
    },
    baseButton: {
      BaseButton: {
        style: () => ({
          ...buttonOverrides.basicStyle,
        }),
      },
    },
    errorButton: {
      BaseButton: {
        style: () => ({
          ...buttonOverrides.basicStyle,
          color: negative,
        }),
      },
    },
    progressButton: {
      BaseButton: {
        style: () => ({
          ...buttonOverrides.basicStyle,
          backgroundColor: 'transparent',
          color: negative,

          ':hover': {
            backgroundColor: 'transparent',
          },
        }),
      },
    },
  };

  const selectButton = () => {
    if (error) {
      return buttonOverrides.errorButton;
    }

    if (rest.progressAmount) {
      return buttonOverrides.progressButton;
    }

    return buttonOverrides.baseButton;
  };

  const fileUploaderOverrides = (
    instructionMessage: string,
    buttonText: string,
    preview?: string,
  ): BaseFileUploaderOverrides => ({
    FileDragAndDrop: {
      style: {
        margin: '0',
        ...padding(scale850, '0'),
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: light7,
        borderColor: light2,
        maxHeight,
      },
    },
    ButtonComponent: (props) => (
      <Button {...props} overrides={selectButton()} kind={ButtonKind.tertiary} type="button">
        {buttonText}
      </Button>
    ),
    ContentMessage: {
      // eslint-disable-next-line react/display-name
      component: preview ? FileUploadPreview : FileUploadInstruction,
      props: {
        message: progressMessage ? progressMessage : instructionMessage,
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

  return <BaseFileUploader {...rest} overrides={fileUploaderOverrides(instructionMessage, buttonText, preview)} />;
};
