import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { useTheme } from '../../providers';
import { useTagStyles } from '../../components/tag/hooks';
import { ColoredLabelProps } from './types';
import { customColors } from '../../theme/colors';

export const ColoredLabel = ({ color = customColors.dark5, value, ...rest }: ColoredLabelProps) => {
  const {
    theme: {
      current: {
        customColors: { dark2, light4 },
      },
    },
  } = useTheme();
  const { rootStyles: baseRootStyles, textStyles: baseTextStyles } = useTagStyles({ color: dark2 });
  const rootStyles = {
    ...baseRootStyles,
    backgroundColor: color,
    borderColor: color,
    cusrsor: 'default',
  };

  const textStyles = {
    ...baseTextStyles,
    color: light4,
  };

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
