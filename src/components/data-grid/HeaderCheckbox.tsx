import React, { useEffect, useState } from 'react';
import { HeaderCheckboxProps } from '.';
import { StyledHeaderCheckbox, StyledHeaderCheckboxValue } from './StyledDataGrid';
import { Checkbox } from '../checkbox';

export const HeaderCheckbox = ({ api: gridApi, displayName }: HeaderCheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const [totalRowCount, setTotalRowCount] = useState<number>();

  useEffect(() => {
    setTotalRowCount(gridApi.getDisplayedRowCount());

    function onModelUpdated() {
      setTotalRowCount(gridApi.getDisplayedRowCount());
    }

    function selectionChanged() {
      const allSelected = gridApi.getSelectedRows().length === totalRowCount;
      if (!checked && allSelected) {
        setChecked(true);
      } else if (checked && !allSelected) {
        setChecked(false);
      }
    }

    gridApi.addEventListener('modelUpdated', onModelUpdated);
    gridApi.addEventListener('selectionChanged', selectionChanged);

    return () => {
      gridApi.removeEventListener('modelUpdated', onModelUpdated);
      gridApi.removeEventListener('selectionChanged', selectionChanged);
    };
  }, [gridApi, totalRowCount, checked]);

  const onChange = () => {
    gridApi.forEachNode((node) => {
      node.setSelected(!checked);
    });
  };

  return (
    <StyledHeaderCheckbox>
      <Checkbox checked={checked} onChange={onChange} />
      <StyledHeaderCheckboxValue className="ag-cell-value">{displayName}</StyledHeaderCheckboxValue>
    </StyledHeaderCheckbox>
  );
};

export default HeaderCheckbox;
