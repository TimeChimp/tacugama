import React, { useEffect, useState, useCallback } from 'react';
import { Dropdown, DropdownItem } from '../../dropdown';
import { Button } from '../../button';
import { useTheme } from '../../../providers';
import { HeaderColumnToggleProps, MODEL_UPDATED_EVENT } from '..';
import { Column } from '@ag-grid-community/core';
import { DATA_TEST_ID, ButtonKind } from '../../../models';
import { FlexItem } from '../../flex-item';
import { CaretDown, Table } from '@phosphor-icons/react';

export const HeaderColumnToggle = ({ api: gridApi, columnApi }: HeaderColumnToggleProps) => {
  const [active, setActive] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>([]);

  const {
    theme: {
      current: {
        sizing: { scale500 },
        colors: { primary },
        customColors: { dark1 },
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

  useEffect(() => {
    const onModelUpdated = () => setVisibleColumns();

    gridApi?.addEventListener(MODEL_UPDATED_EVENT, onModelUpdated);

    return () => {
      gridApi?.removeEventListener(MODEL_UPDATED_EVENT, onModelUpdated);
    };
  }, [gridApi]);

  const toggleColumn = useCallback(
    (column: Column) => {
      const colId = column.getColId();
      const isVisible = !column?.isVisible() || false;

      columnApi.setColumnVisible(colId, isVisible);

      setVisibleColumns();
    },
    [columnApi, gridApi, setVisibleColumns],
  );

  useEffect(() => {
    const items = columnApi
      .getAllColumns()
      // skip the first two columns (checkbox and first column, which is always visible)
      ?.filter((column, index) => index > 1 && column.getColDef().headerName)
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
  }, [gridApi, columnApi, setVisibleColumns, toggleColumn]);

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
      <Button kind={ButtonKind.tertiary}>
        <Table color={active ? primary : dark1} />
        <FlexItem marg4={scale500}>
          <CaretDown color={active ? primary : dark1} />
        </FlexItem>
      </Button>
    </Dropdown>
  );
};

export default HeaderColumnToggle;
