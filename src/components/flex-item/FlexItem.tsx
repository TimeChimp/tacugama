import React from 'react';
import { TextAlignProperty, FlexWrapProperty } from '../../models';
import { StyledItem } from './StyledFlexItem';

export interface FlexItemProps {
  children?: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  textAlign?: TextAlignProperty;
  gap?: string;
  width?: string;
  marg1?: string;
  marg2?: string;
  marg3?: string;
  marg4?: string;
  height?: string;
  flexWrap?: FlexWrapProperty;
}

export const FlexItem = ({
  children,
  justifyContent,
  alignItems,
  width,
  textAlign,
  marg1,
  marg2,
  marg3,
  marg4,
  gap,
  height,
  flexWrap,
}: FlexItemProps) => {
  return (
    <StyledItem
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $width={width}
      $textAlign={textAlign}
      $marg1={marg1}
      $marg2={marg2}
      $marg3={marg3}
      $marg4={marg4}
      $gap={gap}
      $height={height}
      $flexWrap={flexWrap}
    >
      {children}
    </StyledItem>
  );
};
