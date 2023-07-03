import React, { useCallback, useEffect, useState } from 'react';
import { HeaderCheckboxProps, MODEL_UPDATED_EVENT, PAGINATION_CHANGED_EVENT, SELECTION_CHANGED_EVENT } from '..';
import { StyledHeaderCheckbox, StyledHeaderCheckboxValue } from '../styles';
import { Checkbox } from '../../checkbox';
import { RowNode } from '@ag-grid-community/core';

const CHECKBOX_TEST_ID = 'data-grid-select-all';

export const HeaderCheckbox = ({ api: gridApi, displayName }: HeaderCheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  const getPageIndices = useCallback(() => {
    const currentPage = gridApi.paginationGetCurrentPage();
    const totalResults = gridApi.paginationGetRowCount();
    const pageSize = gridApi.paginationGetPageSize();
    const startIndex = currentPage * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalResults);

    return { startIndex, endIndex, pageRowCount: endIndex - startIndex };
  }, [gridApi]);

  const allAreSelected = useCallback(() => {
    const { startIndex, endIndex } = getPageIndices();
    const pageRows: RowNode[] = [];
    for (let i = startIndex; i < endIndex; i++) {
      const row = gridApi.getDisplayedRowAtIndex(i);
      if (row) {
        pageRows.push(row);
      }
    }

    if (!pageRows.length) {
      return false;
    }

    const selectedRows: RowNode[] = gridApi.getSelectedRows();
    const selectedRowIds = selectedRows?.map((row) => row.id);
    return pageRows.every(({ id }) => selectedRowIds.includes(id));
  }, [gridApi, getPageIndices]);

  const handleChangeEvent = useCallback(() => {
    const selectedRows: RowNode[] = gridApi.getSelectedRows();
    const allSelected = allAreSelected();
    if (!checked && allSelected) {
      setChecked(true);
    } else if (checked && !allSelected) {
      setChecked(false);
    }

    if (selectedRows?.length && !allSelected) {
      setIsIndeterminate(true);
    } else {
      setIsIndeterminate(false);
    }
  }, [gridApi, checked, allAreSelected]);

  const deselectAll = useCallback(() => {
    const selectedRows: RowNode[] = gridApi.getSelectedNodes();
    selectedRows.forEach((row) => row.selectThisNode(false));
  }, [gridApi]);

  const onPaginationChanged = useCallback(() => {
    deselectAll();
    handleChangeEvent();
  }, [deselectAll, handleChangeEvent]);

  useEffect(() => {
    gridApi.addEventListener(MODEL_UPDATED_EVENT, handleChangeEvent);
    gridApi.addEventListener(SELECTION_CHANGED_EVENT, handleChangeEvent);
    gridApi.addEventListener(PAGINATION_CHANGED_EVENT, onPaginationChanged);

    return () => {
      gridApi.removeEventListener(MODEL_UPDATED_EVENT, handleChangeEvent);
      gridApi.removeEventListener(SELECTION_CHANGED_EVENT, handleChangeEvent);
      gridApi.removeEventListener(PAGINATION_CHANGED_EVENT, onPaginationChanged);
    };
  }, [gridApi, checked, getPageIndices, allAreSelected]);

  const onChange = () => {
    const { startIndex, endIndex } = getPageIndices();
    for (let i = startIndex; i < endIndex; i++) {
      gridApi.getDisplayedRowAtIndex(i)?.setSelected(!checked && !isIndeterminate);
    }
  };

  return (
    <StyledHeaderCheckbox>
      <Checkbox testId={CHECKBOX_TEST_ID} isIndeterminate={isIndeterminate} checked={checked} onChange={onChange} />
      <StyledHeaderCheckboxValue className="ag-cell-value">{displayName}</StyledHeaderCheckboxValue>
    </StyledHeaderCheckbox>
  );
};

export default HeaderCheckbox;
