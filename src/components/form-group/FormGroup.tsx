import React, { useEffect, useMemo, useState } from 'react';
import { FormGroupProps } from './types';
import { ParagraphSmall, LabelMedium } from '../typography';
import { useTheme } from '../../providers';
import { FlexGrid, FlexGridItem } from '../flex-grid';
import { Block } from '../block';
import { FormGroupStack, FormGroupTitleStack } from './styles';
import { Separator } from '../separator';

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
        sizing: { scale800, scale900, scale1200 },
        customColors: { dark1, dark3 },
      },
    },
  } = useTheme();

  const gridGap = useMemo(() => {
    if (isLarge) {
      return scale1200;
    }

    if (title || subtitle) {
      return scale900;
    }

    return 0;
  }, [isLarge, title, subtitle]);

  return (
    <>
      <Block ref={setElementRef} width="100%" paddingBottom={scale800}>
        <FlexGrid flexGridColumnCount={2} $gridGap={gridGap} flexDirection={isLarge ? 'row' : 'column'}>
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
            <FormGroupTitleStack>
              <LabelMedium color={dark1}>{title}</LabelMedium>
              {subtitle ? <ParagraphSmall color={dark3}>{subtitle}</ParagraphSmall> : null}
            </FormGroupTitleStack>
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
            <FormGroupStack>{children}</FormGroupStack>
          </FlexGridItem>
        </FlexGrid>
      </Block>
      <Block
        marginBottom={scale800}
        overrides={{
          Block: {
            style: {
              ':last-child': {
                display: 'none',
              },
            },
          },
        }}
      >
        <Separator />
      </Block>
    </>
  );
};
