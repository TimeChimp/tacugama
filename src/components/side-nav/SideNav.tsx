import React from 'react';
import { useTheme } from '../../providers';

export interface SideNavProps {}

export const SideNav = ({}: SideNavProps) => {
  const {
    theme: {
      current: {},
    },
  } = useTheme();

  return <></>;
};
