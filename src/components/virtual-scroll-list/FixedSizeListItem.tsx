import React from 'react';
import { OptionListProps } from 'baseui/menu';
import { DropdownOption } from '../dropdown';
import { ListItem } from './styles';

export const FixedSizeListItem = ({
  data,
  index,
  style,
}: {
  data: { props: OptionListProps }[];
  index: number;
  style: React.CSSProperties;
}) => {
  const { item, ...restChildProps } = data[index].props;
  return (
    <ListItem
      key={item.id}
      style={{
        boxSizing: 'border-box',
        ...style,
      }}
      {...restChildProps}
    >
      <DropdownOption item={item} onItemSelect={item.action} />
    </ListItem>
  );
};
