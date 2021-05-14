import React from 'react';
import { useTheme } from 'providers';
import { ParagraphSmall } from 'baseui/typography';
import { Block } from 'components/block';
import { Box } from 'components/box';
import { TertiaryButton } from 'components/button';
import { Copy } from 'components/icons';
import { StatefulTooltip } from 'components/tooltip';
import { padding } from 'utils';
import { StyledCopyIcon } from './';

export interface CopyTextProps {
  value: string;
  onClick: () => void;
}

export const CopyText = ({ value, onClick, ...rest }: CopyTextProps) => {
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
      {...padding('2px', scale100)}
      {...rest}
    >
      <ParagraphSmall font="Source Code Pro, serif" marginTop={scale0} marginBottom={scale0}>
        {value}
      </ParagraphSmall>
      <StyledCopyIcon>
        <StatefulTooltip triggerType="click" content={() => <Block>Copied!</Block>}>
          <TertiaryButton onClick={onClick}>
            <Copy />
          </TertiaryButton>
        </StatefulTooltip>
      </StyledCopyIcon>
    </Box>
  );
};
