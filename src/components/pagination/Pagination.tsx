import React from 'react';
import { Pagination as BasePagination, SIZE, PaginationProps as BasePaginationProps } from 'baseui/pagination';
import { CustomThemeType } from '../../models/Theme';

export interface PaginationProps extends BasePaginationProps {}

export const Pagination = ({ ...rest }: PaginationProps) => {
  return (
    <BasePagination
      size={SIZE.mini}
      overrides={{
        Root: {
          style: ({ $theme }: { $theme: CustomThemeType }) => ({
            fontSize: $theme.typography.LabelXSmall.fontSize,
          }),
        },
        Select: {
          props: {
            overrides: {
              Root: {
                style: ({ $theme }: { $theme: CustomThemeType }) => ({
                  fontSize: $theme.typography.LabelXSmall.fontSize,
                }),
              },
            },
          },
        },
      }}
      {...rest}
    />
  );
};

export default Pagination;
