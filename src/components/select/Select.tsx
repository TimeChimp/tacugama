import React from 'react';
import { Select as BaseSelect, SelectProps as BaseSelectProps, Option, Value, OnChangeParams } from 'baseui/select';
import { useTheme } from '../../providers';
import {
  border,
  borderBottom,
  borderRadius,
  getInputBorderColor,
  getInputPlaceholderTextColor,
  padding,
} from '../../utils';
import { BottomArrow } from '../icons';
import { Skeleton } from '../skeleton';
import { FlexItem } from '../flex-item';

interface CustomParams {
  value: any;
  option?: Option;
  type?: any;
}

export interface SelectProps extends BaseSelectProps {
  showSkeleton?: boolean;
  options: Option[];
  onChangeHandler?: (params: OnChangeParams) => void;
  propOverrides?: {
    dropdownListItemProps?: () => {};
    rootProps?: () => {};
  };
}

export const Select = ({
  size = 'compact',
  valueKey = 'id',
  labelKey = 'name',
  showSkeleton = false,
  propOverrides,
  onChangeHandler,
  ...rest
}: SelectProps) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        sizing: { scale0, scale100, scale700, scale900 },
        typography: { ParagraphSmall, LabelSmall },
      },
    },
  } = useTheme();
  const { border300, radius100 } = borders;
  const { primaryB, primary100 } = colors;

  const handleOnChange = (params: CustomParams) => {
    if (onChangeHandler) {
      if (params.value.length === 1) {
        onChangeHandler({ ...params, value: params.value[0] });
      } else {
        onChangeHandler({ ...params, value: params.value });
      }
    }
  };

  return (
    <>
      {showSkeleton ? (
        <Skeleton width="100%" height={scale900} animation />
      ) : (
        <BaseSelect
          size={size}
          valueKey={valueKey}
          labelKey={labelKey}
          onChange={handleOnChange}
          {...rest}
          overrides={{
            ControlContainer: {
              style: {
                backgroundColor: primaryB,
                ...border(),
                ...borderRadius(scale0),
              },
            },
            Root: {
              style: ({ $error, $isFocused }) => ({
                backgroundColor: primaryB,
                ...borderRadius(scale0),
                ...border({
                  ...border300,
                  borderColor: getInputBorderColor($error, $isFocused, colors, borders),
                }),
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
              },
            },
            Dropdown: {
              style: {
                ...padding('0'),
                ...borderRadius(radius100),
                maxHeight: '300px',
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
            SelectArrow: {
              component: () => (
                <FlexItem marg1="0" marg2="0" marg3="0" marg4={scale100} width="auto">
                  <BottomArrow />
                </FlexItem>
              ),
            },
            ClearIcon: {
              style: {
                width: scale700,
                height: scale700,
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
