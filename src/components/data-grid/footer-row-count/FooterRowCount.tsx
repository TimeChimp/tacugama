import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from '../types';
import { StyledDataGridDivider, StyledFooterRowCount } from '../styles';
import { useTheme } from '../../../providers';
import { ParagraphSmall } from '../../typography';

const MODEL_UPDATED_EVENT = 'modelUpdated';
const PAGINATION_CHANGED_EVENT = 'paginationChanged';
const ROW_SELECTED_EVENT = 'rowSelected';

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
        colors: { contentTertiary },
        sizing: { scale400 },
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
      gridApi?.removeEventListener(MODEL_UPDATED_EVENT, onModelUpdated);
      gridApi?.removeEventListener(PAGINATION_CHANGED_EVENT, onModelUpdated);
      gridApi?.removeEventListener(ROW_SELECTED_EVENT, onModelUpdated);
    };
  }, [gridApi]);

  return (
    <StyledFooterRowCount>
      <ParagraphSmall
        marginTop={scale400}
        marginBottom={scale400}
        marginLeft={scale400}
        marginRight={scale400}
        color={contentTertiary}
      >
        {rowCountText(count, totalCount)}
      </ParagraphSmall>
      {rowsSelected ? (
        <>
          <StyledDataGridDivider />
          <ParagraphSmall
            marginTop={scale400}
            marginBottom={scale400}
            marginLeft={scale400}
            marginRight={scale400}
            color={contentTertiary}
          >
            {rowCountSelectedText(rowsSelected)}
          </ParagraphSmall>
        </>
      ) : null}
    </StyledFooterRowCount>
  );
};

export default FooterRowCount;
