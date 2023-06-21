import * as React from 'react';
import { withStyle } from 'baseui';
import { Option, Select, StyledDropdownListItem, Value } from 'baseui/select';
import { StyledList, StyledEmptyState, OptionListProps } from 'baseui/menu';
import { FixedSizeList } from 'react-window';
import { border, borderRadius, padding } from 'utils';
import { useTheme } from 'providers';
import { FixedSizeSelectProps } from './types';

const LIST_ITEM_HEIGHT = 42;
const EMPTY_LIST_HEIGHT = 72;
const MAX_LIST_HEIGHT = 200;

const ListItem = withStyle(StyledDropdownListItem, {
  paddingTop: 0,
  paddingBottom: 0,
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
  showSearch,
  selection,
  selectedIds,
  searchPlaceholder,
  isLoading,
  title,
  startEnhancer,
  size,
  isActive,
  onClear,
  hasValue,
  arrows,
}: FixedSizeSelectProps) => {
  const [value, setValue] = React.useState<Value>([]);

  const {
    theme: {
      current: {
        sizing: { scale0, scale200, scale300, scale400, scale500, scale600, scale800 },
        borders: { border100, border300, radius200 },
        colors,
        customColors,
        customSizing: { scale50, scale975 },
      },
    },
  } = useTheme();
  const { primaryB, borderTransparent, primary } = colors;
  const { dark1, dark3, dark4, light2, light3, light4, light7 } = customColors;

  return (
    <Select
      options={items.length ? items : defaultOptions}
      labelKey="id"
      valueKey="label"
      placeholder="Select"
      overrides={{
        Dropdown: { component: VirtualDropdown },
        Root: {
          style: {
            width: 'auto',
            height: '44px',
            paddingTop: '6px',
            paddingRight: '8px',
            backgroundColor: '#fff',
          },
        },
        ControlContainer: {
          style: {
            height: '38px',
            backgroundColor: '#fff',
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
            ...padding('0'),
            paddingTop: '6px',
            paddingLeft: '10px',
          },
        },
      }}
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
};
