import React from 'react';
import { Pagination as BasePagination, SIZE, PaginationProps as BasePaginationProps } from 'baseui/pagination';
import { CustomThemeType } from '../../models';
import { border, margin } from '../../utils';
import { Button } from '../button';
import { CaretLeftIcon, CaretRightIcon } from '../icons';
import { useTheme } from '../../providers';
import { KIND } from 'baseui/button';

export interface PaginationProps extends BasePaginationProps {}

export const Pagination = ({ ...rest }: PaginationProps) => {
  const {
    theme: {
      current: {
        sizing: { scale400 },
        customColors: { dark2 },
      },
    },
  } = useTheme();

  return (
    <BasePagination
      size={SIZE.mini}
      overrides={{
        Root: {
          style: ({ $theme }: { $theme: CustomThemeType }) => ({
            fontSize: $theme.typography.ParagraphXSmall.fontSize,
          }),
        },
        DropdownContainer: {
          style: {
            margin: '0',
          },
        },
        MaxLabel: {
          style: {
            ...margin('0', scale400, '0', '0'),
          },
        },
        NextButton: {
          component: ({ onClick }: any) => (
            <Button type="button" kind={KIND.tertiary} onClick={onClick}>
              <CaretRightIcon color={dark2} />
            </Button>
          ),
        },
        PrevButton: {
          component: ({ onClick }: any) => (
            <Button type="button" kind={KIND.tertiary} onClick={onClick}>
              <CaretLeftIcon color={dark2} />
            </Button>
          ),
        },
        Select: {
          props: {
            overrides: {
              Root: {
                style: ({ $theme }: { $theme: CustomThemeType }) => ({
                  fontSize: $theme.typography.ParagraphXSmall.fontSize,
                  fontWeight: 600,
                  outline: null,
                }),
              },
              ValueContainer: {
                style: {
                  padding: '0',
                  ...margin('0', '0', '0', scale400),
                },
              },
              ControlContainer: {
                style: {
                  backgroundColor: 'none',
                  ...border(),
                  outline: null,
                },
              },
              IconsContainer: {
                style: {
                  padding: '0',
                },
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
