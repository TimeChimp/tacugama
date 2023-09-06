import React, { useEffect, useState } from 'react';
import { FormGroupProps } from './types';
import { ParagraphSmall, LabelMedium } from '../typography';
import { useTheme } from '../../providers';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { Block } from '../block';

export const FormGroup = ({ title, subtitle, children }: FormGroupProps) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [elementRef, setElementRef] = useState<HTMLElement | null>();

  useEffect(() => {
    const onWindowResize = () => {
      setDimensions({
        width: elementRef?.offsetWidth || 0,
        height: elementRef?.offsetHeight || 0,
      });
    };

    if (typeof window !== undefined && elementRef?.offsetWidth) {
      onWindowResize();
      window.addEventListener('resize', onWindowResize);
      return () => {
        window.removeEventListener('resize', onWindowResize);
      };
    }
  }, [elementRef]);

  const { width } = dimensions;
  const breakpoint = 900;
  const isLarge = width ? width > breakpoint : true;

  const {
    theme: {
      current: {
        sizing: { scale300, scale900, scale1200 },
        customColors: { dark1, dark3 },
      },
    },
  } = useTheme();

  return (
    <Block ref={setElementRef} width="100%">
      <FlexGrid
        flexGridColumnCount={2}
        $gridGap={isLarge ? scale1200 : scale900}
        flexDirection={isLarge ? 'row' : 'column'}
      >
        <FlexGridItem
          flex={isLarge ? 1 : 'auto'}
          overrides={{
            Block: {
              style: {
                width: isLarge ? 'auto' : '100%',
              },
            },
          }}
        >
          <LabelMedium color={dark1}>{title}</LabelMedium>
          {subtitle ? (
            <ParagraphSmall color={dark3} marginTop={scale300}>
              {subtitle}
            </ParagraphSmall>
          ) : null}
        </FlexGridItem>
        <FlexGridItem
          flex={isLarge ? 3 : 'auto'}
          overrides={{
            Block: {
              style: {
                width: isLarge ? 'auto' : '100%',
              },
            },
          }}
        >
          {children}
        </FlexGridItem>
      </FlexGrid>
    </Block>
  );
};
