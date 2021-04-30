import React, { FormEvent, useEffect, useState } from 'react';
import { ColorResult, TwitterPicker } from 'react-color';
import { Input, InputProps } from './Input';
import { TertiaryButton } from 'components/button';
import { ClickOutside } from 'components/click-outside';
import { margin, padding } from '../../utils';
import { StyledColorSwatch } from './styles';

export interface ColorInputProps extends InputProps {}

const colors = [
  '#eccc68',
  '#ffa502',
  '#ff7f50',
  '#ff6348',
  '#ff6b81',
  '#ff4757',
  '#7bed9f',
  '#2ed573',
  '#70a1ff',
  '#1e90ff',
  '#5352ed',
  '#3742fa',
  '#6559D2',
  '#a4b0be',
  '#747d8c',
  '#57606f',
  '#2f3542',
];

export const ColorInput = ({ ...rest }: ColorInputProps) => {
  const [color, setColor] = useState<string>(colors[0]);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const getRandomBackgroundColor = () => {
    const { length } = colors;
    const randomNumber = Math.floor(Math.random() * (length + 1));
    return colors[randomNumber];
  };

  const selectColor = (color: ColorResult) => setColor(color.hex);

  useEffect(() => {
    const color = getRandomBackgroundColor();
    setColor(color);
  }, []);

  return (
    <>
      <Input
        startEnhancer={
          <TertiaryButton
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  ':hover': {
                    backgroundColor: 'transparent',
                  },
                  ':active': {
                    backgroundColor: 'transparent',
                  },
                  ':disabled': {
                    backgroundColor: 'transparent',
                  },
                  ...padding($theme.sizing.scale400, '0', $theme.sizing.scale400, '0'),
                  // NOTE: Value does not exist in theme
                  ...margin('0', '0', '0', '-7px'),
                }),
              },
            }}
            onClick={() => setShowColorPicker(!showColorPicker)}
          >
            <StyledColorSwatch $color={color} />
          </TertiaryButton>
        }
        placeholder="#00000"
        onChange={(e: FormEvent<HTMLInputElement>) => setColor(e.currentTarget.value)}
        value={color}
        uppercase
        {...rest}
      />
      {showColorPicker ? (
        <ClickOutside onClickOutside={() => setShowColorPicker(false)}>
          <TwitterPicker colors={colors} color={color} onChange={selectColor} />
        </ClickOutside>
      ) : null}
    </>
  );
};
