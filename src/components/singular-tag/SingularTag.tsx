import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { useTagStyles } from '../../components/tag/hooks';
import { SingularTagProps } from './types';
import { customColors } from '../../theme/colors';

export const SingularTag = ({ value, color = customColors.dark5, ...rest }: SingularTagProps) => {
  const { rootStyles: baseRootStyles, textStyles: baseTextStyles } = useTagStyles({ color });
  const rootStyles = { ...baseRootStyles, width: '100%', marginRight: '0' };
  const textStyles = { ...baseTextStyles, textAlign: 'center', width: '100%', display: 'block' };

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
