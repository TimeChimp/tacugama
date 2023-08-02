import React from 'react';
import { useTheme } from '../../providers';
import SideMenuSkeleton from './SideMenuSkeleton';
import { ButtonBox, SideMenuFlexGridItem, SkeletonMainContainer } from './styles';
import { EditPageSkeletonProps } from './types';
import { Skeleton } from '../skeleton';
import { Box } from '../box';
import { FlexItem } from '../flex-item';
import { FlexGrid, FlexGridItem } from '../flex-grid';

const NUMBER_OF_ROWS = 6;

export const EditPageSkeleton = ({ numberOfSideNavItems }: EditPageSkeletonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500, scale900, scale1000, scale1600, scale2400 },
      },
    },
  } = useTheme();

  return (
    <>
      <FlexItem justifyContent="space-between" marg1="0" marg2="0" marg3={scale500} marg4="0">
        <Skeleton animation height={scale900} width="200px" />
        <ButtonBox>
          <Skeleton animation height={scale900} width="200px" />
        </ButtonBox>
      </FlexItem>
      <FlexGrid flexGridColumnCount={2} flexGridColumnGap={scale900} flexGridRowGap={scale1600}>
        <SideMenuFlexGridItem>
          <SideMenuSkeleton numberOfSideNavItems={numberOfSideNavItems} />
        </SideMenuFlexGridItem>

        <FlexGridItem>
          <Box paddingTop={scale1000} paddingBottom={scale1000} paddingRight={scale1600} paddingLeft={scale1600}>
            {[...Array(NUMBER_OF_ROWS)].map((_, i) => (
              <SkeletonMainContainer key={i}>
                <Skeleton width="100%" height={scale2400} animation />
              </SkeletonMainContainer>
            ))}
          </Box>
        </FlexGridItem>
      </FlexGrid>
    </>
  );
};

export default EditPageSkeleton;
