import React from 'react';
import { Select as BaseSelect, SelectProps as BaseSelectProps, Option, Value, OnChangeParams } from 'baseui/select';
import { useTheme } from '../../providers';
import { border, borderBottom, borderRadius, getInputPlaceholderTextColor, padding } from '../../utils';
import { BottomArrow, LockFilled } from '../icons';
import { Skeleton } from '../skeleton';
import { FlexItem } from '../flex-item';

export interface RowSelectProps extends BaseSelectProps {
  showSkeleton?: boolean;
  isLocked?: boolean;
  options: Option[];
  propOverrides?: {
    dropdownListItemProps?: () => {};
    rootProps?: () => {};
  };
}

export const RowSelect = ({
  size = 'compact',
  valueKey = 'id',
  labelKey = 'name',
  showSkeleton = false,
  isLocked = false,
  propOverrides,
  ...rest
}: RowSelectProps) => {
  const {
    theme: {
      current: {
        colors,
        customColors,
        borders,
        sizing: { scale0, scale100, scale300, scale600, scale700, scale900 },
        typography: { ParagraphSmall, LabelSmall },
      },
    },
  } = useTheme();
  const { border300, radius100 } = borders;
  const { primary100, contentPrimary } = colors;

  return (
    <>
      {showSkeleton ? (
        <Skeleton width="100%" height={scale900} animation />
      ) : (
        <BaseSelect
          size={size}
          valueKey={valueKey}
          labelKey={labelKey}
          {...rest}
          overrides={{
            ControlContainer: {
              style: {
                backgroundColor: customColors.primarySubtle,
                ...border(),
                ...borderRadius(scale0),
                pointerEvents: isLocked ? 'none' : 'unset',
              },
            },
            Root: {
              style: () => ({
                backgroundColor: customColors.primarySubtle,
                ...borderRadius(scale0),
                minWidth: '175px', // NOTE: Value does not exist in theme
              }),
              props: {
                ...propOverrides?.rootProps?.apply(propOverrides),
              },
            },
            Placeholder: {
              style: ({ $disabled, $isFocused }) => ({
                ...ParagraphSmall,
                color: getInputPlaceholderTextColor($disabled, $isFocused, colors),
              }),
            },
            DropdownContainer: {
              style: {
                ...borderRadius(scale0),
                ...border(border300),
              },
            },
            Input: {
              style: {
                ...LabelSmall,
              },
            },
            ValueContainer: {
              style: {
                ...LabelSmall,
                ...padding(scale0, '0', scale0, scale100),
                fontWeight: 400,
              },
            },
            Dropdown: {
              style: {
                ...padding('0'),
                ...borderRadius(radius100),
                maxHeight: '300px', // NOTE: Value does not exist in theme
              },
            },
            DropdownListItem: {
              style: {
                ...borderBottom(border300),
                ...ParagraphSmall,
                ':hover': {
                  backgroundColor: primary100,
                },
              },
              props: {
                ...propOverrides?.dropdownListItemProps?.apply(propOverrides),
              },
            },
            IconsContainer: {
              style: {
                ...padding('0', scale300, '0', '0'),
              },
            },
            SelectArrow: {
              component: () => (
                <FlexItem marg1="0" marg2="0" marg3="0" marg4={scale100} width="auto">
                  {isLocked ? (
                    <LockFilled color={contentPrimary} size={scale600} iconStyle={{ display: 'flex' }} />
                  ) : (
                    <BottomArrow />
                  )}
                </FlexItem>
              ),
            },
            ClearIcon: {
              style: {
                display: 'none',
              },
            },
            LoadingIndicator: {
              props: {
                overrides: {
                  Svg: {
                    style: {
                      width: scale700,
                      height: scale700,
                    },
                  },
                },
              },
            },
            Popover: {
              props: {
                overrides: {
                  Body: {
                    style: {
                      zIndex: 99999,
                    },
                  },
                },
              },
            },
          }}
        />
      )}
    </>
  );
};

export type { Option, Value, OnChangeParams };
