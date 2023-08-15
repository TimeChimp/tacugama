import React, { useEffect, useState } from 'react';
import { StatefulMenu } from '../menu';
import { StatefulPopover } from '../popover';
import { borderRadius, padding } from '../../utils';
import { StyledDropdownSearch, StyledDropdownFooter } from './styles';
import { SearchInput } from '../input';
import { useTheme } from '../../providers';
import { SIZE } from 'baseui/button';
import { Skeleton } from '../skeleton';
import { ListItem } from '../list';
import { DropdownItem, DropdownProps } from './types';
import { DropdownOption } from './dropdown-option';

const NUMBER_OF_LOADING_ROWS = 4;

export const Dropdown = ({
  children,
  items = [],
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
  additionalProperties,
  customList: List,
}: DropdownProps) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>();

  const {
    theme: {
      current: {
        sizing: { scale700, scale1000 },
        lighting: { shadow600 },
        borders: { radius200 },
        colors: { primaryB },
      },
    },
  } = useTheme();

  useEffect(() => {
    const dropDownItems = items
      .filter((x) => {
        if (x.filterConditions?.length && x.context) {
          return x.filterConditions?.every(({ value, name, comparator }) => {
            return comparator(value, name, x.context);
          });
        }

        return !searchTerm || x.label?.toLowerCase().includes(searchTerm?.toLowerCase().trim());
      })
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
        Arrow: {
          style: {
            backgroundColor: primaryB,
          },
        },
      }}
      showArrow
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
                  Content: {
                    style: { borderColor: 'transparent' },
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
                  component: List,
                  style: {
                    ...padding(),
                    ...borderRadius(showSearch ? '0' : radius200),
                    paddingInlineStart: '0',
                    boxShadow: 'none',
                    outline: 'none',
                    maxHeight: '300px',
                  },
                  props: {
                    ...propOverrides?.listProps?.(),
                  },
                },
                Option: {
                  component: customOption || DropdownOption,
                  props: {
                    onItemSelect: (item: DropdownItem) => {
                      if (item.action) {
                        item.action(selectedIds, additionalProperties);
                      }
                      if (!selection) {
                        close();
                      }
                    },
                    ...propOverrides?.optionProps?.(),
                  },
                },
                ListItem: {
                  props: {
                    ...propOverrides?.optionProps?.(),
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
