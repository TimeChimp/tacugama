import React, { useMemo, useRef, useState } from 'react';
import { useTheme } from '../../../providers';
import { RowActionsCellProps } from '../types';
import { Dropdown } from '../../dropdown';
import { Button } from '../../button';
import { ButtonKind } from '../../../models';
import { DotsThreeVertical } from '@phosphor-icons/react';
import { StyledRowActionsCell } from '../styles';

export const RowActionsCell = ({ data, hideWithNoItems, ...props }: RowActionsCellProps) => {
  const { items, id, api } = data;
  const [active, setActive] = useState(false);
  const {
    theme: {
      current: {
        sizing: { scale700 },
        customColors: { dark1, dark2 },
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
    <StyledRowActionsCell ref={containerRef}>
      {!hide ? (
        <Dropdown
          onOpen={onOpen}
          onClose={onClose}
          items={filteredItems}
          selectedIds={[id]}
          additionalProperties={api}
          {...props}
        >
          <Button kind={ButtonKind.minimal}>
            <DotsThreeVertical weight="bold" color={active ? dark1 : dark2} size={scale700} />
          </Button>
        </Dropdown>
      ) : null}
    </StyledRowActionsCell>
  );
};

export default RowActionsCell;
