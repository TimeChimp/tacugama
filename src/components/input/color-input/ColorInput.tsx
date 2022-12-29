import React, { useEffect, useState } from 'react';
import { ColorResult, TwitterPicker } from 'react-color';
import { Input } from '../Input';
import { Button } from '../../button';
import { ClickOutside } from '../../click-outside';
import { margin, padding } from '../../../utils';
import { ColorPickerContainer, StyledColorSwatch } from '../styles';
import { useTheme } from '../../../providers';
import { ColorInputProps, colors } from './types';

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
          <Button
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  backgroundColor: 'transparent',
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
          </Button>
        }
        placeholder="#00000"
        onChange={(e) => onChange(e.currentTarget.value)}
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
