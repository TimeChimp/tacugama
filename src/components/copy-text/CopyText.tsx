import React from 'react';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../providers';
import { Block, Box, MinimalButton, StatefulTooltip, Copy } from '../../components';
import { padding } from '../../utils';
import { StyledCopyIcon } from './StyledCopyText';

export interface CopyTextProps {
  value: string;
  copyTextHandler: (value: string) => void;
  copiedText?: string;
  backgroundColor?: string;
}

export const CopyText = ({
  value,
  copyTextHandler,
  copiedText = 'Copied!',
  backgroundColor = 'transparent',
  ...rest
}: CopyTextProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale550 },
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
      {...padding(scale0, scale100)}
      {...rest}
    >
      <ParagraphSmall
        overrides={{
          Block: {
            style: {
              fontFamily: 'Source Code Pro, sans-serif',
            },
          },
        }}
        marginTop={scale0}
        marginBottom={scale0}
      >
        {value}
      </ParagraphSmall>
      <StyledCopyIcon onClick={() => copyTextHandler(value)}>
        <StatefulTooltip triggerType="click" content={() => <Block>{copiedText}</Block>}>
          <MinimalButton isTransparent={true}>
            <Copy size={scale550} />
          </MinimalButton>
        </StatefulTooltip>
      </StyledCopyIcon>
    </Box>
  );
};
