import React from 'react';
import { CaretDownIcon, DEFAULT_LABEL_KEY, DEFAULT_VALUE_KEY, FlexItem, SingleSelectOption, Skeleton } from '../..';
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
  margin,
} from '../../../utils';
import { MultiSelectProps } from './types';

// TODO: Find way to share props between SingleSelect and MultiSelect

export const MultiSelect = <
  ValueType extends string | number | Date,
  ValueKey extends string,
  LabelKey extends string,
>({
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
  noOptionsMessage = () => 'No options',
  onCreateOption,
}: MultiSelectProps<ValueType, ValueKey, LabelKey>) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        customColors,
        sizing: { scale0, scale100, scale300, scale600, scale950 },
        customSizing: { scale975 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();
  const { border300, radius200 } = borders;
  const { primary100, contentPrimary, primaryB } = colors;
  const { dark4, primarySubtle } = customColors;

  const alphabetizeOptions = (
    options: SingleSelectOption<ValueType, ValueKey, LabelKey>[],
    disableSortOptions?: boolean,
  ) => {
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

  const props: SelectProps<SingleSelectOption<ValueType, ValueKey, LabelKey>, true> = {
    onChange,
    isMulti: true,
    defaultValue,
    options: alphabetizedOptions,
    placeholder,
    isClearable: clearable,
    isSearchable: searchable,
    isDisabled: disabled || isLoading,
    isLoading,
    getOptionLabel: (option: SingleSelectOption<ValueType, ValueKey, LabelKey>) => {
      if (option.__isNew__) {
        return createText(option.value);
      }

      return option[labelKey ?? DEFAULT_LABEL_KEY];
    },
    getOptionValue: (option: SingleSelectOption<ValueType, ValueKey, LabelKey>) =>
      option[valueKey ?? DEFAULT_VALUE_KEY],
    noOptionsMessage,
    styles: {
      container: (provided) => ({
        ...provided,
        width: '100%',
      }),
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
        minHeight: scale950,
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
        ...margin(scale300, '0'),
      }),
      input: (provided) => ({
        ...provided,
        ...ParagraphSmall,
      }),
      menu: (provided) => ({
        ...provided,
        ...borderRadius(radius200),
        ...border(border300),
        boxShadow: 'none',
        ...margin(scale100, '0'),
      }),
      menuList: (provided) => ({
        ...provided,
        ...padding(),
      }),
      menuPortal: (provided) => ({
        ...provided,
        zIndex: 99999,
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
        ':first-of-type': {
          borderTopLeftRadius: radius200,
          borderTopRightRadius: radius200,
        },
        ':last-of-type': {
          borderBottomLeftRadius: radius200,
          borderBottomRightRadius: radius200,
          ...borderBottom(),
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
      multiValue: (provided) => ({
        ...provided,
        ...borderRadius(radius200),
        backgroundColor: primarySubtle,
        ...margin(scale0, scale100, scale0, '0'),
      }),
      multiValueLabel: (provided) => ({
        ...provided,
        ...ParagraphSmall,
        color: contentPrimary,
      }),
      multiValueRemove: (provided) => ({
        ...provided,
        ':hover': {
          backgroundColor: primarySubtle,
          color: contentPrimary,
          cursor: 'pointer',
        },
      }),
      clearIndicator: (provided) => ({
        ...provided,
        cursor: 'pointer',
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
        <>
          {creatable ? (
            <SelectCreatable {...props} onCreateOption={onCreateOption} menuPortalTarget={document.body} />
          ) : (
            <Select {...props} menuPortalTarget={document.body} />
          )}
        </>
      )}
    </>
  );
};
