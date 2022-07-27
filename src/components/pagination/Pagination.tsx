import React from 'react';
import { Pagination as BasePagination, SIZE, PaginationProps as BasePaginationProps } from 'baseui/pagination';
import { CustomThemeType } from '../../models';
import { border, borderRadius, margin, padding } from '../../utils';
import { Button } from 'components/button';
import { LeftArrow, RightArrow } from 'components/icons';
import { useTheme } from '../../providers';

export interface PaginationProps extends BasePaginationProps {}

export const Pagination = ({ ...rest }: PaginationProps) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale400, scale600 },
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
            <Button onClick={onClick} overrides={buttonOverrides}>
              <RightArrow size={scale400} color={dark2} />
            </Button>
          ),
        },
        PrevButton: {
          component: ({ onClick }: any) => (
            <Button onClick={onClick} overrides={buttonOverrides}>
              <LeftArrow size={scale400} color={dark2} />
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
                  ...padding('0'),
                  ...margin('0'),
                }),
              },
              ControlContainer: {
                style: ({ $theme }: { $theme: CustomThemeType }) => ({
                  backgroundColor: 'none',
                  ...border(),
                  outline: null,
                  ...padding('0'),
                  ...margin('0'),
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
