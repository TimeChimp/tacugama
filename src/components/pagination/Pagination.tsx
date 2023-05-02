import React from 'react';
import { Pagination as BasePagination, SIZE, PaginationProps as BasePaginationProps } from 'baseui/pagination';
import { ButtonKind, CustomThemeType } from '../../models';
import { border, borderRadius, margin, padding } from '../../utils';
import { Button } from '../button';
import { CaretLeftIcon } from '../icons/caret-left';
import { CaretRightIcon } from '../icons/caret-right';
import { useTheme } from '../../providers';

export type PaginationProps = BasePaginationProps;

export const Pagination = ({ ...rest }: PaginationProps) => {
  const {
    theme: {
      current: {
        sizing: { scale400, scale1400 },
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
            ...margin('0'),
          },
        },
        MaxLabel: {
          style: {
            ...margin('0', scale400, '0', '0'),
          },
        },
        NextButton: {
          component: ({ onClick }: any) => (
            <Button type="button" kind={ButtonKind.tertiary} shape="square" onClick={onClick}>
              <CaretRightIcon color={dark2} />
            </Button>
          ),
        },
        PrevButton: {
          component: ({ onClick }: any) => (
            <Button type="button" kind={ButtonKind.tertiary} shape="square" onClick={onClick}>
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
                  ...margin('0'),
                  width: scale1400,
                }),
              },
              Dropdown: {
                style: ({ $theme }: { $theme: CustomThemeType }) => ({
                  ...borderRadius($theme.borders.radius200),
                }),
              },
              IconsContainer: {
                style: {
                  ...padding('0'),
                },
              },
              ValueContainer: {
                style: {
                  ...padding('0'),
                  ...margin('0', '0', '0', scale400),
                },
              },
              ControlContainer: {
                style: {
                  backgroundColor: 'none',
                  ...border(),
                  outline: null,
                  ...margin('0'),
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
