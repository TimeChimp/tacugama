import React, { useCallback, useEffect, useState } from 'react';
import { ColumnFiltersProps, Filter, FilterType, FilterValue } from '../types';
import { SIZE } from 'baseui/button';
import { Dropdown, DropdownItem } from '../../dropdown';
import { MinusIcon } from '../../icons/minus';
import { AddLineIcon } from '../../icons/add-line';
import { useTheme } from '../../../providers';
import { FilterButton } from './FilterButton';
import { Button } from '../../button';
import { ButtonKind } from '../../../models';
import { FixedSizeSelect } from '../../fixed-size-select';
import { MultiFilter } from './MultiFilter';
import { DateFilter } from '../../date-filter';
import { StyledFilterColumn, StyledDateFilterColumn } from '../styles';

const LESS_FILTERS_BUTTON_TEST_ID = 'less-filters-button';
const MORE_FILTERS_BUTTON_TEST_ID = 'more-filters-button';
const MULTIPLE_DATE_FILTER_ERROR = 'You can only pass max. 1 date filter';

export const ColumnFilters = ({
  filters,
  api,
  dateFormat,
  locale,
  dates,
  setDates,
  setSelectedFilterIds,
  selectedFilterIds,
  translations: { search, lessFilters, allFilters, clearFilters, applyFilters },
  datepickerTranslations,
  filterOnValue,
  filterOnMultiValues,
  filterOnDate,
  clearFilterModel,
  showClearFilters,
  initialShowLessFilters,
  onShowLessFiltersChange,
  filtering,
}: ColumnFiltersProps) => {
  const [showLessFilters, setShowLessFilters] = useState<boolean>(initialShowLessFilters ?? true);

  const {
    theme: {
      current: {
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

  useEffect(() => {
    if (onShowLessFiltersChange) {
      onShowLessFiltersChange(showLessFilters);
    }
  }, [showLessFilters]);

  const isSelectValueActive = useCallback(
    (columnField: string, filterValue: FilterValue['value'], type: FilterType) => {
      if (type !== FilterType.single) {
        return false;
      }
      const filterIdsByColumn = selectedFilterIds[columnField];
      if (!filterIdsByColumn?.length) {
        return false;
      }
      return filterIdsByColumn.includes(filterValue);
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
          ...(typeof value === 'object' ? value : {}),
          id: filterValue?.toString(),
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

  const isSetFilterActive = (columnField: string) => !!selectedFilterIds[columnField]?.length;

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

  const getSetTitle = (columnField: string, title: string) => {
    if (!isSetFilterActive(columnField)) {
      return title;
    }
    const { length } = selectedFilterIds[columnField];
    return `${length} ${title}`;
  };

  const onDateSelect = ({ dates, columnField }: { dates: [Date, Date]; columnField: string }) => {
    if (setDates) {
      setDates(dates);
    }

    filterOnDate(columnField, dates);
  };

  const getFilters = () => {
    validateFilters();
    const visibleFilters = filters?.filter((filter) => !filter.hide);
    if (showLessFilters) {
      return visibleFilters?.slice(0, 2);
    }
    return visibleFilters;
  };

  const onSetFilterClear = (columnField: string) => {
    api.destroyFilter(columnField);
    setSelectedFilterIds((currentIds) => {
      return {
        ...currentIds,
        [columnField]: [],
      };
    });
    clearFilterModel(columnField);
    api?.onFilterChanged();
  };

  const onSelectFilterClear = (columnField: string) => {
    api.destroyFilter(columnField);
    setSelectedFilterIds((currentIds) => {
      return {
        ...currentIds,
        [columnField]: [],
      };
    });
    clearFilterModel(columnField);
  };

  const getSelectedFilterIds = (columnField: string) => {
    if (Array.isArray(selectedFilterIds?.[columnField])) {
      return selectedFilterIds?.[columnField]?.map(String);
    } else {
      return [selectedFilterIds?.[columnField]?.toString()];
    }
  };

  const handleFilterMultiValues = (columnField: string) => (values: FilterValue['value'][]) => {
    if (values.length) {
      filterOnMultiValues(columnField, values);
    } else {
      onSetFilterClear(columnField);
    }
  };

  const getSelectHasValue = (columnField: string) =>
    Array.isArray(selectedFilterIds[columnField])
      ? !!selectedFilterIds[columnField].length
      : !!selectedFilterIds[columnField];

  const Filter = ({
    title,
    columnField,
    type,
    searchPlaceholder,
    values,
    valuesLoading,
    icon: Icon,
    clearable,
  }: Filter) => {
    if (type === FilterType.multi) {
      return (
        <MultiFilter
          values={getAllColumnValues(columnField, FilterType.multi, values)}
          initialSelectedFilterIds={getSelectedFilterIds(columnField)}
          searchPlaceholder={searchPlaceholder || search}
          valuesLoading={valuesLoading}
          title={getSetTitle(columnField, title)}
          icon={Icon && <Icon color={getSetIconColor(columnField)} />}
          isFilterActive={isSetFilterActive(columnField)}
          onSetFilterClear={() => onSetFilterClear(columnField)}
          onApplyFilter={handleFilterMultiValues(columnField)}
          applyFiltersLabel={applyFilters}
        />
      );
    }
    if (type === FilterType.multiVirtual) {
      return (
        <FixedSizeSelect
          showSearch
          selection
          items={getAllColumnValues(columnField, FilterType.multiVirtual, values)}
          selectedIds={getSelectedFilterIds(columnField)}
          searchPlaceholder={searchPlaceholder || search}
          isLoading={valuesLoading}
          title={getSetTitle(columnField, title)}
          startEnhancer={Icon && <Icon color={getSetIconColor(columnField)} />}
          size={SIZE.compact}
          isActive={isSetFilterActive(columnField)}
          onClear={() => onSetFilterClear(columnField)}
          hasValue={isSetFilterActive(columnField)}
          arrows
        />
      );
    }

    if (type === FilterType.single) {
      return (
        <Dropdown
          items={getAllColumnValues(columnField, FilterType.single, values)}
          selectedIds={getSelectedFilterIds(columnField)}
          isLoading={valuesLoading}
        >
          <FilterButton
            title={getSelectActiveItem(columnField, values).label ?? title}
            startEnhancer={getSelectActiveItem(columnField, values).icon}
            size={SIZE.compact}
            arrows
            onClear={clearable ? () => onSelectFilterClear(columnField) : undefined}
            hasValue={getSelectHasValue(columnField)}
            isActive={getSelectHasValue(columnField)}
          />
        </Dropdown>
      );
    }
    return null;
  };

  const onClearFiltersClick = () => {
    const visibleFilters = getFilters();
    visibleFilters?.map((filter) => onSetFilterClear(filter.columnField));
  };

  const filtersWithoutSettings = filters?.filter((item) => item.type !== FilterType.settings && !item.hide);

  return (
    <>
      {!!getFilters()?.length && (
        <>
          {getFilters()?.map(
            ({ title, columnField, type, searchPlaceholder, values, valuesLoading, icon: Icon, clearable }, index) =>
              //TODO: make Show Separator part of filter array being passed
              {
                // <StyledDateFilterColumn $isFirstColumn={index === 0 && !filtering}>
                console.log('testttttt123123123');
                if (type === FilterType.date) {
                  return (
                    <StyledDateFilterColumn $isFirstColumn={index === 0 && !filtering}>
                      <DateFilter
                        locale={locale ?? 'en'}
                        translations={datepickerTranslations}
                        onChange={(dates) => onDateSelect({ dates, columnField })}
                        dateFormat={dateFormat}
                        dates={dates}
                      />
                    </StyledDateFilterColumn>
                  );
                }

                if (type === FilterType.single) {
                  return (
                    <StyledFilterColumn>
                      <Dropdown
                        items={getAllColumnValues(columnField, FilterType.single, values)}
                        selectedIds={getSelectedFilterIds(columnField)}
                        isLoading={valuesLoading}
                      >
                        <FilterButton
                          title={getSelectActiveItem(columnField, values).label ?? title}
                          startEnhancer={getSelectActiveItem(columnField, values).icon}
                          size={SIZE.compact}
                          arrows
                          onClear={clearable ? () => onSelectFilterClear(columnField) : undefined}
                          hasValue={getSelectHasValue(columnField)}
                          isActive={getSelectHasValue(columnField)}
                        />
                      </Dropdown>
                    </StyledFilterColumn>
                  );
                }

                if (type === FilterType.multi) {
                  return (
                    <StyledFilterColumn>
                      <MultiFilter
                        values={getAllColumnValues(columnField, FilterType.multi, values)}
                        initialSelectedFilterIds={getSelectedFilterIds(columnField)}
                        searchPlaceholder={searchPlaceholder || search}
                        valuesLoading={valuesLoading}
                        title={getSetTitle(columnField, title)}
                        icon={Icon ? <Icon color={getSetIconColor(columnField)} /> : null}
                        isFilterActive={isSetFilterActive(columnField)}
                        onSetFilterClear={() => onSetFilterClear(columnField)}
                        onApplyFilter={handleFilterMultiValues(columnField)}
                        applyFiltersLabel={applyFilters}
                      />
                    </StyledFilterColumn>
                  );
                }

                //TODO: NOT BEING USED???
                if (type === FilterType.multiVirtual) {
                  return (
                    <StyledFilterColumn>
                      <FixedSizeSelect
                        showSearch
                        selection
                        items={getAllColumnValues(columnField, FilterType.multiVirtual, values)}
                        selectedIds={getSelectedFilterIds(columnField)}
                        searchPlaceholder={searchPlaceholder || search}
                        isLoading={valuesLoading}
                        title={getSetTitle(columnField, title)}
                        startEnhancer={Icon && <Icon color={getSetIconColor(columnField)} />}
                        size={SIZE.compact}
                        isActive={isSetFilterActive(columnField)}
                        onClear={() => onSetFilterClear(columnField)}
                        hasValue={isSetFilterActive(columnField)}
                        arrows
                      />
                    </StyledFilterColumn>
                  );
                }
                return null;
              },
          )}
          {(filtersWithoutSettings || [])?.length > 2 && (
            <StyledFilterColumn>
              {showLessFilters ? (
                <FilterButton
                  testId={MORE_FILTERS_BUTTON_TEST_ID}
                  onClick={() => setShowLessFilters(false)}
                  startEnhancer={<AddLineIcon />}
                  size={SIZE.compact}
                  title={allFilters}
                />
              ) : (
                <FilterButton
                  testId={LESS_FILTERS_BUTTON_TEST_ID}
                  onClick={() => setShowLessFilters(true)}
                  startEnhancer={<MinusIcon />}
                  size={SIZE.compact}
                  title={lessFilters}
                />
              )}
            </StyledFilterColumn>
          )}
          {showClearFilters && (
            <Button kind={ButtonKind.minimal} color={primary} onClick={() => onClearFiltersClick()}>
              {clearFilters}
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default ColumnFilters;
