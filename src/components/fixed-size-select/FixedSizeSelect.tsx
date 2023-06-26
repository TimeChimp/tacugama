import React, { useEffect, useState } from 'react';
import { themedWithStyle } from '../../theme';
import { Option, Select, StyledDropdownListItem, Value } from 'baseui/select';
import { StyledList, StyledEmptyState, OptionListProps } from 'baseui/menu';
import { FixedSizeList } from 'react-window';
import { border, borderRadius, padding } from '../../utils';
import { useTheme } from '../../providers';
import { FixedSizeSelectProps } from './types';

const LIST_ITEM_HEIGHT = 42;
const EMPTY_LIST_HEIGHT = 72;
const MAX_LIST_HEIGHT = 200;

const ListItem = themedWithStyle(StyledDropdownListItem, {
  ...padding('0'),
  display: 'flex',
  alignItems: 'center',
});

const FixedSizeListItem = ({
  data,
  index,
  style,
}: {
  data: { props: OptionListProps }[];
  index: number;
  style: React.CSSProperties;
}) => {
  const { item, overrides, ...restChildProps } = data[index].props;
  return (
    <ListItem
      key={item.id}
      style={{
        boxSizing: 'border-box',
        ...style,
      }}
      {...restChildProps}
    >
      {item.id}
    </ListItem>
  );
};

const VirtualDropdown = React.forwardRef<HTMLUListElement, any>((props: any, ref) => {
  const children = React.Children.toArray(props.children);
  // @ts-expect-error typing issue
  if (!children[0] || !children[0].props.item) {
    return (
      <StyledList $style={{ height: EMPTY_LIST_HEIGHT + 'px' }} ref={ref}>
        {/* @ts-expect-error typing issue */}
        <StyledEmptyState {...children[0].props} />
      </StyledList>
    );
  }
  const height = Math.min(MAX_LIST_HEIGHT, children.length * LIST_ITEM_HEIGHT);
  return (
    <StyledList ref={ref}>
      <FixedSizeList
        width="100%"
        height={height}
        itemCount={children.length}
        // @ts-expect-error typing issue
        itemData={children}
        itemKey={(index: number, data: { props: OptionListProps }[]) => data[index].props.item.id}
        itemSize={LIST_ITEM_HEIGHT}
      >
        {FixedSizeListItem}
      </FixedSizeList>
    </StyledList>
  );
});

const defaultOptions: Option[] = [];
for (let i = 0; i < 10000; i += 1) {
  defaultOptions.push({
    id: i,
    label: '' + i,
  });
}

export const FixedSizeSelect = ({
  items,
  selection,
  selectedIds,
  searchPlaceholder,
}: // title,
// showSearch,
// isLoading,
// startEnhancer,
// size,
// isActive,
// onClear,
FixedSizeSelectProps) => {
  const [value, setValue] = useState<Value>([]);
  const [dropdownItems, setDropdownItems] = useState<any[]>([]);

  useEffect(() => {
    const dropDownItems = items
      .filter((x) => {
        if (x.filterConditions?.length && x.context) {
          return x.filterConditions?.every(({ value, name, comparator }: any) => {
            return comparator(value, name, x.context);
          });
        }

        // return !searchTerm || x.label?.toLowerCase().includes(searchTerm?.toLowerCase());
      })
      .map((x) => ({
        ...x,
        checkbox: selection,
        // @ts-expect-error typing issue
        isChecked: selectedIds && x.id ? selectedIds.includes(x.id) : false,
      }));

    setDropdownItems(dropDownItems);
  }, [items, selection, selectedIds]);

  const {
    theme: {
      current: {
        sizing: { scale200, scale300, scale400 },
        borders: { border300, radius200 },
        colors,
        customColors,
        customSizing: { scale975 },
      },
    },
  } = useTheme();
  const { primaryB } = colors;
  const { light2 } = customColors;

  return (
    <Select
      options={dropdownItems.length ? dropdownItems : defaultOptions}
      labelKey="id"
      valueKey="label"
      placeholder={searchPlaceholder || 'Select'}
      overrides={{
        Dropdown: { component: VirtualDropdown },
        Root: {
          style: {
            width: 'auto',
            height: '44px',
            ...padding(scale200, scale300, '0', '0'),
            backgroundColor: primaryB,
          },
        },
        ControlContainer: {
          style: {
            height: scale975,
            backgroundColor: primaryB,
            ...border({
              ...border300,
              borderColor: light2,
            }),
            ...borderRadius(radius200),
            ...padding('0'),
          },
        },
        ValueContainer: {
          style: {
            ...padding(scale200, '0', '0', scale400),
          },
        },
      }}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
};
