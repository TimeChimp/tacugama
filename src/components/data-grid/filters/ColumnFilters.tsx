import React, { useCallback, useEffect, useState } from 'react';
import { ColumnFiltersProps, Filter, FilterType, FilterValue } from '../types';
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
  setSelectedFilterIds,
  selectedFilterIds,
  translations: { search, lessFilters, allFilters },
}: ColumnFiltersProps) => {
  const [openFilter, setOpenFilter] = useState<string>();
  const [showLessFilters, setShowLessFilters] = useState<boolean>(true);
  const [datepickerIsOpen, setDatepickerIsOpen] = useState<boolean>(false);
  const [internalDates, setInternalDates] = useState<Date[]>([]);

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
    (columnField: string, value: string) => {
      const filterInstance = api.getFilterInstance(columnField);
      const filterModel = api.getFilterModel();
      const currentValues = filterInstance?.getModel()?.values;
      const values = getSetValues(value, currentValues);

      if (!values.length) {
        api.destroyFilter(columnField);
        return api.onFilterChanged();
      }

      const setFilter = {
        values,
        type: 'set',
      };

      filterModel[columnField] = setFilter;

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
    (columnField: string, value: string, type: FilterType) => {
      handleSetFilter(value);
      console.log(value);

      setSelectedFilterIds((currentIds) => {
        if (!currentIds[columnField] || type === FilterType.select) {
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
    [handleSetFilter, setSelectedFilterIds],
  );

  const isSelectValueActive = useCallback(
    (columnField: string, filterValue: string, type: FilterType) => {
      if (type !== FilterType.select) {
        return false;
      }
      const filterIdsByColumn = selectedFilterIds[columnField];
      if (!filterIdsByColumn?.length) {
        return false;
      }
      return filterIdsByColumn[0] === filterValue;
    },
    [selectedFilterIds],
  );

  const getAllColumnValues = useCallback(
    (columnField: string, type: FilterType, values?: (FilterValue | string)[]) => {
      if (!values) {
        return [];
      }
      const columnValues: DropdownItem[] = values.map((value: FilterValue | string) => {
        const filterValue = value && typeof value === 'object' ? value.value : value;
        const filterLabel = value && typeof value === 'object' ? value.label : value;
        const item: DropdownItem = {
          id: filterValue,
          label: filterLabel,
          action: () => filterOnValue(columnField, filterValue, type),
          isBold: isSelectValueActive(columnField, filterValue, type),
        };
        if (value && typeof value === 'object' && value.icon) {
          item.icon = value.icon;
        }
        return item;
      });

      return columnValues;
    },
    [filterOnValue, isSelectValueActive],
  );

  const dateFilterIsActive = () => dates?.length === 2;

  const isSetFilterActive = (columnField: string) => !!selectedFilterIds[columnField]?.length;

  const getDateIconColor = () => (dateFilterIsActive() ? primary : contentSecondary);

  const getSetIconColor = (columnField: string) => (isSetFilterActive(columnField) ? primary : contentSecondary);

  const getSelectActiveItem = (columnField: string, values?: string[] | FilterValue[]) => {
    const filterIdsByColumn = selectedFilterIds[columnField];
    let icon: JSX.Element | undefined;
    let label: string | undefined;

    if (filterIdsByColumn?.length) {
      const selectedValue = filterIdsByColumn[0];
      values?.forEach((value: string | FilterValue) => {
        if (typeof value === 'object' && value.value === selectedValue) {
          icon = value.icon;
          label = value.label;
        }
      });
    }
    return {
      icon,
      label,
    };
  };

  // Date format that is send as part of the query request
  const getDateFormat = (date: Date) => new TcDate(date).format(DATE_FORMAT);

  const getDateTitleFormat = (date: Date) => new TcDate(date).format(dateFormat);

  const getDateTitle = (title: string) =>
    dates && dateFilterIsActive() ? `${getDateTitleFormat(dates[0])} - ${getDateTitleFormat(dates[1])}` : title;

  const getSetTitle = (columnField: string, title: string) => {
    if (!isSetFilterActive(columnField)) {
      return title;
    }
    const { length } = selectedFilterIds[columnField];
    return `${length} ${title}`;
  };

  const toggleDatePicker = () => {
    if (datepickerIsOpen) {
      setDatepickerIsOpen(false);
      return setInternalDates([]);
    }
    return setDatepickerIsOpen(true);
  };

  const onDateSelect = ({ date: dates, columnField }: { date: Date | Date[]; columnField: string }) => {
    if (!setDates) {
      return;
    }

    if (!Array.isArray(dates)) {
      return setInternalDates([dates]);
    }

    setInternalDates(dates);

    if (dates.length > 1) {
      setDates(dates);
      toggleDatePicker();

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

  const onSetFilterClear = (columnField: string) => {
    setOpenFilter(undefined);
    api.destroyFilter(columnField);
    api.onFilterChanged();
    setSelectedFilterIds((currentIds) => {
      return {
        ...currentIds,
        [columnField]: [],
      };
    });
  };

  const Filter = ({ title, columnField, type, searchPlaceholder, values, valuesLoading, icon: Icon }: Filter) => {
    const filterTypes = {
      [FilterType.date]: (
        <>
          <FilterButton
            onClick={() => setDatepickerIsOpen(!datepickerIsOpen)}
            startEnhancer={Icon && <Icon color={getDateIconColor()} />}
            size={SIZE.compact}
            title={getDateTitle(title)}
          />
          <Datepicker
            onChange={({ date }) => onDateSelect({ date, columnField })}
            date={internalDates.length ? internalDates : dates}
            isOpen={datepickerIsOpen}
            setIsOpen={toggleDatePicker}
            monthsShown={2}
            range
            quickSelect
          />
        </>
      ),
      [FilterType.string]: (
        <Dropdown
          onOpen={() => setOpenFilter(columnField)}
          showSearch
          selection
          items={getAllColumnValues(columnField, FilterType.string, values)}
          selectedIds={selectedFilterIds[columnField]}
          searchPlaceholder={searchPlaceholder || search}
          isLoading={valuesLoading}
        >
          <FilterButton
            title={getSetTitle(columnField, title)}
            startEnhancer={Icon && <Icon color={getSetIconColor(columnField)} />}
            size={SIZE.compact}
            isActive={isSetFilterActive(columnField)}
            onClear={() => onSetFilterClear(columnField)}
            hasValue={isSetFilterActive(columnField)}
          />
        </Dropdown>
      ),
      [FilterType.select]: (
        <Dropdown
          onOpen={() => setOpenFilter(columnField)}
          items={getAllColumnValues(columnField, FilterType.select, values)}
          selectedIds={selectedFilterIds[columnField]}
          isLoading={valuesLoading}
        >
          <FilterButton
            title={getSelectActiveItem(columnField, values).label ?? title}
            startEnhancer={getSelectActiveItem(columnField, values).icon}
            size={SIZE.compact}
          />
        </Dropdown>
      ),
    };

    return filterTypes[type];
  };

  return (
    <>
      {filters?.length && (
        <>
          {getFilters()?.map(({ title, columnField, type, searchPlaceholder, values, valuesLoading, icon }) => (
            <FlexItem key={columnField} width="fit-content" marg1="0" marg2="0" marg3="0" marg4={scale300}>
              <Filter
                title={title}
                columnField={columnField}
                type={type}
                searchPlaceholder={searchPlaceholder}
                values={values}
                valuesLoading={valuesLoading}
                icon={icon}
              />
            </FlexItem>
          ))}
          {filters?.length > 2 && (
            <>
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
      )}
    </>
  );
};

export default ColumnFilters;
