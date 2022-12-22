import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const XmarkIcon = ({ title = 'Xmark', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8767 11.7015C12.9556 11.7798 13 11.8863 13 11.9975C13 12.1086 12.9556 12.2152 12.8767 12.2934L12.2932 12.877C12.2149 12.9559 12.1084 13.0002 11.9972 13.0002C11.8861 13.0002 11.7796 12.9559 11.7013 12.877L8 9.17566L4.2987 12.877C4.22044 12.9559 4.11391 13.0002 4.00277 13.0002C3.89163 13.0002 3.78509 12.9559 3.70683 12.877L3.12329 12.2934C3.04438 12.2152 3 12.1086 3 11.9975C3 11.8863 3.04438 11.7798 3.12329 11.7015L6.82459 8.00024L3.12329 4.29895C3.04438 4.22068 3 4.11415 3 4.00301C3 3.89187 3.04438 3.78534 3.12329 3.70707L3.70683 3.12354C3.78509 3.04463 3.89163 3.00024 4.00277 3.00024C4.11391 3.00024 4.22044 3.04463 4.2987 3.12354L8 6.82483L11.7013 3.12354C11.7796 3.04463 11.8861 3.00024 11.9972 3.00024C12.1084 3.00024 12.2149 3.04463 12.2932 3.12354L12.8767 3.70707C12.9556 3.78534 13 3.89187 13 4.00301C13 4.11415 12.9556 4.22068 12.8767 4.29895L9.17541 8.00024L12.8767 11.7015Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
