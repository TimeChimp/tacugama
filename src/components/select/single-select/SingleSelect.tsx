import React from 'react';
import { CaretDownIcon, FlexItem, Skeleton } from '../..';
import SelectCreatable from 'react-select/creatable';
import Select, { Props as SelectProps } from 'react-select';
import { useTheme } from '../../../providers';
import {
  border,
  borderBottom,
  borderRadius,
  getInputBorderColor,
  getInputBackgroundColor,
  padding,
} from '../../../utils';
import { SingleSelectProps, Option } from './types';

export const DEFAULT_VALUE_KEY = 'id';
export const DEFAULT_LABEL_KEY = 'name';

export const SingleSelect = <ValueType extends string, ValueKey extends string, LabelKey extends string>({
  valueKey,
  labelKey,
  defaultValue,
  showSkeleton = false,
  disableSortOptions = false,
  options,
  clearable = false,
  searchable = true,
  isLoading = false,
  creatable = false,
  disabled = false,
  error = false,
  success = false,
  onChange,
  placeholder,
  createText = (inputValue: string) => `Create ${inputValue}`,
  onCreateOption,
}: SingleSelectProps<ValueType, ValueKey, LabelKey>) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        customColors,
        sizing: { scale100, scale300, scale600, scale950 },
        customSizing: { scale975 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();
  const { border300, radius200 } = borders;
  const { primary100, contentPrimary, primaryB } = colors;
  const { dark4 } = customColors;

  const alphabetizeOptions = (options: Option<ValueType, ValueKey, LabelKey>[], disableSortOptions?: boolean) => {
    if (!options) {
      return [];
    }
    if (disableSortOptions) {
      return options;
    }

    return options.length > 1
      ? [...options].sort((a, b) => a[labelKey ?? DEFAULT_LABEL_KEY]?.localeCompare(b[labelKey ?? DEFAULT_LABEL_KEY]))
      : options;
  };

  const alphabetizedOptions = alphabetizeOptions(options, disableSortOptions);

  const props: SelectProps<Option<ValueType, ValueKey, LabelKey>, false> = {
    onChange,
    defaultValue,
    options: alphabetizedOptions,
    placeholder,
    isClearable: clearable,
    isSearchable: searchable,
    isDisabled: disabled || isLoading,
    isLoading,
    getOptionLabel: (option: Option<ValueType, ValueKey, LabelKey>) => {
      if (option.__isNew__) {
        return createText(option.value);
      }

      return option[labelKey ?? DEFAULT_LABEL_KEY];
    },
    getOptionValue: (option: Option<ValueType, ValueKey, LabelKey>) => option[valueKey ?? DEFAULT_VALUE_KEY],
    styles: {
      control: (provided, { isFocused }) => ({
        ...provided,
        backgroundColor: getInputBackgroundColor({ disabled, customColors, colors }),
        ...borderRadius(radius200),
        ...border({
          ...border300,
          borderColor: getInputBorderColor({
            error,
            success,
            isFocused,
            customColors,
            colors,
          }),
        }),
        boxShadow: 'none',
        height: scale950,
        ':hover': {
          ...border({
            ...border300,
            borderColor: getInputBorderColor({
              error,
              success,
              isFocused,
              customColors,
              colors,
              hover: true,
              disabled,
            }),
          }),
        },
      }),
      valueContainer: (provided) => ({
        ...provided,
        ...padding('0', scale600),
      }),
      placeholder: (provided) => ({
        ...provided,
        ...ParagraphSmall,
        color: dark4,
      }),
      input: (provided) => ({
        ...provided,
        ...ParagraphSmall,
      }),
      singleValue: (provided) => ({
        ...provided,
        ...ParagraphSmall,
        lineHeight: scale950,
      }),
      menu: (provided) => ({
        ...provided,
        zIndex: 99999,
        ...borderRadius(radius200),
        ...border(border300),
        boxShadow: 'none',
      }),
      menuList: (provided) => ({
        ...provided,
        ...padding(),
      }),
      option: (provided, { isSelected }) => ({
        ...provided,
        ...borderBottom(border300),
        ...ParagraphSmall,
        color: contentPrimary,
        ':hover': {
          backgroundColor: primary100,
        },
        backgroundColor: isSelected ? primary100 : primaryB,
        cursor: 'pointer',
        ...padding(scale300, scale600),
        ':last-child': {
          borderBottomLeftRadius: radius200,
          borderBottomRightRadius: radius200,
          ...borderBottom(),
        },
        ':first-child': {
          borderTopLeftRadius: radius200,
          borderTopRightRadius: radius200,
        },
      }),
      indicatorSeparator: () => ({
        display: 'none',
      }),
      noOptionsMessage: (provided) => ({
        ...provided,
        ...ParagraphSmall,
        color: dark4,
      }),
    },
    components: {
      DropdownIndicator: () => (
        <FlexItem marg1="0" marg2={scale600} marg3="0" marg4={scale100} width="auto">
          <CaretDownIcon />
        </FlexItem>
      ),
    },
  };

  return (
    <>
      {showSkeleton ? (
        <Skeleton width="100%" height={scale975} animation />
      ) : (
        <>{creatable ? <SelectCreatable {...props} onCreateOption={onCreateOption} /> : <Select {...props} />}</>
      )}
    </>
  );
};
