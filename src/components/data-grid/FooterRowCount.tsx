import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from './types';
import { StyledDataGridDivider, StyledFooterRowCount } from './styles';
import { useTheme } from '../../providers';
import { ParagraphSmall } from '../typography';

const MODEL_UPDATED_EVENT_LISTENER = 'modelUpdated';
const PAGINATION_CHANGED_EVENT_LISTENER = 'paginationChanged';
const ROW_SELECTED_EVENT_LISTENER = 'rowSelected';

export const FooterRowCount = ({
  api: gridApi,
  translations: { rowCountSelectedText, rowCountText },
}: FooterRowCountProps) => {
  const [count, setCount] = useState(0);
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
      setCount(gridApi?.paginationGetPageSize());
    };

    const onRowSelection = () => {
      setRowsSelected(gridApi?.getSelectedRows()?.length);
    };

    gridApi?.addEventListener(MODEL_UPDATED_EVENT_LISTENER, onModelUpdated);
    gridApi?.addEventListener(PAGINATION_CHANGED_EVENT_LISTENER, onModelUpdated);
    gridApi?.addEventListener(ROW_SELECTED_EVENT_LISTENER, onRowSelection);

    return () => {
      gridApi?.removeEventListener(MODEL_UPDATED_EVENT_LISTENER, onModelUpdated);
      gridApi?.removeEventListener(PAGINATION_CHANGED_EVENT_LISTENER, onModelUpdated);
      gridApi?.removeEventListener(ROW_SELECTED_EVENT_LISTENER, onModelUpdated);
    };
  }, [gridApi]);

  return (
    <StyledFooterRowCount>
      <ParagraphSmall margin={[0, scale400]} color={contentTertiary}>
        {rowCountText(count)}
      </ParagraphSmall>
      {rowsSelected ? (
        <>
          <StyledDataGridDivider />
          <ParagraphSmall margin={[0, scale400]} color={contentTertiary}>
            {rowCountSelectedText(rowsSelected)}
          </ParagraphSmall>
        </>
      ) : null}
    </StyledFooterRowCount>
  );
};

export default FooterRowCount;
