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
        NextButton: {
          style: ({ $theme }: { $theme: CustomThemeType }) => ({
            color: $theme.colors.primaryA,
          }),
        },
        PrevButton: {
          style: ({ $theme }: { $theme: CustomThemeType }) => ({
            color: $theme.colors.primaryA,
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
