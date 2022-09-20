import React, { useEffect, useState } from 'react';
import { StatefulMenu } from '../menu';
import { StatefulPopover } from '../popover';
import { DropdownItem, DropdownOption } from './DropdownOption';
import { TetherPlacement } from 'baseui/layer';
import { padding } from '../../utils';
import { StyledDropdownSearch, StyledDropdownFooter } from './StyledDropdownOption';
import { SearchInput } from '../input/SearchInput';
import useTheme from '../../providers/ThemeProvider';
import { SIZE } from 'baseui/button';
import { Skeleton } from '../skeleton';
import { ListItem } from '../list';

const NUMBER_OF_LOADING_ROWS = 4;

export interface DropdownProps {
  children?: React.ReactNode;
  items: DropdownItem[];
  placement?: TetherPlacement[keyof TetherPlacement];
  showSearch?: boolean;
  searchPlaceholder?: string;
  onClose?: () => any;
  onOpen?: () => any;
  selection?: boolean;
  selectedIds?: Array<string>;
  footer?: JSX.Element;
  customOption?: React.ForwardRefExoticComponent<any & React.RefAttributes<any>>;
  propOverrides?: {
    listProps: () => {};
    optionProps: () => {};
  };
  isLoading?: boolean;
}

export const Dropdown = ({
  children,
  items,
  showSearch,
  searchPlaceholder,
  onOpen,
  onClose,
  selection,
  selectedIds,
  footer,
  propOverrides,
  customOption,
  placement = 'bottomRight',
  isLoading = false,
}: DropdownProps) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  const {
    theme: {
      current: {
        sizing: { scale700, scale1000 },
        lighting: { shadow600 },
      },
    },
  } = useTheme();

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
      overrides={{
        Body: {
          style: {
            boxShadow: shadow600,
            zIndex: 1001,
            ...propOverrides?.bodyProps?.(),
          },
        },
      }}
      content={({ close }) => (
        <>
          {showSearch && (
            <StyledDropdownSearch>
              <SearchInput
                size={SIZE.compact}
                placeholder={searchPlaceholder}
                onChange={(event) => setSearchTerm(event.currentTarget.value)}
                value={searchTerm}
              />
            </StyledDropdownSearch>
          )}
          {isLoading ? (
            Array.from(Array(NUMBER_OF_LOADING_ROWS)).map(() => (
              <ListItem
                overrides={{
                  Root: {
                    style: {
                      height: scale1000,
                    },
                  },
                }}
              >
                <Skeleton width="100%" height={scale700} animation />
              </ListItem>
            ))
          ) : (
            <StatefulMenu
              items={dropdownItems}
              overrides={{
                List: {
                  style: {
                    ...padding(),
                    paddingInlineStart: '0',
                    boxShadow: 'none',
                    outline: 'none',
                    maxHeight: '300px',
                  },
                  props: {
                    ...propOverrides?.listProps(),
                  },
                },
                Option: {
                  component: customOption || DropdownOption,
                  props: {
                    onItemSelect: (item: DropdownItem) => {
                      if (item.action) {
                        item.action();
                      }
                      if (!selection) {
                        close();
                      }
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
          {footer && <StyledDropdownFooter>{footer}</StyledDropdownFooter>}
        </>
      )}
    >
      {children}
    </StatefulPopover>
  );
};
