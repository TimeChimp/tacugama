import React from 'react';
import { CaretDownIcon, DEFAULT_LABEL_KEY, DEFAULT_VALUE_KEY, FlexItem, SingleSelectOption, Skeleton } from '../..';
import SelectCreatable from 'react-select/creatable';
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
import { MultiSelectProps } from './types';
import { ParagraphXSmall } from '../../typography';
import { HIGH_Z_INDEX } from '../../../models';

// TODO: Find way to share props between SingleSelect and MultiSelect

export const MultiSelect = <
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
  inputId,
  isGrouped = false,
}: MultiSelectProps<ValueType, ValueKey, LabelKey>) => {
  const {
    theme: {
      current: {
        colors,
        borders,
        customColors,
        sizing: { scale0, scale100, scale300, scale600, scale950, scale400, scale700 },
        customSizing: { scale975 },
        typography: { ParagraphSmall },
      },
    },
  } = useTheme();
  const { border300, radius200 } = borders;
  const { primary100, contentPrimary, primaryB } = colors;
  const { dark4, primarySubtle, light7, dark3 } = customColors;

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

  const alphabetizedGroupedOptions = (
    groupedOptions: { label: string; options: SingleSelectOption<ValueType, ValueKey, LabelKey>[] }[],
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
        options as { label: string; options: SingleSelectOption<ValueType, ValueKey, LabelKey>[] }[],
        disableSortOptions,
      )
    : alphabetizeOptions(options as SingleSelectOption<ValueType, ValueKey, LabelKey>[], disableSortOptions);

  const optionBackgroundColor = (isSelected: boolean, isFocused: boolean) => {
    if (isSelected) {
      return primary100;
    }
    return isFocused ? light7 : primaryB;
  };

  const props: SelectProps<SingleSelectOption<ValueType, ValueKey, LabelKey>, true> = {
    onChange,
    isMulti: true,
    defaultValue,
    value,
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
        ...margin(scale300, '0'),
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
        color: contentPrimary,
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
          ...borderRadius(radius200),
        },
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
          <CaretDownIcon />
        </FlexItem>
      ),
      Input: (props) => {
        const customProps = inputId ? { ...props, id: inputId } : { ...props };
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
  };

  return (
    <>
      {showSkeleton ? (
        <Skeleton width="100%" height={scale975} animation />
      ) : (
        <>
          {creatable ? (
            <SelectCreatable {...props} onCreateOption={onCreateOption} menuPortalTarget={document?.body} />
          ) : (
            <Select {...props} menuPortalTarget={document?.body} />
          )}
        </>
      )}
    </>
  );
};
