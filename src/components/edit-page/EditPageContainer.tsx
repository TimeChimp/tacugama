import { useTheme } from '../../providers';
import React from 'react';
import { EditPageContainerProps } from './types';
import { Box } from '../box';
import { HeadingXSmall } from '../typography';
import { Button } from '../button';
import { Block } from '../block';
import { ButtonKind } from '../../models';
import { padding } from '../../utils';
import { Separator } from '../separator';
import { AddLineIcon } from '../icons';

const SMALL_CONTAINER_MAX_WIDTH = '700px';
const BOX_HEIGHT = '90vh';
const TOP_BOTTOM_PADDING = 50;
const TOTAL_PADDING = TOP_BOTTOM_PADDING * 2;
const SMALL_CONTAINER_HEIGHT = `calc(${BOX_HEIGHT} - ${TOTAL_PADDING}px)`;

export const EditPageContainer = ({
  title,
  fullWidth = true,
  width = 'auto',
  children,
  justifyContent = 'center',
  headerButtonTitle,
  onHeaderButtonClick,
  footerButtonTitle,
  footerButtonIsLoading,
  footerButtonType = 'button',
  onFooterButtonClick,
  justifyFooterButtons = 'flex-end',
  secondaryFooterButtonTitle,
  secondaryFooterButtonProps = {},
  paddingLeftRight,
  routerPrompt,
}: EditPageContainerProps) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale800, scale850, scale1200, scale1600 },
      },
    },
  } = useTheme();
  return (
    <Box height={BOX_HEIGHT}>
      <Block
        {...padding(scale200, scale1600)}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={scale1200}
      >
        <HeadingXSmall height={scale850}>{title}</HeadingXSmall>
        {headerButtonTitle ? (
          <Button kind={ButtonKind.primary} startEnhancer={<AddLineIcon />} onClick={onHeaderButtonClick}>
            {headerButtonTitle}
          </Button>
        ) : null}
      </Block>
      <Separator noMargin />
      <Block
        {...padding(scale800, paddingLeftRight ?? scale1600)}
        display="flex"
        justifyContent={justifyContent}
        overflow="auto"
        height={SMALL_CONTAINER_HEIGHT}
      >
        <Block maxWidth={!fullWidth ? SMALL_CONTAINER_MAX_WIDTH : undefined} width={fullWidth ? '100%' : width}>
          {children}
        </Block>
      </Block>
      <Separator noMargin />
      <Block
        display="flex"
        {...padding(scale200, scale1600)}
        height={scale1200}
        justifyContent={justifyFooterButtons}
        alignItems="center"
      >
        {secondaryFooterButtonTitle ? (
          <Button {...secondaryFooterButtonProps} kind={ButtonKind.secondary}>
            {secondaryFooterButtonTitle}
          </Button>
        ) : null}
        {footerButtonTitle ? (
          <Button
            type={footerButtonType}
            kind={ButtonKind.primary}
            onClick={onFooterButtonClick}
            isLoading={footerButtonIsLoading}
          >
            {footerButtonTitle}
          </Button>
        ) : null}
      </Block>
      {onFooterButtonClick && routerPrompt}
    </Box>
  );
};

export default EditPageContainer;
