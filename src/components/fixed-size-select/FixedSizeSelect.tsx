import React, { useEffect, useState } from 'react';
import { Option, Select, Value } from 'baseui/select';
import { border, borderRadius, padding } from '../../utils';
import { useTheme } from '../../providers';
import { VirtualScrollList } from '../virtual-scroll-list';
import { FixedSizeSelectProps } from './types';

const defaultOptions: Option[] = [];
for (let i = 0; i < 10000; i += 1) {
  defaultOptions.push({
    id: i,
    label: '' + i,
  });
}

export const FixedSizeSelect = ({ items, selection, selectedIds, searchPlaceholder }: FixedSizeSelectProps) => {
  const [value, setValue] = useState<Value>([]);
  const [dropdownItems, setDropdownItems] = useState<any[]>([]);

  useEffect(() => {
    const dropDownItems = items
      .filter((x) => {
        if (x.filterConditions?.length && x.context) {
          return x.filterConditions?.every(({ value, name, comparator }: any) => {
            return comparator(value, name, x.context);
          });
        }

        // return !searchTerm || x.label?.toLowerCase().includes(searchTerm?.toLowerCase());
      })
      .map((x) => ({
        ...x,
        checkbox: selection,
        // @ts-expect-error typing issue
        isChecked: selectedIds && x.id ? selectedIds.includes(x.id) : false,
      }));

    setDropdownItems(dropDownItems);
  }, [items, selection, selectedIds]);

  const {
    theme: {
      current: {
        sizing: { scale200, scale300, scale400 },
        borders: { border300, radius200 },
        colors,
        customColors,
        customSizing: { scale975 },
      },
    },
  } = useTheme();
  const { primaryB } = colors;
  const { light2 } = customColors;

  return (
    <Select
      options={dropdownItems.length ? dropdownItems : defaultOptions}
      labelKey="id"
      valueKey="label"
      placeholder={searchPlaceholder || 'Select'}
      overrides={{
        Dropdown: { component: VirtualScrollList },
        Root: {
          style: {
            width: 'auto',
            height: '44px',
            ...padding(scale200, scale300, '0', '0'),
            backgroundColor: primaryB,
          },
        },
        ControlContainer: {
          style: {
            height: scale975,
            backgroundColor: primaryB,
            ...border({
              ...border300,
              borderColor: light2,
            }),
            ...borderRadius(radius200),
            ...padding('0'),
          },
        },
        ValueContainer: {
          style: {
            ...padding(scale200, '0', '0', scale400),
          },
        },
      }}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
};
