import React from 'react';
import { StatefulMenu } from '../menu';
import { StatefulPopover } from '../popover';
import { DropdownItem, DropdownOption } from './DropdownOption';
import { TetherPlacement } from 'baseui/layer';
import { padding } from '../../utils';

export interface DropdownProps {
  children?: React.ReactNode;
  items: DropdownItem[];
  placement?: TetherPlacement[keyof TetherPlacement];
  onClose?: () => any;
  onOpen?: () => any;
  propOverrides?: {
    listProps: () => {};
    optionProps: () => {};
  };
}

export const Dropdown = ({
  children,
  items,
  placement = 'bottomRight',
  onOpen,
  onClose,
  propOverrides,
}: DropdownProps) => {
  return (
    <StatefulPopover
      focusLock
      placement={placement}
      onOpen={onOpen}
      onClose={onClose}
      content={({ close }) => (
        <StatefulMenu
          items={items}
          overrides={{
            List: {
              style: {
                ...padding(),
              },
              props: {
                ...propOverrides?.listProps(),
              },
            },
            Option: {
              component: DropdownOption,
              props: {
                onItemSelect: (item: DropdownItem) => {
                  if (item.action) {
                    item.action();
                  }
                  close();
                },
                ...propOverrides?.optionProps(),
              },
            },
            ListItem: {
              props: {
                ...propOverrides?.optionProps(),
              },
            },
          }}
        />
      )}
    >
      {children}
    </StatefulPopover>
  );
};
