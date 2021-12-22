import React, { useEffect, useState } from 'react';
import { StyledGroupRowInnerRendererContainer } from './styles';

const MODEL_UPDATED_EVENT = 'modelUpdated';
const CELL_VALUE_CHANGED_EVENT = 'cellValueChanged';
const FILTER_CHANGED_EVENT = 'filterChanged';


export const GroupRowInnerRenderer = ({ node, value, api, totalCounts }: any) => {
  const [totalChildrenCount, setTotalChildrenCount] = useState(node.allChildrenCount);
  const [totalNumberCount, setTotalNumberCount] = useState(totalCounts ? totalCounts[node.key] : 0);

  const refreshUi = () => {
    setTotalChildrenCount(node.allChildrenCount);
    setTotalNumberCount(totalCounts ? totalCounts[node.key] : 0);
  };

  const dataChangedListener = () => refreshUi();

  useEffect(() => {
    api.addEventListener(CELL_VALUE_CHANGED_EVENT, dataChangedListener);
    api.addEventListener(FILTER_CHANGED_EVENT, dataChangedListener);
    api.addEventListener(MODEL_UPDATED_EVENT, dataChangedListener);

    return () => {
      api.removeEventListener(CELL_VALUE_CHANGED_EVENT, dataChangedListener);
      api.removeEventListener(FILTER_CHANGED_EVENT ,dataChangedListener);
      api.removeEventListener(MODEL_UPDATED_EVENT, dataChangedListener);
    };
  }, []);

  if (!totalChildrenCount) {
    return value;
  }
  
  return (
    <StyledGroupRowInnerRendererContainer>
      <span>{value}</span>&nbsp;
      <span>
        {`(${totalChildrenCount}/${totalNumberCount})`}</span>
    </StyledGroupRowInnerRendererContainer>
  );
};
