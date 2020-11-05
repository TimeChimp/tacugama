import React from 'react';
import { Select as BaseSelect, SelectProps as BaseSelectProps, Option, Value, OnChangeParams } from 'baseui/select';
import { useTheme } from '../../providers';
import {
  border,
  borderBottom,
  borderRadius,
  getInputBorderColor,
  getInputPlaceholderTextColor,
  margin,
  padding,
} from '../../utils';
import { BottomArrow } from '../icons';
import { Skeleton } from '../skeleton';

export interface SelectProps extends BaseSelectProps {
  options: Option[];
  propOverrides?: {
    dropdownListItemProps?: () => {};
    rootProps?: () => {};
  };
}

export const Select = ({ size = 'compact', isLoading, propOverrides, ...rest }: SelectProps) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        sizing: { scale0, scale200, scale900 },
        typography: { ParagraphSmall, LabelSmall },
        lighting: { shadow400 },
      },
    },
  } = useTheme();
  const { border300 } = borders;
  const { primaryB, primary100 } = colors;
  return (
    <>
      {isLoading ? (
        <Skeleton width="100%" height={scale900} animation />
      ) : (
        <BaseSelect
          size={size}
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
                boxShadow: shadow400,
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
              component: () => <BottomArrow />,
            },
            ClearIcon: {
              style: {
                ...margin('0', scale200),
              },
            },
          }}
        />
      )}
    </>
  );
};

export { Option, Value, OnChangeParams };
