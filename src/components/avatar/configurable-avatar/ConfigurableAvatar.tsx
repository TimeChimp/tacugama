import React from 'react';
import { RoundButton } from '../../button';
import { AvatarContainer, ButtonContainer, ButtonsContainer } from '../styles';
import { Avatar, AvatarProps } from '../Avatar';

const DEFAULT_SIZE = '60px';
const UPLOAD_BUTTON_TEST_ID = 'avatar-upload-button';

export interface ConfigurableAvatarProps extends AvatarProps {
  onUploadClick: () => void;
}

export const ConfigurableAvatar = ({ src, onUploadClick, size = DEFAULT_SIZE, ...rest }: ConfigurableAvatarProps) => {
  return (
    <AvatarContainer>
      <Avatar size={size} src={src} {...rest} />
      <ButtonsContainer>
        <ButtonContainer>
          <RoundButton testId={UPLOAD_BUTTON_TEST_ID} onClick={onUploadClick} />
        </ButtonContainer>
      </ButtonsContainer>
    </AvatarContainer>
  );
};
