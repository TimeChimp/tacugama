import React from 'react';
import { Box } from '../box';
import { useTheme } from '../../providers';
import { SkeletonNavContainer } from './styles';
import { EditPageSkeletonProps } from './types';
import { Skeleton } from '../skeleton';

export const SideMenuSkeleton = ({ numberOfSideNavItems }: EditPageSkeletonProps) => {
  const {
    theme: {
      current: {
        sizing: { scale700, scale850 },
      },
    },
  } = useTheme();

  return (
    <>
      <Box paddingTop={scale700} paddingBottom={scale700} paddingRight={scale700} paddingLeft={scale700}>
        {[...Array(numberOfSideNavItems ?? 3)].map((_, i) => (
          <SkeletonNavContainer key={i}>
            <Skeleton width="100%" height={scale850} animation />
          </SkeletonNavContainer>
        ))}
      </Box>
    </>
  );
};

export default SideMenuSkeleton;
