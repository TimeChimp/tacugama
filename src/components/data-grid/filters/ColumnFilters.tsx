import React, { useCallback, useEffect, useState } from 'react';
import { ColumnFiltersProps, FilterType } from '../types';
import { DateFilterModel } from '@ag-grid-community/core';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { SIZE } from 'baseui/button';
import { Dropdown, DropdownItem } from '../../dropdown';
import { Dash, Plus } from '../../icons';
import { FlexItem } from '../../flex-item';
import { useTheme } from '../../../providers';
import { Datepicker } from '../../datepicker';
import { FilterButton } from './FilterButton';

const DATE_FORMAT = 'y-MM-dd';
const LESS_FILTERS_BUTTON_TEST_ID = 'less-filters-button';
const MORE_FILTERS_BUTTON_TEST_ID = 'more-filters-button';
const MULTIPLE_DATE_FILTER_ERROR = 'You can only pass max. 1 date filter';

export const ColumnFilters = ({
  filters,
  onFiltering,
  api,
  dateFormat,
  dates,
  setDates,
  translations: { search, lessFilters, allFilters },
}: ColumnFiltersProps) => {
  const [openFilter, setOpenFilter] = useState<string>();
  const [showLessFilters, setShowLessFilters] = useState<boolean>(true);
  const [datepickerIsOpen, setDatepickerIsOpen] = useState<boolean>(false);
  const [selectedFilterIds, setSelectedFilterIds] = useState<{ [key: string]: string[] }>({});

  const {
    theme: {
      current: {
        sizing: { scale300 },
        colors: { primary, contentSecondary },
      },
    },
  } = useTheme();

  const validateFilters = useCallback(() => {
    const dateFilters = filters?.filter((filter) => filter.type === FilterType.date);
    if (dateFilters && dateFilters.length > 1) {
      throw new Error(MULTIPLE_DATE_FILTER_ERROR);
    }
  }, [filters]);

  useEffect(() => {
    validateFilters();
  }, [filters, validateFilters]);

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

      if (!values.length) {
        filterInstance?.setModel(null);
        return api.onFilterChanged();
      }

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

  const filterOnValue = useCallback(
    (columnField: string, value: string) => {
      handleSetFilter(value);
      setSelectedFilterIds((currentIds) => {
        if (!currentIds[columnField]) {
          return {
            ...currentIds,
            [columnField]: [value],
          };
        }
        if (currentIds[columnField].includes(value)) {
          return {
            ...currentIds,
            [columnField]: currentIds[columnField].filter((currentId) => currentId !== value),
          };
        }
        return { ...currentIds, [columnField]: [...currentIds[columnField], value] };
      });
    },
    [handleSetFilter],
  );

  const getAllColumnValues = useCallback(
    (columnField: string, values?: string[]) => {
      const columnValues: DropdownItem[] | undefined = values?.map((value) => ({
        id: value,
        label: value,
        action: () => filterOnValue(columnField, value),
      }));

      return columnValues || [];
    },
    [filterOnValue],
  );

  const dateFilterIsActive = () => dates?.length === 2;

  const isSetFilterActive = (columnField: string) => !!selectedFilterIds[columnField]?.length;

  const getDateIconColor = () => (dateFilterIsActive() ? primary : contentSecondary);

  const getSetIconColor = (columnField: string) => (isSetFilterActive(columnField) ? primary : contentSecondary);

  const getDateFormat = (date: Date) => new TcDate(date).format(DATE_FORMAT);

  const getDateTitleFormat = (date: Date) => new TcDate(date).format(DATE_FORMAT);

  const getDateTitle = (title: string) =>
    dates && dateFilterIsActive() ? `${getDateTitleFormat(dates[0])} - ${getDateTitleFormat(dates[1])}` : title;

  const getSetTitle = (columnField: string, title: string) => {
    if (!isSetFilterActive(columnField)) {
      return title;
    }
    const { length } = selectedFilterIds[columnField];
    return `${length} ${title}`;
  };

  const onDateSelect = ({ date: dates, columnField }: { date: Date | Date[]; columnField: string }) => {
    if (!setDates) {
      return;
    }

    if (!Array.isArray(dates)) {
      return setDates([dates]);
    }

    setDates(dates);

    if (dates.length > 1) {
      setDatepickerIsOpen(false);

      const dateFilter: DateFilterModel = {
        filterType: 'date',
        type: 'inRange',
        dateFrom: getDateFormat(dates[0]),
        dateTo: getDateFormat(dates[1]),
      };
      const filterModel = api.getFilterModel();
      filterModel[columnField] = dateFilter;
      onFiltering(filterModel);
    }
  };

  const getFilters = () => {
    validateFilters();
    if (showLessFilters) {
      return filters?.slice(0, 2);
    }
    return filters;
  };

  return (
    <>
      {filters?.length && (
        <>
          {getFilters()?.map(({ title, columnField, type, searchPlaceholder, values, valuesLoading, icon: Icon }) => (
            <FlexItem key={columnField} width="fit-content" marg1="0" marg2="0" marg3="0" marg4={scale300}>
              {type === FilterType.date ? (
                <>
                  <FilterButton
                    onClick={() => setDatepickerIsOpen(!datepickerIsOpen)}
                    startEnhancer={Icon && <Icon color={getDateIconColor()} />}
                    size={SIZE.compact}
                    title={getDateTitle(title)}
                  />
                  <Datepicker
                    onChange={({ date }) => onDateSelect({ date, columnField })}
                    date={dates}
                    isOpen={datepickerIsOpen}
                    setIsOpen={setDatepickerIsOpen}
                    monthsShown={2}
                    range
                    quickSelect
                  />
                </>
              ) : (
                <Dropdown
                  onOpen={() => setOpenFilter(columnField)}
                  showSearch
                  selection
                  items={getAllColumnValues(columnField, values)}
                  selectedIds={selectedFilterIds[columnField]}
                  searchPlaceholder={searchPlaceholder || search}
                  isLoading={valuesLoading}
                >
                  <FilterButton
                    title={getSetTitle(columnField, title)}
                    startEnhancer={Icon && <Icon color={getSetIconColor(columnField)} />}
                    size={SIZE.compact}
                    isActive={isSetFilterActive(columnField)}
                  />
                </Dropdown>
              )}
            </FlexItem>
          ))}
          {showLessFilters ? (
            <FlexItem width="fit-content" marg1="0" marg2="0" marg3="0" marg4={scale300}>
              <FilterButton
                testId={MORE_FILTERS_BUTTON_TEST_ID}
                onClick={() => setShowLessFilters(false)}
                startEnhancer={<Plus />}
                size={SIZE.compact}
                title={allFilters}
              />
            </FlexItem>
          ) : (
            <FlexItem width="fit-content" marg1="0" marg2="0" marg3="0" marg4={scale300}>
              <FilterButton
                testId={LESS_FILTERS_BUTTON_TEST_ID}
                onClick={() => setShowLessFilters(true)}
                startEnhancer={<Dash />}
                size={SIZE.compact}
                title={lessFilters}
              />
            </FlexItem>
          )}
        </>
      )}
    </>
  );
};

export default ColumnFilters;
