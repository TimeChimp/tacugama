import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from './types';
import { StyledDataGridDivider, StyledFooterRowCount } from './styles';
import { useTheme } from '../../providers';
import { LabelSmall } from '../typography';

const MODEL_UPDATED_EVENT_LISTENER = 'modelUpdated';
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
      setCount(gridApi?.getDisplayedRowCount());
    };

    const onRowSelection = () => {
      setRowsSelected(gridApi?.getSelectedRows()?.length);
    };

    gridApi?.addEventListener(MODEL_UPDATED_EVENT_LISTENER, onModelUpdated);
    gridApi?.addEventListener(ROW_SELECTED_EVENT_LISTENER, onRowSelection);

    return () => {
      gridApi?.removeEventListener(MODEL_UPDATED_EVENT_LISTENER, onModelUpdated);
      gridApi?.removeEventListener(ROW_SELECTED_EVENT_LISTENER, onModelUpdated);
    };
  }, [gridApi]);

  return (
    <StyledFooterRowCount>
      <LabelSmall margin={[0, scale400]} color={contentTertiary}>
        {rowCountText(count)}
      </LabelSmall>
      {rowsSelected ? (
        <>
          <StyledDataGridDivider />
          <LabelSmall margin={[0, scale400]} color={contentTertiary}>
            {rowCountSelectedText(rowsSelected)}
          </LabelSmall>
        </>
      ) : null}
    </StyledFooterRowCount>
  );
};

export default FooterRowCount;
