import React from 'react';
import { useTheme } from '../../../providers';
import { EditIcon } from '../../icons/edit';
import { Button, ButtonKind } from '../../button';
import { RowEditCellProps } from '../types';

export const RowEditCell = ({ onClick, icon: Icon }: RowEditCellProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500 },
        colors: { contentTertiary },
      },
    },
  } = useTheme();

  return (
    <div className="ag-row-edit-cell" onClick={onClick}>
      <Button kind={ButtonKind.Minimal}>
        {Icon ? <Icon size={scale500} color={contentTertiary} /> : <EditIcon size={scale500} color={contentTertiary} />}
      </Button>
    </div>
  );
};

export default RowEditCell;
