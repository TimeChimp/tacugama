import React, { useCallback, useEffect, useState } from 'react';
import { StyledGroupRowInnerRendererContainer } from '../styles';

const MODEL_UPDATED_EVENT = 'modelUpdated';
const CELL_VALUE_CHANGED_EVENT = 'cellValueChanged';
const FILTER_CHANGED_EVENT = 'filterChanged';

export const GroupRowInnerRenderer = ({ node, value, api, totalCounts }: any) => {
  const [totalChildrenCount, setTotalChildrenCount] = useState(node.allChildrenCount);
  const [totalNumberCount, setTotalNumberCount] = useState(totalCounts ? totalCounts[node.key] : 0);

  const refreshUi = useCallback(() => {
    setTotalChildrenCount(node.allChildrenCount);
    setTotalNumberCount(totalCounts ? totalCounts[node.key] : 0);
  }, [node.allChildrenCount, node.key, totalCounts]);

  const dataChangedListener = useCallback(() => refreshUi(), [refreshUi]);

  useEffect(() => {
    api.addEventListener(CELL_VALUE_CHANGED_EVENT, dataChangedListener);
    api.addEventListener(FILTER_CHANGED_EVENT, dataChangedListener);
    api.addEventListener(MODEL_UPDATED_EVENT, dataChangedListener);

    return () => {
      api.removeEventListener(CELL_VALUE_CHANGED_EVENT, dataChangedListener);
      api.removeEventListener(FILTER_CHANGED_EVENT, dataChangedListener);
      api.removeEventListener(MODEL_UPDATED_EVENT, dataChangedListener);
    };
  }, [api, dataChangedListener]);

  const getFormattedCount = () => {
    if (!totalNumberCount) {
      return `(${totalChildrenCount})`;
    }
    return `(${totalChildrenCount}/${totalNumberCount})`;
  };

  if (!totalChildrenCount) {
    return value;
  }

  return (
    <StyledGroupRowInnerRendererContainer>
      <span>{value}</span>&nbsp;
      <span>{getFormattedCount()}</span>
    </StyledGroupRowInnerRendererContainer>
  );
};
