import React, { useMemo, useRef, useState } from 'react';
import { useTheme } from '../../providers';
import { RowActionsCellProps } from './types';
import { Dropdown } from '../dropdown';
import { TertiaryButton } from '../button';
import { ActionMenu, ActionMenuActive } from '../icons';
import { RowEditCell } from './RowEditCell';

export const RowActionsCell = ({ data }: RowActionsCellProps) => {
  const { onEdit, items } = data;
  const [active, setActive] = useState(false);
  const {
    theme: {
      current: {
        sizing: { scale500 },
      },
    },
  } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const onOpen = () => {
    setActive(true);

    // Simulate click on ag-grid row to prevent current row not being selected when clicking directly on the action menu icon
    containerRef.current?.click();
  };

  const handleEdit = () => {
    onEdit(data);
  };

  const filteredItems = useMemo(() => {
    return items.filter((item: any) => {
      const check = item.filterConditions?.every(({ value, name, comparator }: any) => {
        return comparator(value, name, data);
      });

      return check;
    });
  }, [items, data]);

  return !!onEdit ? (
    <RowEditCell onClick={handleEdit} />
  ) : (
    <div ref={containerRef}>
      <Dropdown onOpen={onOpen} onClose={() => setActive(false)} items={filteredItems}>
        <TertiaryButton>
          {active ? <ActionMenuActive size={scale500} /> : <ActionMenu size={scale500} />}
        </TertiaryButton>
      </Dropdown>
    </div>
  );
};

export default RowActionsCell;
