import React from 'react';
import { Input, InputProps } from './Input';
import { border } from '../../utils/css';
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
          InputContainer: {
            style: {
              ...border(),
            },
          },
          Root: {
            style: {
              ...border(),
              backgroundColor: primaryB,
            },
          },
        }}
        {...rest}
      />
  );
};
