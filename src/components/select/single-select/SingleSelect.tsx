import React, { useMemo } from 'react';
import { SingleSelectProps, Option } from './types';
import { FlexItem, Skeleton } from '../..';
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
import { ParagraphXSmall } from '../../typography';
import { HIGH_Z_INDEX } from '../../../models';
import { CaretDown } from '@phosphor-icons/react';

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
  filterOption,
  loadOptions,
  cacheOptions,
  inputId,
  name,
  isGrouped = false,
}: SingleSelectProps<ValueType, ValueKey, LabelKey>) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        customColors,
        sizing: { scale100, scale300, scale600, scale950, scale700, scale400 },
        customSizing: { scale975 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();
  const { border300, radius200 } = borders;
  const { primary100, contentPrimary, primaryB, primary } = colors;
  const { dark4, dark3, light7 } = customColors;

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

  const alphabetizedGroupedOptions = (
    groupedOptions: { label: string; options: Option<ValueType, ValueKey, LabelKey>[] }[],
    disableSortOptions?: boolean,
  ) => {
    if (disableSortOptions) {
      return options;
    }
    return groupedOptions.map((group) => {
      return {
        ...group,
        options: alphabetizeOptions(group.options, disableSortOptions),
      };
    });
  };

  const alphabetizedOptions = isGrouped
    ? alphabetizedGroupedOptions(
        options as { label: string; options: Option<ValueType, ValueKey, LabelKey>[] }[],
        false,
      )
    : alphabetizeOptions(options as Option<ValueType, ValueKey, LabelKey>[], disableSortOptions);

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
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
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
          ...(isGrouped ? padding(scale100, '0', '0', '0') : padding()),
        }),
        menuPortal: (provided) => ({
          ...provided,
          zIndex: HIGH_Z_INDEX,
        }),
        option: (provided, { isSelected, isFocused }) => ({
          ...provided,
          ...ParagraphSmall,
          color: isSelected ? primary : contentPrimary,
          backgroundColor: optionBackgroundColor(isSelected, isFocused),
          cursor: 'pointer',
          ...padding(scale300, scale600),
          ...(!isGrouped
            ? {
                ':first-of-type': {
                  borderTopLeftRadius: radius200,
                  borderTopRightRadius: radius200,
                },
                ':last-of-type': {
                  borderBottomLeftRadius: radius200,
                  borderBottomRightRadius: radius200,
                  ...borderBottom(),
                },
              }
            : {}),
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
        group: (provided) => ({
          ...provided,
          ...padding(scale100, '0', '0', '0'),
          ':last-of-type': {
            'div:last-child div:last-child': {
              borderBottomLeftRadius: radius200,
              borderBottomRightRadius: radius200,
            },
          },
        }),
        groupHeading: (provided) => ({
          ...provided,
          ...padding('0', scale400),
          lineHeight: scale700,
          marginBottom: '0',
        }),
      },
      components: {
        DropdownIndicator: () => (
          <FlexItem marg1="0" marg2={scale600} marg3="0" marg4={scale100} width="auto">
            <CaretDown />
          </FlexItem>
        ),
        Input: (props) => {
          const id = name || inputId;
          const customProps = id ? { ...props, id } : { ...props };
          return <components.Input {...customProps} aria-haspopup="listbox" />;
        },
        Menu: (props) => <components.Menu {...props} innerProps={{ ...props.innerProps, role: 'listbox' }} />,
        Option: (props) => <components.Option {...props} innerProps={{ ...props.innerProps, role: 'listitem' }} />,
      },
      formatGroupLabel: (data) => (
        <ParagraphXSmall color={dark3} as="span">
          {data?.label || ''}
        </ParagraphXSmall>
      ),
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

  const menuPortalTarget = typeof document !== 'undefined' ? document.body : null;

  const SelectComponent = useMemo(() => {
    if (creatable) {
      return (
        <SelectCreatable name={name} {...props} onCreateOption={onCreateOption} menuPortalTarget={menuPortalTarget} />
      );
    }
    if (loadOptions) {
      return (
        <SelectAsync
          name={name}
          {...props}
          loadOptions={loadOptions}
          cacheOptions={cacheOptions}
          defaultOptions={options}
          filterOption={filterOption}
        />
      );
    }
    return <Select name={name} {...props} menuPortalTarget={menuPortalTarget} />;
  }, [cacheOptions, creatable, loadOptions, onCreateOption, props]);

  return <>{showSkeleton ? <Skeleton width="100%" height={scale975} animation /> : <>{SelectComponent}</>}</>;
};
