import React, { FormEvent, useCallback, useState } from 'react';
import { FiltersProps, FilterType } from '../types';
import { StyledDataGridFilters, StyledDataGridSearch } from '../styles';
import { DateFilterModel, TextFilterModel } from '@ag-grid-community/core';
import { Dropdown, DropdownItem } from '../../dropdown';
import { Pencil } from '../../icons';
import { SearchInput } from '../../input';
import { TertiaryButton } from '../../button';
import { ParagraphXSmall } from '../../typography';
import { FlexItem } from 'components/flex-item';
import { useTheme } from 'providers';
import { SIZE } from 'baseui/button';
import { Datepicker } from 'components/datepicker';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { FilterButton } from './FilterButton';

const SEARCH_INPUT_TEST_ID = 'data-grid-search';

export const Filters = ({
  columns,
  filters,
  grouping,
  filtering,
  onGrouping,
  onFiltering,
  api,
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
    const filterModel = api.getFilterModel();
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

  const getSetValues = (value: string, values?: string[]) => {
    if (!values) {
      return [value];
    }

    if (values?.includes(value)) {
      return values.filter((x) => x !== value);
    }
    return [...values, value];
  };

  const onSetFiltering = useCallback(
    (column: string, value: string) => {
      const filterInstance = api.getFilterInstance(column);
      const filterModel = api.getFilterModel();
      const currentValues = filterInstance?.getModel()?.values;
      const values = getSetValues(value, currentValues);

      const setFilter = {
        values,
        type: 'set',
      };
      filterModel[column] = setFilter;

      onFiltering(filterModel);
    },
    [api, onFiltering],
  );

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
    (value: string) => {
      handleSetFilter(value);
      setSelectedFilterIds((currentIds) => {
        if (currentIds.includes(value)) {
          return currentIds.filter((currentId) => currentId !== value);
        }
        return [...currentIds, value];
      });
    },
    [handleSetFilter],
  );

  const getAllColumnValues = useCallback(
    (values?: string[]) => {
      const columnValues: DropdownItem[] | undefined = values?.map((value) => ({
        id: value,
        label: value,
        action: () => filterOnValue(value),
      }));

      return columnValues || [];
    },
    [filterOnValue],
  );

  const onDateSelect = ({ date: dates }: { date: Date | Date[] }) => {
    if (Array.isArray(dates) && dates?.length > 1) {
      setDatePickerIsOpen(false);

      const dateFilter: DateFilterModel = {
        filterType: 'date',
        type: 'inRange',
        dateFrom: new TcDate(dates[0]).format('y-MM-dd'),
        dateTo: new TcDate(dates[1]).format('y-MM-dd'),
      };
      const filterModel = api.getFilterModel();
      filterModel['start'] = dateFilter;
      onFiltering(filterModel);
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
