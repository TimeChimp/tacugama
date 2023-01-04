import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { useTheme } from '../../providers';
import { border, borderRadius, margin, padding, toRGBColor } from '../../utils';
import { ParagraphSmall, ParagraphXSmall } from '../typography';
import { TagProps, TagSize } from './types';
import { customColors } from '../../theme/colors';
import { ClearLineIcon } from '../icons/clear-line';

export const Tag = ({
  value,
  size = TagSize.small,
  closeable = false,
  cursor = 'default',
  color = customColors.light7,
  width = 'auto',
  maxWidth = 'auto',
  ...rest
}: TagProps) => {
  const {
    theme: {
      current: {
        sizing: { scale100, scale200, scale550, scale600, scale750 },
        borders: { border300 },
        customColors: { dark1, light7, light2 },
      },
    },
  } = useTheme();

  const getBackgroundColor = () => {
    if (color === light7) {
      return light7;
    }
    const rgb = toRGBColor(color);
    const opacity = 0.16;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
  };

  const getTextColor = () => {
    if (color === light7) {
      return dark1;
    }
    return color;
  };

  const getBorderColor = () => {
    if (color === light7) {
      return light2;
    }
    return color;
  };

  return (
    <TagComponent
      {...rest}
      closeable={closeable}
      size={size}
      overrides={{
        ...(size === TagSize.small && {
          Root: {
            style: () => ({
              width,
              maxWidth,
              display: 'inline-flex',
              ...padding('0px', scale200),
              ...borderRadius(scale100),
              ...margin('0px', scale100, '0px', '0px'),
              ...border({
                ...border300,
                borderColor: getBorderColor(),
              }),
              backgroundColor: getBackgroundColor(),
              cursor,
              height: scale750,
              color: getTextColor(),
            }),
          },
          Text: {
            component: ParagraphXSmall,
            style: () => ({
              color: getTextColor(),
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
            }),
          },
          ActionIcon: {
            component: () => <ClearLineIcon size={scale550} />,
          },
        }),
        ...(size === TagSize.large && {
          Root: {
            style: () => ({
              width,
              display: 'inline-flex',
              height: scale750,
              ...padding('0', scale200),
              ...borderRadius(scale100),
              ...margin('0px', scale100, '0px', '0px'),
              ...border({
                ...border300,
                borderColor: getBorderColor(),
              }),
              backgroundColor: getBackgroundColor(),
              color: getTextColor(),
              cursor,
            }),
          },
          Text: {
            component: ParagraphSmall,
            style: () => ({
              color: getTextColor(),
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
            }),
          },
          ActionIcon: {
            component: () => <ClearLineIcon size={scale600} />,
          },
        }),
      }}
    >
      {value}
    </TagComponent>
  );
};
