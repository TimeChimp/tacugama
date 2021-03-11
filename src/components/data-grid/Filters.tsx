import React, { FormEvent, useCallback, useState } from 'react';
import { FiltersProps, FilterType } from './types';
import { StyledDataGridFilters, StyledDataGridSearch } from './styles';
import { TextFilterModel } from '@ag-grid-community/core';
import { Dropdown, DropdownItem } from '../dropdown';
import { Pencil } from '../icons';
import { SearchInput } from '../input';
import { SecondaryButton, TertiaryButton } from '../button';
import { ParagraphXSmall } from '../typography';
import { FlexItem } from 'components/flex-item';
import { useTheme } from 'providers';
import { SIZE } from 'baseui/button';
import { Datepicker } from 'components/datepicker';
import FilterButton from './FilterButton';

const SEARCH_INPUT_TEST_ID = 'data-grid-search';

export const Filters = ({
  columns,
  filters,
  grouping,
  filtering,
  onGrouping,
  onFiltering,
  onSetFiltering,
  filterModel,
  searchColumns,
  translations: { search, groupBy },
}: FiltersProps) => {
  const [openFilter, setOpenFilter] = useState<string>();
  const [datePickerIsOpen, setDatePickerIsOpen] = useState<boolean>(false);
  const [selectedFilterIds, setSelectedFilterIds] = useState<string[]>([]);

  const {
    theme: {
      current: {
        sizing: { scale300, scale500 },
      },
    },
  } = useTheme();

  const handleGrouping = (field: string) => {
    let groups = columns.filter((x) => x.rowGroup).map((x) => x.field);
    if (groups.includes(field)) {
      groups = groups.filter((x) => x !== field);
    } else {
      groups.push(field);
    }
    onGrouping(groups);
  };

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    searchColumns?.forEach((searchColumn) => {
      const textFilter: TextFilterModel = {
        filter: event.currentTarget.value,
        filterType: 'text',
        type: 'contains',
      };
      filterModel[searchColumn] = textFilter;
    });
    onFiltering(filterModel);
  };

  const handleSetFilter = useCallback(
    (value: string) => {
      if (openFilter) {
        onSetFiltering(openFilter, value);
      }
    },
    [onSetFiltering, openFilter],
  );

  const options: DropdownItem[] = columns
    .filter((x) => x.groupable)
    .map((column) => {
      return {
        id: column.field,
        label: column.label || '',
        icon: column.rowGroup ? <Pencil size={scale500} /> : <></>,
        action: () => handleGrouping(column.field),
      };
    });

  const onFilterOpen = (columnLabel: string) => {
    setOpenFilter(columnLabel);
  };

  const filterOnValue = useCallback(
    (id: string, value: string) => {
      handleSetFilter(value);
      setSelectedFilterIds((currentIds) => {
        if (currentIds.includes(id)) {
          return currentIds.filter((currentId) => currentId !== id);
        }
        return [...currentIds, id];
      });
    },
    [handleSetFilter],
  );

  const getAllColumnValues = useCallback(
    (values?: string[]) => {
      const columnValues: DropdownItem[] | undefined = values?.map((value) => ({
        id: value,
        label: value,
        action: () => filterOnValue(value, value),
      }));

      return columnValues || [];
    },
    [filterOnValue],
  );

  const onDateSelect = ({ date }: { date: Date | Date[] }) => {
    console.log(date);
    if (Array.isArray(date) && date?.length > 1) {
      setDatePickerIsOpen(false);
    }
  };

  return (
    <StyledDataGridFilters>
      <FlexItem justifyContent="start" width="80%">
        {filtering && (
          <StyledDataGridSearch>
            <SearchInput testId={SEARCH_INPUT_TEST_ID} size="mini" placeholder={search} onChange={handleSearch} />
          </StyledDataGridSearch>
        )}
        {filters?.length &&
          filters.map(({ title, columnField, type, searchPlaceholder, icon, values }) => (
            <FlexItem key={columnField} width="fit-content" marg1="0" marg2="0" marg3="0" marg4={scale300}>
              {type === FilterType.date ? (
                <>
                  <FilterButton
                    onClick={() => setDatePickerIsOpen(!datePickerIsOpen)}
                    startEnhancer={icon}
                    size={SIZE.compact}
                    title={title}
                  />
                  <Datepicker
                    onChange={onDateSelect}
                    date={new Date()}
                    isOpen={datePickerIsOpen}
                    setIsOpen={setDatePickerIsOpen}
                    monthsShown={2}
                    range
                    quickSelect
                  />
                </>
              ) : (
                <Dropdown
                  onOpen={() => onFilterOpen(columnField)}
                  showSearch
                  selection
                  items={getAllColumnValues(values)}
                  selectedIds={selectedFilterIds}
                  searchPlaceholder={searchPlaceholder || search}
                >
                  <FilterButton title={title} startEnhancer={icon} size={SIZE.compact} />
                </Dropdown>
              )}
            </FlexItem>
          ))}
      </FlexItem>
      <FlexItem width="20%" justifyContent="flex-end">
        {grouping && (
          <div>
            <Dropdown items={options}>
              <TertiaryButton size="mini">
                <ParagraphXSmall display="inline-flex" alignItems="center" $style={{ cursor: 'pointer' }}>
                  {groupBy}
                </ParagraphXSmall>
              </TertiaryButton>
            </Dropdown>
          </div>
        )}
      </FlexItem>
    </StyledDataGridFilters>
  );
};

export default Filters;
