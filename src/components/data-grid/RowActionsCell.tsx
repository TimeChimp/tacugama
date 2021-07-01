import React, { useMemo, useRef, useState } from 'react';
import { useTheme } from '../../providers';
import { RowActionsCellProps } from './types';
import { Dropdown } from '../dropdown';
import { TertiaryButton } from '../button';
import { ActionMenu, ActionMenuActive } from '../icons';
import { RowEditCell } from './RowEditCell';

export const RowActionsCell = ({ data }: RowActionsCellProps) => {
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

  const onEdit = () => {
    data.onEdit(data);
  };

  const formattedItems = useMemo(
    () => data.items.filter((item) => (item.role && data.role ? item.role === data.role : true)),
    [data.items, data.role],
  );
  return !!data.onEdit ? (
    <RowEditCell onClick={onEdit} />
  ) : (
    <div ref={containerRef}>
      <Dropdown onOpen={onOpen} onClose={() => setActive(false)} items={formattedItems}>
        <TertiaryButton>
          {active ? <ActionMenuActive size={scale500} /> : <ActionMenu size={scale500} />}
        </TertiaryButton>
      </Dropdown>
    </div>
  );
};

export default RowActionsCell;
