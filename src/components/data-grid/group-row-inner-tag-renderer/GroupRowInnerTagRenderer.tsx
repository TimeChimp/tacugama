import { Tag } from '../../tag';
import React from 'react';
import { StyledGroupRowInnerRendererContainer } from '../styles';

export const GroupRowInnerTagRenderer = ({ node, value, tagTexts }: any) => {
  const tagText = tagTexts && tagTexts[node?.key];

  return (
    <StyledGroupRowInnerRendererContainer>
      <span>{value}</span>&nbsp;
      {tagText && (
        <span>
          <Tag value={tagText} />
        </span>
      )}
    </StyledGroupRowInnerRendererContainer>
  );
};
