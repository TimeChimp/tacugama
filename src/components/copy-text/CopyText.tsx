import React from 'react';
import { ParagraphSmall } from 'baseui/typography';
import { useTheme } from '../../providers';
import { Block } from '../../components/block';
import { Box } from '../../components/box';
import { TertiaryButton } from '../../components/button';
import { Copy } from '../../components/icons';
import { StatefulTooltip } from '../../components/tooltip';
import { padding } from '../../utils';
import { StyledCopyIcon } from './';

export interface CopyTextProps {
  value: string;
  onClick: () => void;
  copiedText?: string;
}

export const CopyText = ({ value, onClick, copiedText = 'Copied!', ...rest }: CopyTextProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100 },
      },
    },
  } = useTheme();

  return (
    <Box
      display="inline-flex"
      justifyContent="space-between"
      alignItems="center"
      noBorder
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
      <StyledCopyIcon onClick={onClick}>
        <StatefulTooltip triggerType="click" content={() => <Block>{copiedText}</Block>}>
          <TertiaryButton>
            <Copy />
          </TertiaryButton>
        </StatefulTooltip>
      </StyledCopyIcon>
    </Box>
  );
};
