import { Tag } from '..';
import React from 'react';
import { StyledGroupRowInnerRendererContainer } from './styles';

export const GroupRowInnerTagRenderer = ({ node, value, tagTexts }: any) => {
  const tagText = tagTexts && tagTexts[node?.key];
  return (
    <StyledGroupRowInnerRendererContainer>
      <span>{value}</span>&nbsp;
      <span>
        <Tag value={tagText} />
      </span>
    </StyledGroupRowInnerRendererContainer>
  );
};
