import React, { useMemo, useRef, useState } from 'react';
import { useTheme } from '../../../providers';
import { RowActionsCellProps } from '../types';
import { Dropdown } from '../../dropdown';
import { Button } from '../../button';
import { ActionMenu, ActionMenuActive } from '../../icons';
import { RowEditCell } from '../row-edit-cell';
import { KIND } from 'baseui/button';

export const RowActionsCell = ({ data, ...props }: RowActionsCellProps) => {
  const { onEdit, items, id, icon, api } = data;
  const [active, setActive] = useState(false);
  const {
    theme: {
      current: {
        sizing: { scale500, scale900 },
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
    if (onEdit) {
      onEdit(data);
    }
  };

  const filteredItems = useMemo(() => {
    return items?.filter((item: any) => {
      if (item.filterConditions?.length) {
        return item.filterConditions?.every(({ value, name, comparator }: any) => {
          return comparator(value, name, data);
        });
      }

      return true;
    });
  }, [items, data]);

  return !onEdit ? (
    <div ref={containerRef}>
      <Dropdown
        onOpen={onOpen}
        onClose={() => setActive(false)}
        items={filteredItems}
        selectedIds={[id]}
        additionalProperties={api}
        {...props}
      >
        <Button kind={KIND.minimal} isTransparent height={scale900} type="button">
          {active ? <ActionMenuActive size={scale500} /> : <ActionMenu size={scale500} />}
        </Button>
      </Dropdown>
    </div>
  ) : (
    <RowEditCell onClick={handleEdit} icon={icon} />
  );
};

export default RowActionsCell;
