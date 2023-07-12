import React from 'react';
import { Select as BaseSelect, Option, Value, OnChangeParams, Options } from 'baseui/select';
import { useTheme } from '../../../providers';
import {
  border,
  borderBottom,
  borderRadius,
  getInputBorderColor,
  getInputBackgroundColor,
  padding,
  margin,
} from '../../../utils';
import { Skeleton } from '../../skeleton';
import { FlexItem } from '../../flex-item';
import { CaretDownIcon } from '../../icons/caret-down';
import { SelectProps } from './types';
import { DEFAULT_LABEL_KEY, DEFAULT_VALUE_KEY } from '../single-select';

export const MultiSelect = ({
  size = 'compact',
  valueKey = DEFAULT_VALUE_KEY,
  labelKey = DEFAULT_LABEL_KEY,
  showSkeleton = false,
  propOverrides,
  options,
  success = false,
  disableSortOptions = false,
  disabled = false,
  error = false,
  isLoading = false,
  ...rest
}: SelectProps) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        customColors,
        sizing: { scale0, scale100, scale300, scale600, scale700, scale950 },
        customSizing: { scale975 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();
  const { border300, radius200 } = borders;
  const { primary100, contentPrimary } = colors;
  const { primarySubtle, dark4 } = customColors;

  const alphabetizeOptions = (options: Options, disableSortOptions?: boolean) => {
    if (!options) {
      return [];
    }
    if (disableSortOptions) {
      return options;
    }
    if (!Array.isArray(options)) {
      return Object.entries(options).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value.length > 1 ? [...value].sort((a, b) => a[labelKey]?.localeCompare(b[labelKey])) : value,
      })) as Option[];
    }
    return options.length > 1 ? [...options].sort((a, b) => a[labelKey]?.localeCompare(b[labelKey])) : options;
  };

  return (
    <>
      {showSkeleton ? (
        <Skeleton width="100%" height={scale975} animation />
      ) : (
        <BaseSelect
          size={size}
          valueKey={valueKey}
          labelKey={labelKey}
          disabled={disabled || isLoading}
          error={error}
          multi
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
                gap: scale300,
              },
            },
            Dropdown: {
              style: {
                ...padding('0'),
                ...borderRadius(radius200),
                maxHeight: '300px',
                boxShadow: 'none',
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
