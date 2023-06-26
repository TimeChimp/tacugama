import React, { useMemo, useRef, useState } from 'react';
import { useTheme } from '../../../providers';
import { RowActionsCellProps } from '../types';
import { Dropdown } from '../../dropdown';
import { MoreIcon } from '../../icons/more';
import { Button } from '../../button';
import { ButtonKind } from '../../../models';

export const RowActionsCell = ({ data, hideWithNoItems, ...props }: RowActionsCellProps) => {
  const { items, id, api } = data;
  const [active, setActive] = useState(false);
  const {
    theme: {
      current: {
        sizing: { scale650 },
        customColors: { dark1 },
        colors: { contentTertiary },
      },
    },
  } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const onOpen = () => {
    setActive(true);

    // Simulate click on ag-grid row to prevent current row not being selected when clicking directly on the action menu icon
    containerRef.current?.click();
  };

  const onClose = () => {
    setActive(false);
    // Deselect row when closing the menu
    api?.deselectAll();
  };

  const filteredItems = useMemo(() => {
    return items?.filter((item) => {
      if (item.filterConditions?.length) {
        return item.filterConditions?.every(({ value, name, comparator }) => {
          return comparator(value, name, data);
        });
      }

      return true;
    });
  }, [items, data]);

  const hide = useMemo(() => !filteredItems?.length && hideWithNoItems, [hideWithNoItems, filteredItems?.length]);

  return (
    <div ref={containerRef}>
      {!hide ? (
        <Dropdown
          onOpen={onOpen}
          onClose={onClose}
          items={filteredItems}
          selectedIds={[id]}
          additionalProperties={api}
          {...props}
        >
          <Button kind={ButtonKind.minimal} type="button">
            <MoreIcon color={active ? dark1 : contentTertiary} size={scale650} />
          </Button>
        </Dropdown>
      ) : null}
    </div>
  );
};

export default RowActionsCell;
