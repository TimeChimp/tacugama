import React, { useEffect, useState } from 'react';
import { StyledHeaderColumnToggle } from './StyledDataGrid';
import { Cog } from '../icons/Cog';
import { Dropdown } from '../dropdown/Dropdown';
import TertiaryButton from '../button/TertiaryButton';
import { useTheme } from '../../providers/ThemeProvider';
import { HeaderColumnToggleProps } from '.';
import { DropdownItem } from '../dropdown/DropdownOption';
import { Column } from '@ag-grid-community/core';

export const HeaderColumnToggle = ({ api: gridApi, columnApi }: HeaderColumnToggleProps) => {
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

  const setVisibleColumns = () => {
    const visibleColumnIds = columnApi
      .getAllColumns()
      ?.filter((x) => x.isVisible())
      .map((x) => x.getColId());
    setVisibleColumnIds(visibleColumnIds || []);
  };

  const toggleColumn = (column: Column) => {
    const colId = column.getColId();
    const isVisible = !column?.isVisible() || false;

    columnApi.setColumnVisible(colId, isVisible);

    setVisibleColumns();
    gridApi.sizeColumnsToFit();
  };

  useEffect(() => {
    const items = columnApi
      .getAllColumns()
      ?.filter((c) => c.getColDef().headerName)
      .map(
        (c) =>
          ({
            id: c.getColId(),
            label: c.getColDef().headerName,
            action: () => toggleColumn(c),
          } as DropdownItem),
      );

    setDropdownItems(items || []);
    setVisibleColumns();
  }, [gridApi, columnApi]);

  return (
    <StyledHeaderColumnToggle>
      <Dropdown
        onOpen={() => setActive(true)}
        onClose={() => setActive(false)}
        showSearch
        items={dropdownItems}
        selection
        selectedIds={visibleColumnIds}
        propOverrides={{
          listProps: () => ({ 'data-test-id': 'data-grid-column-toggle-options' }),
          optionProps: () => ({ 'data-test-id': 'data-grid-column-toggle-option' }),
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
