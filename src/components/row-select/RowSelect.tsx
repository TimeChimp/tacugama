import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Select as BaseSelect, Option, Value, OnChangeParams } from 'baseui/select';
import { useTheme } from '../../providers';
import { border, borderBottom, borderRadius, padding } from '../../utils';
import { Skeleton } from '../skeleton';
import { FlexItem } from '../flex-item';
import { CaretDownIcon } from '../icons/caret-down';
import { LockedIcon } from '../icons/locked';
import { FormInput, RowSelectProps } from './types';

export const RowSelect = ({
  size = 'compact',
  valueKey = 'id',
  labelKey = 'name',
  showSkeleton = false,
  isLockedIconDisplayedFunc,
  propOverrides,
  onChangeHandler,
  data,
  options,
  optionProp,
  ...rest
}: RowSelectProps) => {
  const {
    theme: {
      current: {
        colors,
        customColors: { primarySubtle, dark4 },
        borders,
        sizing: { scale0, scale100, scale300, scale700, scale900 },
        typography: { ParagraphSmall, LabelSmall },
      },
    },
  } = useTheme();
  const { watch, reset } = useForm<FormInput>({
    mode: 'onChange',
  });

  const defaultSelectOption = useMemo(() => {
    return options.find((option) => option[valueKey] === data[optionProp]);
  }, [options, data, optionProp, valueKey]);

  const { selectOption = [defaultSelectOption!] } = watch();

  const { border300, radius200 } = borders;
  const { primary100, contentPrimary } = colors;

  const handleOnChange = (selectData: { value: Value }) => {
    reset({
      selectOption: selectData.value,
    });
    onChangeHandler({ ...selectData, ...data });
  };

  const isLocked = useMemo(() => {
    if (isLockedIconDisplayedFunc) {
      return isLockedIconDisplayedFunc(data);
    }
  }, [isLockedIconDisplayedFunc, data]);

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
          options={options}
          value={selectOption}
          searchable={false}
          overrides={{
            ControlContainer: {
              style: {
                backgroundColor: primarySubtle,
                ...border(),
                ...borderRadius(scale0),
                pointerEvents: isLocked ? 'none' : 'unset',
              },
            },
            Root: {
              style: () => ({
                backgroundColor: primarySubtle,
                ...borderRadius(scale0),
                minWidth: '175px', // NOTE: Value does not exist in theme
              }),
              props: {
                ...propOverrides?.rootProps?.apply(propOverrides),
              },
            },
            Placeholder: {
              style: {
                ...ParagraphSmall,
                color: dark4,
              },
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
                ...borderRadius(radius200),
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
                  {isLocked ? <LockedIcon color={contentPrimary} iconStyle={{ display: 'flex' }} /> : <CaretDownIcon />}
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
