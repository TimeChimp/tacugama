import React from 'react';
import { RoundButton, TransparentButton } from '../button';
import { ImagePlaceholder, TrashFull } from '../icons';
import { useTheme } from '../../providers';
import { AvatarContainer, ButtonContainer, ButtonsContainer } from './styles';
import { Avatar, AvatarProps } from './Avatar';

const DEFAULT_SIZE = '60px';
const UPLOAD_BUTTON_TEST_ID = 'avatar-upload-button';
const DELETE_BUTTON_TEST_ID = 'avatar-delete-button';

export interface ConfigurableAvatarProps extends AvatarProps {
  onRemove: () => void;
  onUploadClick: () => void;
}

export const ConfigurableAvatar = ({
  src,
  onRemove,
  onUploadClick,
  size = DEFAULT_SIZE,
  ...rest
}: ConfigurableAvatarProps) => {
  const {
    theme: {
      current: {
        sizing: { scale400 },
        customColors: { dark4 },
      },
    },
  } = useTheme();

  return (
    <AvatarContainer>
      <Avatar size={size} src={src} {...rest} />
      <ButtonsContainer>
        <ButtonContainer>
          <RoundButton testId={UPLOAD_BUTTON_TEST_ID} onClick={onUploadClick}>
            <ImagePlaceholder size={scale400} color={dark4} />
          </RoundButton>
        </ButtonContainer>

        <div>
          {!!src && (
            <TransparentButton testId={DELETE_BUTTON_TEST_ID} onClick={onRemove}>
              <TrashFull size={scale400} color={dark4} />
            </TransparentButton>
          )}
        </div>
      </ButtonsContainer>
    </AvatarContainer>
  );
};
