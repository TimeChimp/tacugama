import React, { useCallback, useEffect, useState } from 'react';
import { ColumnFiltersProps, Filter as FilterProps, FilterType, FilterValue } from '../types';
import { DateFilterModel } from '@ag-grid-community/core';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { SIZE } from 'baseui/button';
import { Dropdown, DropdownItem } from '../../dropdown';
import { useTheme } from '../../../providers';
import { Datepicker } from '../../datepicker';
import { FilterButton } from './FilterButton';

const DATE_FORMAT = 'y-MM-dd';
const MULTIPLE_DATE_FILTER_ERROR = 'You can only pass max. 1 date filter';

export const Filter = ({
  title,
  columnField,
  type,
  searchPlaceholder,
  values,
  valuesLoading,
  icon: Icon,
}: FilterProps) => {
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
