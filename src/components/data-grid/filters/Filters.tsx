import React, { useCallback, useState } from 'react';
import { FiltersProps } from '../types';
import { StyledDataGridFilters, StyledDataGridSearch } from '../styles';
import { TextFilterModel } from '@ag-grid-community/core';
import { SearchInput } from '../../input';
import { FlexItem } from '../../flex-item';
import { ColumnFilters } from './ColumnFilters';
import { debounce } from '../../../utils';
import { useTheme } from '../../../providers';

const SEARCH_INPUT_TEST_ID = 'data-grid-search';

export const Filters = ({
  columns,
  grouping,
  filtering,
  onGrouping,
  onFiltering,
  api,
  searchColumns,
  translations,
  debouncedSearch,
  ...rest
}: FiltersProps) => {
  const { searchBar } = translations;
  const [searchValue, setSearchValue] = useState('');

  const {
    theme: {
      current: {
        sizing: { scale300 },
      },
    },
  } = useTheme();

  const handleSearch = (searchTerm: string) => {
    const filterModel = api.getFilterModel();
    searchColumns?.forEach((searchColumn) => {
      const textFilter: TextFilterModel = {
        filter: searchTerm,
        filterType: 'text',
        type: 'contains',
      };
      filterModel[searchColumn] = textFilter;
    });
    onFiltering(filterModel);
    setSearchValue(searchTerm);
  };

  const debouncedHandler = useCallback(debounce(handleSearch), [handleSearch]);

  return (
    <StyledDataGridFilters>
      <FlexItem justifyContent="start" gap={scale300}>
        {filtering && (
          <StyledDataGridSearch>
            <SearchInput
              testId={SEARCH_INPUT_TEST_ID}
              size="mini"
              placeholder={searchBar}
              onChange={(e) => {
                debouncedSearch ? debouncedHandler(e.currentTarget.value) : handleSearch(e.currentTarget.value);
              }}
              value={searchValue}
            />
          </StyledDataGridSearch>
        )}
        <ColumnFilters api={api} translations={translations} {...rest} />
      </FlexItem>
    </StyledDataGridFilters>
  );
};

export default Filters;
