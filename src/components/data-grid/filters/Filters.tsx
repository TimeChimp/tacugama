import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
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
  setFiltersHeight,
  onShowLessFiltersChange,
  ...rest
}: FiltersProps) => {
  const { searchBar } = translations;
  const [searchValue, setSearchValue] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    setFiltersHeight && setFiltersHeight(ref.current ? ref.current?.offsetHeight : 0);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <StyledDataGridFilters ref={ref}>
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
        <ColumnFilters
          api={api}
          translations={translations}
          onShowLessFiltersChange={(showLessFilters: boolean) => {
            onShowLessFiltersChange && onShowLessFiltersChange(showLessFilters);
            handleResize();
          }}
          {...rest}
        />
      </FlexItem>
    </StyledDataGridFilters>
  );
};

export default Filters;
