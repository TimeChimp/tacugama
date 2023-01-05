import React from 'react';
import { Select as BaseSelect, Option, Value, OnChangeParams } from 'baseui/select';
import { useTheme } from '../../providers';
import {
  border,
  borderBottom,
  borderRadius,
  getInputBorderColor,
  getInputBackgroundColor,
  padding,
  margin,
} from '../../utils';
import { Skeleton } from '../skeleton';
import { FlexItem } from '../flex-item';
import { CaretDownIcon } from '../icons/caret-down';
import { SelectProps } from './types';

export const Select = ({
  size = 'compact',
  valueKey = 'id',
  labelKey = 'name',
  showSkeleton = false,
  propOverrides,
  onChangeHandler,
  multi,
  options,
  success = false,
  disableSortOptions = false,
  disabled = false,
  error = false,
  ...rest
}: SelectProps) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        customColors,
        sizing: { scale0, scale100, scale600, scale700, scale900, scale950 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();
  const { border300, radius200 } = borders;
  const { primary100, contentPrimary } = colors;
  const { primarySubtle, dark4 } = customColors;

  const handleOnChange = (params: OnChangeParams) => {
    if (multi) {
      return onChangeHandler(params);
    }
    const { value } = params;
    return onChangeHandler({ ...params, value: value?.length === 1 ? value[0] : value });
  };

  const alphabetizeOptions = (options: Option[], disableSortOptions?: boolean) => {
    if (!options) {
      return [];
    }
    if (disableSortOptions) {
      return options;
    }
    return options.length > 1 ? [...options].sort((a, b) => a[labelKey]?.localeCompare(b[labelKey])) : options;
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
          disabled={disabled}
          error={error}
          multi={multi}
          type="select"
          options={alphabetizeOptions(options, disableSortOptions)}
          {...rest}
          overrides={{
            ControlContainer: {
              style: {
                backgroundColor: getInputBackgroundColor({ disabled, customColors, colors }),
                ...border(),
                ...borderRadius(radius200),
                height: scale950,
              },
            },
            Root: {
              style: ({ $error, $isFocused }) => ({
                backgroundColor: getInputBackgroundColor({ disabled, customColors, colors }),
                ...borderRadius(radius200),
                ...border({
                  ...border300,
                  borderColor: getInputBorderColor({
                    error: $error,
                    success,
                    isFocused: $isFocused,
                    customColors,
                    colors,
                  }),
                }),
                ':hover': {
                  ...border({
                    ...border300,
                    borderColor: getInputBorderColor({
                      error: $error,
                      success,
                      isFocused: $isFocused,
                      customColors,
                      colors,
                      hover: true,
                      disabled,
                    }),
                  }),
                },
              }),
              props: {
                ...propOverrides?.rootProps?.apply(propOverrides),
              },
            },
            Placeholder: {
              style: {
                ...ParagraphSmall,
                color: dark4,
                ...margin('0', '0', '0', `-${scale0}`),
              },
            },
            DropdownContainer: {
              style: {
                ...borderRadius(radius200),
                ...border(border300),
              },
            },
            Input: {
              style: {
                ...ParagraphSmall,
                '::placeholder': {
                  color: customColors.dark4,
                },
              },
            },
            ValueContainer: {
              style: {
                ...ParagraphSmall,
                ...padding('0', scale600),
              },
            },
            Dropdown: {
              style: {
                ...padding('0'),
                ...borderRadius(radius200),
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
                  <CaretDownIcon />
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
            Tag: {
              props: {
                overrides: {
                  Root: {
                    style: {
                      backgroundColor: primarySubtle,
                      ...borderRadius(radius200),
                      ...margin('0'),
                    },
                  },
                  Text: {
                    style: {
                      ...ParagraphSmall,
                      color: contentPrimary,
                    },
                  },
                  Action: {
                    style: {
                      color: '#4A4A4A', // NOTE: property does not exist in theme
                    },
                  },
                },
              },
            },
            SingleValue: {
              style: {
                lineHeight: scale950,
              },
            },
          }}
        />
      )}
    </>
  );
};

export type { Option, Value, OnChangeParams };
