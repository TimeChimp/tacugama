import React, { useEffect, useState } from 'react';
import { FooterRowCountProps, MODEL_UPDATED_EVENT, PAGINATION_CHANGED_EVENT, ROW_SELECTED_EVENT } from '../types';
import { StyledDataGridDivider, StyledFooterRowCount } from '../styles';
import { useTheme } from '../../../providers';
import { ParagraphSmall } from '../../typography';

export const FooterRowCount = ({
  api: gridApi,
  translations: { rowCountSelectedText, rowCountText },
}: FooterRowCountProps) => {
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [rowsSelected, setRowsSelected] = useState(0);
  const {
    theme: {
      current: {
        customColors: { dark1 },
        sizing: { scale0 },
      },
    },
  } = useTheme();

  useEffect(() => {
    const onModelUpdated = () => {
      const currentPage = gridApi.paginationGetCurrentPage();
      const totalResults = gridApi.paginationGetRowCount();
      const pageSize = gridApi.paginationGetPageSize();
      const startIndex = currentPage * pageSize + 1;
      const endIndex = Math.min(startIndex + pageSize - 1, totalResults);
      setCount(endIndex - startIndex + 1);
      setTotalCount(totalResults);
    };

    const onRowSelection = () => {
      setRowsSelected(gridApi?.getSelectedRows()?.length);
    };

    gridApi?.addEventListener(MODEL_UPDATED_EVENT, onModelUpdated);
    gridApi?.addEventListener(PAGINATION_CHANGED_EVENT, onModelUpdated);
    gridApi?.addEventListener(ROW_SELECTED_EVENT, onRowSelection);

    return () => {
      if (!gridApi?.isDestroyed()) {
        gridApi?.removeEventListener(MODEL_UPDATED_EVENT, onModelUpdated);
        gridApi?.removeEventListener(PAGINATION_CHANGED_EVENT, onModelUpdated);
        gridApi?.removeEventListener(ROW_SELECTED_EVENT, onModelUpdated);
      }
    };
  }, [gridApi]);

  return (
    <StyledFooterRowCount>
      <ParagraphSmall marginTop={scale0} color={dark1}>
        {rowCountText(count, totalCount)}
      </ParagraphSmall>
      {rowsSelected ? (
        <>
          <StyledDataGridDivider />
          <ParagraphSmall marginTop={scale0} color={dark1}>
            {rowCountSelectedText(rowsSelected)}
          </ParagraphSmall>
        </>
      ) : null}
    </StyledFooterRowCount>
  );
};

export default FooterRowCount;
