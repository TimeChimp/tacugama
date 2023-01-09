import React from 'react';
import { Input } from '../Input';
import { SearchIcon } from '../../icons/search';
import { useTheme } from '../../../providers';
import { SearchInputProps } from './types';

export const SearchInput = ({ disabled, value, ...rest }: SearchInputProps) => {
  const {
    theme: {
      current: {
        sizing: { scale650 },
        customColors: { dark4, dark1 },
      },
    },
  } = useTheme();

  const getIconColor = () => {
    if (disabled) {
      return dark4;
    }
    if (value) {
      return dark1;
    }
    return dark4;
  };

  return (
    <Input
      startEnhancer={<SearchIcon color={getIconColor()} size={scale650} />}
      value={value}
      disabled={disabled}
      {...rest}
    />
  );
};
