import React, { useEffect, useState, useCallback } from 'react';
import { Dropdown, DropdownItem } from '../../dropdown';
import { Button } from '../../button';
import { useTheme } from '../../../providers';
import { HeaderColumnToggleProps, MODEL_UPDATED_EVENT } from '..';
import { Column } from '@ag-grid-community/core';
import { DATA_TEST_ID, ButtonKind } from '../../../models';
import { CaretDown, Table } from '@phosphor-icons/react';

export const HeaderColumnToggle = ({ api: gridApi }: HeaderColumnToggleProps) => {
  const [active, setActive] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>([]);

  const {
    theme: {
      current: {
        colors: { primary },
        customColors: { dark1 },
      },
    },
  } = useTheme();

  const setVisibleColumns = useCallback(() => {
    const visibleColumnIds = gridApi
      .getAllGridColumns()
      ?.filter((column) => column.isVisible())
      .map((column) => column.getColId());
    setVisibleColumnIds(visibleColumnIds || []);
  }, [gridApi]);

  useEffect(() => {
    const onModelUpdated = () => setVisibleColumns();

    gridApi?.addEventListener(MODEL_UPDATED_EVENT, onModelUpdated);

    return () => {
      if (!gridApi?.isDestroyed()) {
        gridApi?.removeEventListener(MODEL_UPDATED_EVENT, onModelUpdated);
      }
    };
  }, [gridApi]);

  const toggleColumn = useCallback(
    (column: Column) => {
      const colId = column.getColId();
      const isVisible = !column?.isVisible() || false;

      gridApi?.setColumnsVisible([colId], isVisible);

      setVisibleColumns();
    },
    [gridApi, setVisibleColumns],
  );

  useEffect(() => {
    const items = gridApi
      .getAllGridColumns()
      // skip the first three columns (checkbox, rowActionItems and first column, which is always visible)
      ?.filter((column, index) => index > 2 && column.getColDef().headerName)
      .map(
        (column) =>
          ({
            id: column.getColId(),
            label: column.getColDef().headerName,
            action: () => toggleColumn(column),
          } as DropdownItem),
      );

    setVisibleColumns();
    setDropdownItems(items || []);
  }, [gridApi, setVisibleColumns, toggleColumn]);

  return (
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
      <Button kind={ButtonKind.tertiary} startEnhancer={<Table color={active ? primary : dark1} />}>
        <CaretDown color={active ? primary : dark1} />
      </Button>
    </Dropdown>
  );
};

export default HeaderColumnToggle;
