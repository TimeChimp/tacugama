import React, { FormEvent, useEffect, useState } from 'react';
import { ColorResult, TwitterPicker } from 'react-color';
import { Input } from '../Input';
import { TertiaryButton } from '../../button';
import { ClickOutside } from '../../click-outside';
import { margin, padding } from '../../../utils';
import { ColorPickerContainer, StyledColorSwatch } from '../styles';
import { useTheme } from '../../../providers';
import { InputProps } from '../types';

export interface ColorInputProps extends Omit<InputProps, 'value' | 'uppercase' | 'onChange' | 'placeholder'> {
  onChange: (color: string) => void;
  value?: string;
  generateRandomColor?: boolean;
}

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

export const ColorInput = ({ onChange, value, generateRandomColor = true, ...rest }: ColorInputProps) => {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const {
    theme: {
      current: {
        colors: { contentInverseTertiary },
      },
    },
  } = useTheme();

  const getRandomBackgroundColor = () => {
    const { length } = colors;
    const randomNumber = Math.floor(Math.random() * (length + 1));
    return colors[randomNumber];
  };

  const selectColor = (color: ColorResult) => onChange(color.hex);

  useEffect(() => {
    if (generateRandomColor) {
      const color = getRandomBackgroundColor();
      onChange(color);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <StyledColorSwatch $color={value ?? contentInverseTertiary} />
          </TertiaryButton>
        }
        placeholder="#00000"
        onChange={(e: FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
        value={value}
        uppercase
        {...rest}
      />
      {showColorPicker ? (
        <ColorPickerContainer>
          <ClickOutside onClickOutside={() => setShowColorPicker(false)}>
            <TwitterPicker
              colors={colors}
              color={value}
              onChange={selectColor}
              onChangeComplete={() => setShowColorPicker(false)}
            />
          </ClickOutside>
        </ColorPickerContainer>
      ) : null}
    </>
  );
};
