import React, { useCallback, useEffect, useState } from 'react';
import { HeaderCheckboxProps } from '..';
import { StyledHeaderCheckbox, StyledHeaderCheckboxValue } from '../styles';
import { Checkbox } from '../../checkbox';
import { RowNode } from '@ag-grid-community/core';

const CHECKBOX_TEST_ID = 'data-grid-select-all';
const MODEL_UPDATED_EVENT = 'modelUpdated';
const SELECTION_CHANGED_EVENT = 'selectionChanged';
const PAGINATION_CHANGED_EVENT = 'paginationChanged';

export const HeaderCheckbox = ({ api: gridApi, displayName }: HeaderCheckboxProps) => {
  const [checked, setChecked] = useState(false);

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
    let pageRows: RowNode[] = [];
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

  useEffect(() => {
    function handleChangeEvent() {
      const allSelected = allAreSelected();
      if (!checked && allSelected) {
        setChecked(true);
      } else if (checked && !allSelected) {
        setChecked(false);
      }
    }

    gridApi.addEventListener(MODEL_UPDATED_EVENT, handleChangeEvent);
    gridApi.addEventListener(SELECTION_CHANGED_EVENT, handleChangeEvent);
    gridApi.addEventListener(PAGINATION_CHANGED_EVENT, handleChangeEvent);

    return () => {
      gridApi.removeEventListener(MODEL_UPDATED_EVENT, handleChangeEvent);
      gridApi.removeEventListener(SELECTION_CHANGED_EVENT, handleChangeEvent);
      gridApi.removeEventListener(PAGINATION_CHANGED_EVENT, handleChangeEvent);
    };
  }, [gridApi, checked, getPageIndices, allAreSelected]);

  const onChange = () => {
    const { startIndex, endIndex } = getPageIndices();
    for (let i = startIndex; i < endIndex; i++) {
      gridApi.getDisplayedRowAtIndex(i)?.setSelected(!checked);
    }
  };

  return (
    <StyledHeaderCheckbox>
      <Checkbox testId={CHECKBOX_TEST_ID} checked={checked} onChange={onChange} />
      <StyledHeaderCheckboxValue className="ag-cell-value">{displayName}</StyledHeaderCheckboxValue>
    </StyledHeaderCheckbox>
  );
};

export default HeaderCheckbox;
