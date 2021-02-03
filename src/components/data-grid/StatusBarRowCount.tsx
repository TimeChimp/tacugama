import React, { useEffect, useState } from 'react';
import { StatusBarRowCountProps } from './types';
import { StyledStatusBarRowCount } from './StyledDataGrid';
import { useTheme } from '../../providers';
import { LabelSmall } from '../typography';

export const StatusBarRowCount = ({ api: gridApi, rowCountText }: StatusBarRowCountProps) => {
  const [count, setCount] = useState(Number);
  const {
    theme: {
      current: {
        colors: { contentTertiary },
      },
    },
  } = useTheme();

  useEffect(() => {
    gridApi.addEventListener('modelUpdated', () => {
      setCount(gridApi.getDisplayedRowCount());
    });
  }, [gridApi]);

  return (
    <StyledStatusBarRowCount>
      <LabelSmall color={contentTertiary}>
        {
          rowCountText ? rowCountText(count) : `Showing ${count} results`
        }
      </LabelSmall>
    </StyledStatusBarRowCount>
  );
};

export default StatusBarRowCount;
