import React, { useEffect, useState } from 'react';
import { FilterButton } from './FilterButton';
import { SIZE } from 'baseui/button';
import { Button } from '../../button';
import { DropdownItem, DropdownStateless } from '../../dropdown';
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
  onSetFilterClear,
  onApplyFilter,
}: MultiFilterProps) => {
  const [selectedItems, setSelectedItems] = useState<DropdownItem[]>([]);

  const {
    theme: {
      current: {
        customSizing: { scale8750 },
      },
    },
  } = useTheme();

  useEffect(() => {
    setSelectedItems(values.filter((value) => !!initialSelectedFilterIds?.includes(value.id as string)));
  }, [initialSelectedFilterIds]);

  const handleSelectItem = (item: DropdownItem) => {
    const isSelected = selectedItems.some(({ id }) => id === item.id);
    const updatedSelectedItems = isSelected
      ? selectedItems.filter(({ id }) => id !== item.id)
      : [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);
    onApplyFilter(updatedSelectedItems.map(({ id }) => id as string));
  };

  const preparedValues = values.map((value) => ({
    ...value,
    action: () => handleSelectItem(value),
    isBold: !!selectedItems.find(({ id }) => id === value.id),
    showTooltip: true,
  }));

  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownStateless
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      showSearch
      selection
      items={preparedValues}
      selectedIds={selectedItems.map(({ id }) => id as string)}
      searchPlaceholder={searchPlaceholder}
      isLoading={valuesLoading}
      customList={VirtualScrollList}
      propOverrides={{ bodyProps: () => ({ width: scale8750 }) }}
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
    </DropdownStateless>
  );
};
