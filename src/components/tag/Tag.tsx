import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { TagProps } from './types';
import { customColors } from '../../theme/colors';
import { useTagStyles } from './hooks';
import { useTheme } from '../../providers';
import { ClearLineIcon } from '../icons';

export const Tag = ({
  value,
  closeable = false,
  // size = TagSize.small,
  // closeable = false,
  // cursor = 'default',
  color = customColors.dark5,
  onActionClick,
  ...rest
}: // fontColor = customColors.light4,
// backgroundColor,
// borderColor,
// width = 'auto',
// maxWidth = 'auto',
// overrides,
TagProps) => {
  const { rootStyles: baseRootStyles, textStyles } = useTagStyles({ color });
  const {
    theme: {
      current: {
        sizing: { scale600, scale0 },
        customColors: { dark1 },
      },
    },
  } = useTheme();

  const rootStyles = {
    ...baseRootStyles,
    ...(closeable
      ? {
          paddingRight: scale0,
        }
      : {}),
  };

  return (
    <TagComponent
      {...rest}
      closeable={closeable}
      onActionClick={onActionClick}
      overrides={{
        Root: {
          style: rootStyles,
        },
        Text: {
          style: textStyles,
        },
        Action: {
          style: () => ({
            marginLeft: '0',
          }),
        },
        ActionIcon: {
          component: () => <ClearLineIcon color={dark1} size={scale600} />,
        },
      }}
    >
      {value}
    </TagComponent>
  );
};
