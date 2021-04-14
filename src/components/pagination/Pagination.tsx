import React from 'react';
import { Pagination as BasePagination, SIZE, PaginationProps as BasePaginationProps } from 'baseui/pagination';
import { CustomThemeType } from '../../models/Theme';
import { border } from '../../utils';

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
                  fontWeight: 600,
                  outline: null,
                }),
              },
              ControlContainer: {
                style: ({ $theme }: { $theme: CustomThemeType }) => ({
                  backgroundColor: 'none',
                  ...border(),
                  outline: null,
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
