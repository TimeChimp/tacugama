import React from 'react';
import { FiltersProps } from './types';
import { StyledDataGridFilters, StyledDataGridSearch } from './StyledDataGrid';
import { TextFilterModel } from '@ag-grid-community/core';
import { Dropdown, DropdownItem } from '../dropdown';
import { Pencil, Search } from '../icons';
import { Input } from '../input';
import { TertiaryButton } from '../button';
import { ParagraphXSmall } from '../typography';

const SEARCH_INPUT_TEST_ID = 'data-grid-search';

export const Filters = ({
  columns,
  grouping,
  filtering,
  onGrouping,
  onFiltering,
  filterModel,
  translations,
}: FiltersProps) => {
  const handleGrouping = (field: string) => {
    let groups = columns.filter((x) => x.rowGroup).map((x) => x.field);
    if (groups.includes(field)) {
      groups = groups.filter((x) => x !== field);
    } else {
      groups.push(field);
    }
    onGrouping(groups);
  };

  const handleSearch = (event: React.FormEvent<HTMLInputElement>) => {
    const textFilter: TextFilterModel = {
      filter: event.currentTarget.value,
      filterType: 'text',
      type: 'contains',
    };
    filterModel.name = textFilter;
    onFiltering(filterModel);
  };

  const options: DropdownItem[] = columns
    .filter((x) => x.groupable)
    .map((column) => {
      return {
        id: column.field,
        label: column.label || '',
        icon: column.rowGroup ? <Pencil size="12px" /> : <></>,
        action: () => handleGrouping(column.field),
      };
    });

  return (
    <StyledDataGridFilters>
      {filtering && (
        <StyledDataGridSearch>
          <Input
            testId={SEARCH_INPUT_TEST_ID}
            size="mini"
            startEnhancer={<Search size="18px" />}
            placeholder={translations.search}
            onChange={handleSearch}
          />
        </StyledDataGridSearch>
      )}
      {grouping && (
        <div>
          <Dropdown items={options}>
            <TertiaryButton size="mini">
              <ParagraphXSmall display="inline-flex" alignItems="center" $style={{ cursor: 'pointer' }}>
                {translations.groupBy}
              </ParagraphXSmall>
            </TertiaryButton>
          </Dropdown>
        </div>
      )}
    </StyledDataGridFilters>
  );
};

export default Filters;
