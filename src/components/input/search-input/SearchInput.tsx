import React from 'react';
import { Input } from '../Input';
import { Search } from '../../icons';
import { useTheme } from '../../../providers';
import { InputProps } from '../types';

export interface SearchInputProps extends InputProps {}

export const SearchInput = ({ ...rest }: SearchInputProps) => {
  const {
    theme: {
      current: {
        sizing: { scale650 },
      },
    },
  } = useTheme();

  return <Input startEnhancer={<Search size={scale650} />} {...rest} />;
};
