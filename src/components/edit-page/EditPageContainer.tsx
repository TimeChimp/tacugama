import { useTheme } from '../../providers';
import React from 'react';
import { EditPageContainerProps, HeaderButtonTypeEditPageContainer } from './types';
import { Box } from '../box';
import { HeadingXSmall } from '../typography';
import { Button } from '../button';
import { Block } from '../block';
import { ButtonKind, ButtonType } from '../../models';
import { padding } from '../../utils';
import { Separator } from '../separator';
import { Plus } from '@phosphor-icons/react';

const BOX_HEIGHT = '90vh';
const TOTAL_PADDING = 98;
const SMALL_CONTAINER_HEIGHT = `calc(100% - ${TOTAL_PADDING}px)`;

export const EditPageContainer = ({
  title,
  children,
  headerButtonTitle,
  onHeaderButtonClick,
  submitButtonText,
  updating = false,
  headerButtonType = HeaderButtonTypeEditPageContainer.Add,
  updatingHeaderButton,
  height,
}: EditPageContainerProps) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale800, scale850, scale1200, scale1600 },
      },
    },
  } = useTheme();

  const getHeaderButton = () => {
    if (HeaderButtonTypeEditPageContainer.Remove === headerButtonType) {
      return (
        <Button
          kind={ButtonKind.primary}
          buttonType={ButtonType.error}
          onClick={onHeaderButtonClick}
          isLoading={updatingHeaderButton}
        >
          {headerButtonTitle}
        </Button>
      );
    }
    return (
      <Button
        kind={ButtonKind.primary}
        startEnhancer={<Plus />}
        onClick={onHeaderButtonClick}
        isLoading={updatingHeaderButton}
      >
        {headerButtonTitle}
      </Button>
    );
  };

  return (
    <Box height={height ?? BOX_HEIGHT}>
      <Block
        {...padding(scale200, scale1600)}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={scale1200}
      >
        <HeadingXSmall height={scale850}>{title}</HeadingXSmall>
        {headerButtonTitle ? getHeaderButton() : null}
      </Block>
      <Separator noMargin />
      <Block
        {...padding(scale800, scale1600)}
        display="flex"
        justifyContent="center"
        overflow="auto"
        height={SMALL_CONTAINER_HEIGHT}
      >
        <Block width="100%">{children}</Block>
      </Block>
      <Separator noMargin />
      <Block
        display="flex"
        {...padding(scale200, scale1600)}
        height={scale1200}
        justifyContent="flex-end"
        alignItems="center"
      >
        {submitButtonText ? (
          <Button type="submit" kind={ButtonKind.primary} isLoading={updating}>
            {submitButtonText}
          </Button>
        ) : null}
      </Block>
    </Box>
  );
};

export default EditPageContainer;
