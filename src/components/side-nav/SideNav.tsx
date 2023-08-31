import React from 'react';
import { SideNavListItem } from './SideNavListItem';
import { StyledSideNav } from './styles';
import { SideNavProps } from './types';
import { Block } from '../block';

export const SideNav = ({ items, header, isInsideModal = false, ...rest }: SideNavProps) => {
  return (
    <Block
      role="navigation"
      aria-label="side-navigation"
      display="flex"
      justifyContent="center"
      overflow="auto"
      height="100%"
    >
      <Block width="100%">
        <StyledSideNav $isInsideModal={isInsideModal}>
          {header}

          {items.map((item) => (
            <SideNavListItem key={item.id} item={item} {...rest} />
          ))}
        </StyledSideNav>
      </Block>
    </Block>
  );
};
