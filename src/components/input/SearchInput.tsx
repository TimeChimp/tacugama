import React from 'react';
import { Input, InputProps } from './Input';
import { DATA_TEST_ID } from '../../models/constants';
import { Search } from '../icons';
import useTheme from '../../providers/ThemeProvider';

export interface SearchInputProps extends InputProps {
  testId?: string;
}

export const SearchInput = ({ testId, ...rest }: SearchInputProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
      },
    },
  } = useTheme();

  return (
    <Input
      startEnhancer={<Search size="18px" />}
      overrides={{
        StartEnhancer: {
          style: {
            backgroundColor: primaryB,
          },
        },
        Input: {
          style: {
            backgroundColor: primaryB,
          },
          props: {
            [DATA_TEST_ID]: testId,
          },
        },
        Root: {
          style: {
            backgroundColor: primaryB,
          },
        },
      }}
      {...rest}
    />
  );
};
