import React, { ReactElement } from 'react';
import { StyledList, StyledEmptyState, OptionListProps } from 'baseui/menu';
import { FixedSizeList } from 'react-window';
import { FixedSizeListItem } from './FixedSizeListItem';
import { borderRadius, padding } from '../../utils';

const LIST_ITEM_HEIGHT = 42;
const EMPTY_LIST_HEIGHT = 72;
const MAX_LIST_HEIGHT = 200;

export const VirtualScrollList = React.forwardRef<HTMLUListElement, any>((props: any, ref) => {
  const children = React.Children.toArray(props.children);

  const [firstChildren] = children as ReactElement[];

  if (!firstChildren || !firstChildren.props.item) {
    return (
      <StyledList $style={{ height: EMPTY_LIST_HEIGHT + 'px' }} ref={ref}>
        <StyledEmptyState {...firstChildren.props} />
      </StyledList>
    );
  }
  const height = Math.min(MAX_LIST_HEIGHT, children.length * LIST_ITEM_HEIGHT);
  return (
    <StyledList
      ref={ref}
      $style={{
        ...padding(),
        ...borderRadius('0'),
        paddingInlineStart: '0',
        boxShadow: 'none',
        outline: 'none',
        maxHeight: '300px',
      }}
    >
      <FixedSizeList
        width="100%"
        height={height}
        itemCount={children.length}
        itemData={children as ReactElement[]}
        itemKey={(index: number, data: { props: OptionListProps }[]) => data[index].props.item.id}
        itemSize={LIST_ITEM_HEIGHT}
      >
        {FixedSizeListItem}
      </FixedSizeList>
    </StyledList>
  );
});
