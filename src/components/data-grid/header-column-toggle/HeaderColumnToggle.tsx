import React, { useEffect, useState, useCallback } from 'react';
import { TableSettings } from '../../icons';
import { StyledHeaderColumnToggle } from '../styles';
import { Dropdown, DropdownItem } from '../../dropdown';
import { TertiaryButton } from '../../button';
import { useTheme } from '../../../providers';
import { HeaderColumnToggleProps } from '..';
import { Column } from '@ag-grid-community/core';
import { DATA_TEST_ID } from '../../../models';

export const HeaderColumnToggle = ({ api: gridApi, columnApi }: HeaderColumnToggleProps) => {
  const [active, setActive] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>([]);

  const {
    theme: {
      current: {
        sizing: { scale600 },
        colors: { primary },
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
        items={dropdownItems}
        selection
        selectedIds={visibleColumnIds}
        propOverrides={{
          listProps: () => ({ [DATA_TEST_ID]: 'data-grid-column-toggle-options' }),
          optionProps: () => ({ [DATA_TEST_ID]: 'data-grid-column-toggle-option' }),
        }}
      >
        <TertiaryButton>
          <TableSettings size={scale600} color={active ? primary : '#87878E'} />
        </TertiaryButton>
      </Dropdown>
    </StyledHeaderColumnToggle>
  );
};

export default HeaderColumnToggle;
