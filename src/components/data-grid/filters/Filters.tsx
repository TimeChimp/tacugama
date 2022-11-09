import React, { useCallback } from 'react';
import { FiltersProps } from '../types';
import { StyledDataGridFilters, StyledDataGridSearch } from '../styles';
import { TextFilterModel } from '@ag-grid-community/core';
import { Dropdown, DropdownItem } from '../../dropdown';
import { Pencil } from '../../icons';
import { SearchInput } from '../../input';
import { TertiaryButton } from '../../button';
import { ParagraphXSmall } from '../../typography';
import { FlexItem } from '../../flex-item';
import { ColumnFilters } from './ColumnFilters';
import { useTheme } from '../../../providers';
import { debounce } from '../../../utils';

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
  const { groupBy, searchBar } = translations;
  const {
    theme: {
      current: {
        sizing: { scale500 },
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
  };

  const debouncedHandler = useCallback(debounce(handleSearch), [handleSearch]);

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

  return (
    <StyledDataGridFilters>
      <FlexItem justifyContent="start" width="80%">
        {filtering && (
          <StyledDataGridSearch>
            <SearchInput
              testId={SEARCH_INPUT_TEST_ID}
              size="mini"
              placeholder={searchBar}
              onChange={(e) => {
                debouncedSearch ? debouncedHandler(e.currentTarget.value) : handleSearch(e.currentTarget.value);
              }}
            />
          </StyledDataGridSearch>
        )}
        <ColumnFilters api={api} translations={translations} {...rest} />
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
