import React, { useMemo, useState } from 'react';
import { StatefulMenu } from '../menu';
import { StatefulPopover, Popover } from '../popover';
import { borderRadius, padding } from '../../utils';
import { StyledDropdownSearch, StyledDropdownFooter } from './styles';
import { SearchInput } from '../input';
import { useTheme } from '../../providers';
import { SIZE } from 'baseui/button';
import { Skeleton } from '../skeleton';
import { ListItem } from '../list';
import { DropdownItem, DropdownProps, DropdownStateLessProps } from './types';
import { DropdownOption } from './dropdown-option';

const NUMBER_OF_LOADING_ROWS = 4;

const DropdownBase = ({
  children,
  items = [],
  showSearch,
  searchPlaceholder,
  selection,
  selectedIds,
  footer,
  propOverrides,
  customOption,
  placement = 'bottomRight',
  isLoading = false,
  additionalProperties,
  customList: List,
  isStateLess,
  ...rest
}: (DropdownProps & { isStateLess: false }) | (DropdownStateLessProps & { isStateLess: true })) => {
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

  const dropdownItems = useMemo(
    () =>
      items
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
        })),
    [items, searchTerm, selectedIds, selection],
  );

  const renderContent = ({ close }: { close?: () => void }) => {
    return (
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
                      close?.();
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
    );
  };

  const overrides = {
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
  };

  if (isStateLess) {
    const { isOpen, onClose, onClick } = rest as DropdownStateLessProps;

    return (
      <Popover
        focusLock
        placement={placement}
        isOpen={isOpen}
        overrides={overrides}
        showArrow
        onClickOutside={() => onClose?.()}
        content={() => renderContent({ close: () => onClose?.() })}
        onClick={onClick}
      >
        {children}
      </Popover>
    );
  }
  const { onOpen, onClose } = rest as DropdownProps;
  return (
    <StatefulPopover
      focusLock
      placement={placement}
      onOpen={onOpen}
      onClose={onClose}
      overrides={overrides}
      showArrow
      content={renderContent}
    >
      {children}
    </StatefulPopover>
  );
};

export const Dropdown = (args: DropdownProps) => {
  return <DropdownBase {...args} isStateLess={false} />;
};

export const DropdownStateless = (args: DropdownStateLessProps) => {
  return <DropdownBase {...args} isStateLess />;
};
