import React, { useCallback, useState } from 'react';
import { ColumnFiltersProps, FilterType } from '../types';
import { DateFilterModel } from '@ag-grid-community/core';
import { Dropdown, DropdownItem } from '../../dropdown';
import { Dash, Plus } from '../../icons';
import { FlexItem } from 'components/flex-item';
import { useTheme } from 'providers';
import { SIZE } from 'baseui/button';
import { Datepicker } from 'components/datepicker';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { FilterButton } from './FilterButton';

const DATE_FORMAT = 'y-MM-dd';

export const ColumnFilters = ({
  filters,
  onFiltering,
  api,
  translations: { search, lessFilters, allFilters },
}: ColumnFiltersProps) => {
  const [openFilter, setOpenFilter] = useState<string>();
  const [showLessFilters, setShowLessFilters] = useState<boolean>(false);
  const [datePickerIsOpen, setDatePickerIsOpen] = useState<boolean>(false);
  const [selectedFilterIds, setSelectedFilterIds] = useState<string[]>([]);

  const {
    theme: {
      current: {
        sizing: { scale300 },
      },
    },
  } = useTheme();

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

  const getDateFormat = (date: Date) => new TcDate(date).format(DATE_FORMAT);

  const onDateSelect = ({ date: dates, column }: { date: Date | Date[]; column: string }) => {
    if (Array.isArray(dates) && dates?.length > 1) {
      setDatePickerIsOpen(false);

      const dateFilter: DateFilterModel = {
        filterType: 'date',
        type: 'inRange',
        dateFrom: getDateFormat(dates[0]),
        dateTo: getDateFormat(dates[1]),
      };
      const filterModel = api.getFilterModel();
      filterModel[column] = dateFilter;
      onFiltering(filterModel);
    }
  };

  const getFilters = () => {
    if (showLessFilters) {
      return filters?.slice(0, 2);
    }
    return filters;
  };

  return (
    <>
      {filters?.length &&
        getFilters()?.map(({ title, columnField, type, searchPlaceholder, icon, values }) => (
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
                  onChange={() => onDateSelect}
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
      {showLessFilters ? (
        <FlexItem width="fit-content" marg1="0" marg2="0" marg3="0" marg4={scale300}>
          <FilterButton
            onClick={() => setShowLessFilters(false)}
            startEnhancer={<Plus />}
            size={SIZE.compact}
            title={allFilters}
          />
        </FlexItem>
      ) : (
        <FlexItem width="fit-content" marg1="0" marg2="0" marg3="0" marg4={scale300}>
          <FilterButton
            onClick={() => setShowLessFilters(true)}
            startEnhancer={<Dash />}
            size={SIZE.compact}
            title={lessFilters}
          />
        </FlexItem>
      )}
    </>
  );
};

export default ColumnFilters;
