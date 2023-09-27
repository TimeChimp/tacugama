import React from 'react';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../providers';
import { StyledCopyIcon } from './StyledCopyText';
import { ButtonKind } from '../../models';
import { Box } from '../box';
import { StatefulTooltip } from '../tooltip';
import { Block } from '../block';
import { Button } from '../button';
import { CopyTextProps } from './types';

export const CopyText = ({
  value,
  copyTextHandler,
  copiedText = 'Copied!',
  backgroundColor = 'transparent',
  buttonText = 'Copy',
  ...rest
}: CopyTextProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0 },
        customColors: { dark4 },
      },
    },
  } = useTheme();

  return (
    <Box
      display="inline-flex"
      justifyContent="space-between"
      alignItems="center"
      noBorder
      backgroundColor={backgroundColor}
      {...rest}
    >
      <ParagraphSmall marginTop={scale0} marginBottom={scale0} color={dark4}>
        {value}
      </ParagraphSmall>
      <StyledCopyIcon onClick={() => copyTextHandler(value)}>
        <StatefulTooltip triggerType="click" content={() => <Block>{copiedText}</Block>}>
          <Button kind={ButtonKind.tertiary}>{buttonText}</Button>
        </StatefulTooltip>
      </StyledCopyIcon>
    </Box>
  );
};
