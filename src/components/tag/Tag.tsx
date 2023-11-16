import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { TagProps } from './types';
import { customColors } from '../../theme/colors';
import { useTagStyles } from './hooks';

export const Tag = ({
  value,
  // size = TagSize.small,
  // closeable = false,
  // cursor = 'default',
  color = customColors.dark5,
  // fontColor = customColors.light4,
  // backgroundColor,
  // borderColor,
  // width = 'auto',
  // maxWidth = 'auto',
  // overrides,
  ...rest
}: TagProps) => {
  const { rootStyles, textStyles } = useTagStyles({ color });

  return (
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
      {value}
    </TagComponent>
  );
};
