import React, { useEffect, useState } from 'react';
import { FormModalGroupProps } from './types';
import { FlexGridItem } from '../flex-grid';
import { Block } from '../block';
import { FormGroupStack } from './styles';

export const FormModalGroup = ({ children }: FormModalGroupProps) => {
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

  return (
    <Block ref={setElementRef} width="100%">
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
    </Block>
  );
};
