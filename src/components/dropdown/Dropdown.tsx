import React, { useEffect, useState } from 'react';
import { StatefulMenu } from '../menu';
import { StatefulPopover } from '../popover';
import { DropdownItem, DropdownOption } from './DropdownOption';
import { TetherPlacement } from 'baseui/layer';
import { padding } from '../../utils';
import { Input } from '../input/Input';
import { StyledDropdownSearch } from './StyledDropdownOption';
import { SearchInput } from '../input/SearchInput';

export interface DropdownProps {
  children?: React.ReactNode;
  items: DropdownItem[];
  placement?: TetherPlacement[keyof TetherPlacement];
  showSearch?: boolean;
  onClose?: () => any;
  onOpen?: () => any;
  selection?: boolean;
  selectedIds?: Array<string>;
  propOverrides?: {
    listProps: () => {};
    optionProps: () => {};
  };
}

export const Dropdown = ({
  children,
  items,
  placement = 'bottomRight',
  showSearch,
  onOpen,
  onClose,
  selection,
  selectedIds,
  propOverrides,
}: DropdownProps) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  useEffect(() => {
    const dropDownItems = items
      .filter((x) => !searchTerm || x.label.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((x) => ({
        ...x,
        checkbox: selection,
        isChecked: selectedIds && x.id ? selectedIds.includes(x.id) : false,
      }));

    setDropdownItems(dropDownItems);
  }, [items, selection, selectedIds, searchTerm]);

  return (
    <StatefulPopover
      focusLock
      placement={placement}
      onOpen={onOpen}
      onClose={onClose}
      content={({ close }) => (
        <>
          {showSearch && (
            <StyledDropdownSearch>
              <SearchInput placeholder="Search" onChange={(event) => setSearchTerm(event.currentTarget.value)} />
            </StyledDropdownSearch>
          )}
          <StatefulMenu
            items={dropdownItems}
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
        </>
      )}
    >
      {children}
    </StatefulPopover>
  );
};
