import React from 'react';
import { themedStyled } from '../../../theme';

const StyledImage = themedStyled('img', {
  maxWidth: '100px',
  maxHeight: '100px',
  marginBottom: '12px',
  marginTop: '12px',
});

// TODO figure out the correct type
export const FileUploadPreview = (props: any) => {
  return <StyledImage alt="preview" src={props.preview} />;
};

export default FileUploadPreview;
