import React from 'react';
import { Pagination as BasePagination, SIZE, PaginationProps as BasePaginationProps } from 'baseui/pagination';
import { CustomThemeType } from '../../models';
import { border, borderRadius, padding } from '../../utils';
import { Button } from '../button';
import { CaretLeftIcon } from '../icons/caret-left';
import { CaretRightIcon } from '../icons/caret-right';
import { useTheme } from '../../providers';

export interface PaginationProps extends BasePaginationProps {}

export const Pagination = ({ ...rest }: PaginationProps) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale600 },
        customColors: { dark2, light3 },
        borders: { radius200, border100 },
      },
    },
  } = useTheme();

  const buttonOverrides = {
    Root: {
      style: {
        ...borderRadius(radius200),
        ...padding(scale200, scale600),
        ...border({
          ...border100,
        }),
        fontWeight: 'normal',
        backgroundColor: light3,
        ':hover': {
          backgroundColor: light3,
        },
        ':active': {
          backgroundColor: light3,
        },
      },
    },
  };
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
          component: ({ onClick }: any) => (
            <Button type="button" onClick={onClick} overrides={buttonOverrides}>
              <CaretRightIcon color={dark2} />
            </Button>
          ),
        },
        PrevButton: {
          component: ({ onClick }: any) => (
            <Button type="button" onClick={onClick} overrides={buttonOverrides}>
              <CaretLeftIcon color={dark2} />
            </Button>
          ),
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
                style: () => ({
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
