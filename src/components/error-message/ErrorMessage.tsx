import * as React from 'react';
import { FlexItem } from '../flex-item';
import { useTheme } from '../../providers';
import { ErrorMessageProps } from './types';
import { ParagraphXSmall } from '../typography';

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  const {
    theme: {
      current: {
        sizing: { scale700 },
        customColors: { red2 },
      },
    },
  } = useTheme();
  return (
    <FlexItem justifyContent="flex-end">
      <ParagraphXSmall
        overrides={{
          Block: {
            style: {
              color: red2,
              height: scale700,
            },
          },
        }}
      >
        {error}
      </ParagraphXSmall>
    </FlexItem>
  );
};
