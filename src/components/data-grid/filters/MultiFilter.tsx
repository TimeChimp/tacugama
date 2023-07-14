import React, { useEffect, useState } from 'react';
import { FilterButton } from './FilterButton';
import { SIZE } from 'baseui/button';
import { Button } from '../../button';
import { Dropdown, DropdownItem } from '../../dropdown';
import { Block } from '../../block';
import { VirtualScrollList } from '../../virtual-scroll-list';
import { padding } from '../../../utils';
import { useTheme } from '../../../providers';
import { MultiFilterProps } from './types';

export const MultiFilter = ({
  values,
  searchPlaceholder,
  valuesLoading,
  icon: Icon,
  title,
  initialSelectedFilterIds,
  isFilterActive,
  applyFiltersLabel,
  onSetFilterClear,
  onApplyFilter,
}: MultiFilterProps) => {
  const [selectedItems, setSelectedItems] = useState<DropdownItem[]>([]);

  const {
    theme: {
      current: {
        sizing: { scale300, scale600 },
        customColors: { light4 },
      },
    },
  } = useTheme();

  useEffect(() => {
    setSelectedItems(values.filter((value) => !!initialSelectedFilterIds?.includes(value.id as string)));
  }, [initialSelectedFilterIds]);

  const handleApplyFilter = () => {
    onApplyFilter(selectedItems.map((item) => item.id as string));
  };

  const handleSelectItem = (item: DropdownItem) => {
    const filteredSelectedItems = selectedItems.filter(({ id }) => id !== item.id);
    if (filteredSelectedItems.length < selectedItems.length) {
      setSelectedItems(filteredSelectedItems);
      return;
    }
    setSelectedItems([...selectedItems, item]);
  };

  const preparedValues = values.map((value) => ({
    ...value,
    action: () => handleSelectItem(value),
    isBold: !!selectedItems.find(({ id }) => id === value.id),
  }));

  return (
    <Dropdown
      showSearch
      selection
      items={preparedValues}
      selectedIds={selectedItems.map(({ id }) => id as string)}
      searchPlaceholder={searchPlaceholder}
      isLoading={valuesLoading}
      customList={VirtualScrollList}
      footer={
        <Block {...padding(scale300, scale600)} backgroundColor={light4}>
          <Button onClick={handleApplyFilter} width="100%">
            {applyFiltersLabel}
          </Button>
        </Block>
      }
    >
      <FilterButton
        title={title}
        startEnhancer={Icon}
        size={SIZE.compact}
        isActive={isFilterActive}
        onClear={onSetFilterClear}
        hasValue={isFilterActive}
        arrows
      />
    </Dropdown>
  );
};
