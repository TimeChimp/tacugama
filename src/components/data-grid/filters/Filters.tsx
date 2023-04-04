import React, { ChangeEvent, useMemo, useState } from 'react';
import { FiltersProps } from '../types';
import { StyledDataGridFilters, StyledDataGridSearch } from '../styles';
import { SearchInput } from '../../input';
import { FlexItem } from '../../flex-item';
import { ColumnFilters } from './ColumnFilters';
import { debounce } from '../../../utils';

const SEARCH_INPUT_TEST_ID = 'data-grid-search';

export const Filters = ({
  columns,
  filtering,
  onFiltering,
  api,
  searchColumns,
  translations,
  debouncedSearch,
  onSearch,
  ...rest
}: FiltersProps) => {
  const { searchBar } = translations;
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (searchTerm: string) => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const debouncedHandler = useMemo(() => debounce(handleSearch), [handleSearch]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const searchTerm = e.currentTarget.value;
    setSearchValue(searchTerm);
    debouncedSearch ? debouncedHandler(searchTerm) : handleSearch(searchTerm);
  };

  return (
    <StyledDataGridFilters>
      <FlexItem justifyContent="start">
        {filtering && (
          <StyledDataGridSearch>
            <SearchInput
              testId={SEARCH_INPUT_TEST_ID}
              size="mini"
              placeholder={searchBar}
              onChange={onSearchChange}
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
