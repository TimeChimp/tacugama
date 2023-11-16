import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { ClickableTagProps } from './types';
import { Button } from '../button';
import { ButtonKind } from '../../models';
import { useTheme } from '../../providers';
import { useTagStyles } from '../../components/tag/hooks';

export const ClickableTag = ({ onClick, label }: ClickableTagProps) => {
  const {
    theme: {
      current: {
        customColors: { dark2 },
      },
    },
  } = useTheme();
  const { rootStyles: baseRootStyles, textStyles } = useTagStyles({ color: dark2 });
  const rootStyles = {
    ...baseRootStyles,
    cursor: 'pointer',
  };

  return (
    <Button kind={ButtonKind.minimal} onClick={onClick}>
      <TagComponent
        closeable={false}
        overrides={{
          Root: {
            style: rootStyles,
          },
          Text: {
            style: textStyles,
          },
        }}
      >
        {label}
      </TagComponent>
    </Button>
  );
};
