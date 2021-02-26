import React, { useEffect, useState } from 'react';
import { Avatar as BaseAvatar, AvatarProps } from 'baseui/avatar';

export type { AvatarProps } from 'baseui/avatar';

const colors = [
  '#eccc68',
  '#ffa502',
  '#7bed9f',
  '#2ed573',
  '#ff7f50',
  '#ff6348',
  '#70a1ff',
  '#1e90ff',
  '#ff6b81',
  '#ff4757',
  '#5352ed',
  '#3742fa',
  '#57606f',
  '#2f3542',
  '#a4b0be',
  '#747d8c',
];

export const Avatar = ({ ...rest }: AvatarProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  const getRandomBackgroundColor = () => {
    const { length } = colors;
    const randomNumber = Math.floor(Math.random() * (length + 1));
    return colors[randomNumber];
  };

  useEffect(() => {
    const color = getRandomBackgroundColor();
    setBackgroundColor(color);
  }, []);

  return (
    <BaseAvatar
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            fontSize: $theme.sizing.scale800,
            backgroundColor,
          }),
        },
        Initials: {
          style: ({ $theme }) => ({
            color: $theme.colors.primaryA,
          }),
        },
      }}
      {...rest}
    />
  );
};
