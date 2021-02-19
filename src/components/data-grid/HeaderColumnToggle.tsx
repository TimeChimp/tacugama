import React, { useEffect, useState, useCallback } from 'react';
import { StyledHeaderColumnToggle } from './StyledDataGrid';
import { Cog } from '../icons/Cog';
import { Dropdown } from '../dropdown/Dropdown';
import TertiaryButton from '../button/TertiaryButton';
import { useTheme } from '../../providers/ThemeProvider';
import { HeaderColumnToggleProps } from '.';
import { DropdownItem } from '../dropdown/DropdownOption';
import { Column } from '@ag-grid-community/core';
import { DATA_TEST_ID } from '../../models';

export const HeaderColumnToggle = ({ api: gridApi, columnApi, searchPlaceholder }: HeaderColumnToggleProps) => {
  const [active, setActive] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>([]);

  const {
    theme: {
      current: {
        sizing: { scale600 },
        colors: { primary, contentPrimary },
      },
    },
  } = useTheme();

  const setVisibleColumns = useCallback(() => {
    const visibleColumnIds = columnApi
      .getAllColumns()
      ?.filter((column) => column.isVisible())
      .map((column) => column.getColId());
    setVisibleColumnIds(visibleColumnIds || []);
  }, [columnApi]);

  const toggleColumn = useCallback(
    (column: Column) => {
      const colId = column.getColId();
      const isVisible = !column?.isVisible() || false;

      columnApi.setColumnVisible(colId, isVisible);

      setVisibleColumns();
      gridApi.sizeColumnsToFit();
    },
    [columnApi, gridApi, setVisibleColumns],
  );

  useEffect(() => {
    const dropdownItems = columnApi
      .getAllColumns()
      ?.filter((column) => column.getColDef().headerName)
      .map(
        (column) =>
          ({
            id: column.getColId(),
            label: column.getColDef().headerName,
            action: () => toggleColumn(column),
          } as DropdownItem),
      );

    setDropdownItems(dropdownItems || []);
    setVisibleColumns();
  }, [gridApi, columnApi, setVisibleColumns, toggleColumn]);

  return (
    <StyledHeaderColumnToggle>
      <Dropdown
        onOpen={() => setActive(true)}
        onClose={() => setActive(false)}
        showSearch
        searchPlaceholder={searchPlaceholder}
        items={dropdownItems}
        selection
        selectedIds={visibleColumnIds}
        propOverrides={{
          listProps: () => ({ [DATA_TEST_ID]: 'data-grid-column-toggle-options' }),
          optionProps: () => ({ [DATA_TEST_ID]: 'data-grid-column-toggle-option' }),
        }}
      >
        <TertiaryButton>
          <Cog size={scale600} color={active ? primary : contentPrimary} />
        </TertiaryButton>
      </Dropdown>
    </StyledHeaderColumnToggle>
  );
};

export default HeaderColumnToggle;
