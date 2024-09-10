import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { FiltersProps } from '../types';
import { StyledDataGridFilters, StyledDataGridSearch } from '../styles';
import { SearchInput } from '../../input';
import { ColumnFilters } from './ColumnFilters';
import { debounce } from '../../../utils';

const SEARCH_INPUT_TEST_ID = 'data-grid-search';
const RESIZE_EVENT = 'resize';

export const Filters = ({
  filtering,
  api,
  translations,
  debouncedSearch,
  onSearch,
  setFiltersHeight,
  onShowLessFiltersChange,
  defaultDateQuickSelect,
  defaultSearch,
  isGridColumnApiLoaded,
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
    window.addEventListener(RESIZE_EVENT, handleResize);

    return () => {
      window.removeEventListener(RESIZE_EVENT, handleResize);
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

  useEffect(() => {
    if (isGridColumnApiLoaded && filtering && defaultSearch) {
      setSearchValue(defaultSearch);
      handleSearch(defaultSearch);
    }
  }, [defaultSearch, isGridColumnApiLoaded]);

  return (
    <StyledDataGridFilters ref={ref}>
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
        searchIsShown={filtering}
        defaultDateQuickSelect={defaultDateQuickSelect}
        {...rest}
      />
    </StyledDataGridFilters>
  );
};

export default Filters;
