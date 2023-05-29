import React from 'react';
import { Slider as SliderComponent, SliderProps } from 'baseui/slider';
import { useTheme } from '../../providers';
import { RadioSliderIcon } from '../icons/radio';

export const Slider = ({ max, min, ...rest }: SliderProps) => {
  const [value, setValue] = React.useState([49]);

  const {
    theme: {
      current: {
        sizing: { scale600 },
        colors: { primary },
      },
    },
  } = useTheme();

  return (
    <SliderComponent
      {...rest}
      value={value}
      onChange={({ value }) => value && setValue(value)}
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
        Thumb: () => (
          <div
            aria-valuemax={max}
            aria-valuemin={min}
            aria-valuenow={value?.[0]}
            draggable="false"
            role="slider"
            style={{
              position: 'absolute',
              zIndex: '0',
              cursor: 'grab',
              userSelect: 'none',
              touchAction: 'none',
            }}
          >
            <RadioSliderIcon color={primary} size={scale600} />
          </div>
        ),
        TickBar: () => null,
      }}
    />
  );
};
