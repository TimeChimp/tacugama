import React, { forwardRef } from 'react';
import { Block } from '../../block';
import { Button } from '../../button';
import { Toggle, ToggleSize } from '../../toggle';
import { ParagraphSmall } from '../../typography';
import { ButtonKind } from '../../../models';
import { padding } from '../../../utils';
import { useTheme } from '../../../providers';
import { DropdownItem } from '../../dropdown';

export interface MenuOptionProps {
  item: DropdownItem;
  onItemSelect: (item: DropdownItem) => void;
}

export const MenuOption = forwardRef<any, MenuOptionProps>(({ item, onItemSelect }: MenuOptionProps, ref) => {
  const {
    theme: {
      current: {
        sizing: { scale200, scale500, scale600 },
      },
    },
  } = useTheme();

  return (
    <Block ref={ref} display="flex" alignItems="center" {...padding(scale200, scale600)}>
      <Button kind={ButtonKind.minimal} onClick={() => onItemSelect(item)}>
        <Toggle checked={item.isChecked} size={ToggleSize.large} />
        <ParagraphSmall marginLeft={scale500}>{item.label}</ParagraphSmall>
      </Button>
    </Block>
  );
});

MenuOption.displayName = 'MenuOption';
