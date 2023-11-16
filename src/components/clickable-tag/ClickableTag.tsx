import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { ClickableTagProps } from './types';
import { Button } from '../button';
import { ButtonKind } from '../../models';
import { useTheme } from '../../providers';
import { useTagStyles } from '../../components/tag/hooks';
import { border } from '../../utils';

export const ClickableTag = ({ onClick, label, ...rest }: ClickableTagProps) => {
  const {
    theme: {
      current: {
        customColors: { dark2, light6 },
        borders: { border300 },
      },
    },
  } = useTheme();
  const { rootStyles: baseRootStyles, textStyles: baseTextStyles } = useTagStyles({ color: dark2 });
  const rootStyles = {
    ...baseRootStyles,
    ...border({
      ...border300,
      borderColor: dark2,
    }),
    backgroundColor: light6,
    cursor: 'pointer',
  };

  const textStyles = {
    ...baseTextStyles,
    color: dark2,
  };

  return (
    <Button kind={ButtonKind.minimal} onClick={onClick}>
      <TagComponent
        {...rest}
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
