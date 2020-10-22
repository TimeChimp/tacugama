import React from 'react';
import { themedStyled } from '../../theme';

const StyledFileUploadInstruction = themedStyled('div', {
  fontWeight: 600,
  fontSize: '14px',
  marginBottom: '12px',
});

// interface FileUploadInstructionProps {
//   message: string;
// }

// TODO figure out the correct type
export const FileUploadInstruction = (props: any) => {
  if (props && props.message) {
    return <StyledFileUploadInstruction>{props.message}</StyledFileUploadInstruction>;
  }

  return null;
};

export default FileUploadInstruction;
