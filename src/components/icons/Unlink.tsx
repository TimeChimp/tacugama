import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';
import { useTheme } from '../../providers';

export const Unlink = ({ title = 'Unlink', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.686.499A.32.32 0 01.92.6L11.9 11.573a.32.32 0 010 .467l-.354.353a.32.32 0 01-.466 0L7.808 9.127 5.216 11.72c-.5.5-1.178.78-1.885.78h-.227c-.706 0-1.385-.28-1.885-.78l-.44-.44C.28 10.78 0 10.1 0 9.393v-.226c0-.711.282-1.393.786-1.894l2.578-2.58L.1 1.42a.32.32 0 010-.467L.453.6A.32.32 0 01.686.499zm2.645 10.668c.346-.007.675-.148.92-.394l2.61-2.586-.805-.8L4.723 8.72a.333.333 0 01-.473 0l-.466-.467a.333.333 0 010-.473l1.332-1.333-.806-.814L1.725 8.22c-.251.25-.393.591-.393.947v.226c0 .356.142.696.393.947l.433.433c.25.252.591.394.946.394h.227zm7.88-9.447l-.439-.44C10.272.78 9.594.5 8.887.5H8.66c-.71 0-1.39.283-1.892.787L5.016 3.04l.98.947 1.752-1.76c.242-.244.569-.385.912-.394h.227c.355 0 .696.142.946.394l.433.433c.252.25.393.591.393.947v.226c0 .356-.141.697-.393.947L8.514 6.54l.94.94 1.751-1.753a2.668 2.668 0 00.786-1.894v-.226c0-.708-.28-1.386-.78-1.887zm-3.45 2.547l.466.466a.333.333 0 010 .474l-.52.526-.939-.94.52-.526a.333.333 0 01.473 0z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
