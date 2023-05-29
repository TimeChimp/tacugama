import React from 'react';
import { Slider as SliderComponent, SliderProps } from 'baseui/slider';
import { padding } from '../../utils';

export const Slider = ({ value = [0], onChange, ...rest }: SliderProps) => (
  <SliderComponent
    {...rest}
    value={value}
    onChange={onChange}
    // useful for testing
    // onFinalChange={({ value }) => console.log(value)}
    overrides={{
      InnerTrack: {
        style: ({ $theme }) => ({
          background: $theme.customColors.light2,
          height: $theme.sizing.scale100,
        }),
      },
      InnerThumb: () => null,
      ThumbValue: () => null,
      Thumb: {
        style: ({ $theme }) => ({
          height: $theme.sizing.scale600,
          width: $theme.sizing.scale600,
          boxShadow: 'none',
          backgroundColor: $theme.colors.primary,
        }),
      },
      TickBar: () => null,
      Track: {
        style: ({ $theme }) => ({
          ...padding($theme.sizing.scale600, '0'),
        }),
      },
    }}
  />
);
