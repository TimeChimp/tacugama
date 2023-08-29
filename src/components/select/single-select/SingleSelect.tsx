import React, { useMemo } from 'react';
import { SingleSelectProps, Option } from './types';
import { CaretDownIcon, FlexItem, Skeleton } from '../..';
import SelectCreatable from 'react-select/creatable';
import SelectAsync from 'react-select/async';
import Select, { Props as SelectProps, components } from 'react-select';
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

export const DEFAULT_VALUE_KEY = 'id';
export const DEFAULT_LABEL_KEY = 'name';

export const SingleSelect = <
  ValueType extends string | number | Date,
  ValueKey extends string,
  LabelKey extends string,
>({
  valueKey,
  labelKey,
  value,
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
  loadOptions,
  cacheOptions,
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
  const { dark4, light7 } = customColors;

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

  const optionBackgroundColor = (isSelected: boolean, isFocused: boolean) => {
    if (isSelected) {
      return primary100;
    }
    return isFocused ? light7 : primaryB;
  };

  const props: SelectProps<Option<ValueType, ValueKey, LabelKey>, false> = useMemo(
    () => ({
      onChange,
      value,
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
        option: (provided, { isSelected, isFocused }) => ({
          ...provided,
          ...borderBottom(border300),
          ...ParagraphSmall,
          color: contentPrimary,
          backgroundColor: optionBackgroundColor(isSelected, isFocused),
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
        Input: (props) => <components.Input {...props} aria-haspopup="listbox" />,
        Menu: (props) => <components.Menu {...props} innerProps={{ ...props.innerProps, role: 'listbox' }} />,
        Option: (props) => <components.Option {...props} innerProps={{ ...props.innerProps, role: 'listitem' }} />,
      },
    }),
    [
      ParagraphSmall,
      alphabetizedOptions,
      border300,
      clearable,
      colors,
      contentPrimary,
      createText,
      customColors,
      dark4,
      defaultValue,
      disabled,
      error,
      isLoading,
      labelKey,
      noOptionsMessage,
      onChange,
      placeholder,
      primary100,
      primaryB,
      radius200,
      scale100,
      scale300,
      scale600,
      scale950,
      searchable,
      success,
      value,
      valueKey,
    ],
  );

  const SelectComponent = useMemo(() => {
    if (creatable) {
      return <SelectCreatable {...props} onCreateOption={onCreateOption} menuPortalTarget={document.body} />;
    }
    if (loadOptions) {
      return <SelectAsync {...props} loadOptions={loadOptions} cacheOptions={cacheOptions} defaultOptions={options} />;
    }
    return <Select {...props} menuPortalTarget={document.body} />;
  }, [cacheOptions, creatable, loadOptions, onCreateOption, props]);

  return <>{showSkeleton ? <Skeleton width="100%" height={scale975} animation /> : <>{SelectComponent}</>}</>;
};
