import { useTheme } from '../../providers';
import React from 'react';
import { Block } from '../block';
import { FlexGrid } from '../flex-grid';
import { Skeleton } from '../skeleton';
import { FlexItem } from '../flex-item';

export const AppSkeleton = () => {
  const {
    theme: {
      current: {
        sizing: { scale400 },
      },
    },
  } = useTheme();

  return (
    <>
      <FlexGrid flexGridColumnCount={2} flexGridColumnGap="scale900" flexGridRowGap="scale1600">
        <FlexItem marg1={scale400} marg2="0" justifyContent="start">
          <Skeleton animation height="38px" width="200px" />
        </FlexItem>
      </FlexGrid>
      <Block marginTop={scale400}>
        <Skeleton animation height="80vh" width="100%" />
      </Block>
    </>
  );
};

export default AppSkeleton;
