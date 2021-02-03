import React, { useEffect, useState } from 'react';
import { StatusBarRowCountProps } from './types';
import { StyledStatusBarRowCount } from './StyledDataGrid';
import { useTheme } from '../../providers';
import { LabelSmall } from '../typography';

const EVENT_LISTENER = 'modelUpdated'

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
    const onModelUpdated = () => {
      setCount(gridApi?.getDisplayedRowCount());
    };
    
    gridApi?.addEventListener(EVENT_LISTENER, onModelUpdated);

    return () => {
      gridApi?.removeEventListener(EVENT_LISTENER, onModelUpdated);
    }
  }, [gridApi]);

  return (
    <StyledStatusBarRowCount>
      <LabelSmall color={contentTertiary}>{rowCountText ? rowCountText(count) : `Showing ${count} results`}</LabelSmall>
    </StyledStatusBarRowCount>
  );
};

export default StatusBarRowCount;
