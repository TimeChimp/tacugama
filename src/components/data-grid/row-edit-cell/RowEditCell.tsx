import React from 'react';
import { useTheme } from '../../../providers';
import { Button } from '../../button';
import { EditIcon } from '../../icons';
import { RowEditCellProps } from '../types';
import { KIND } from 'baseui/button';

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
      <Button kind={KIND.minimal}>
        {Icon ? <Icon size={scale500} color={contentTertiary} /> : <EditIcon size={scale500} color={contentTertiary} />}
      </Button>
    </div>
  );
};

export default RowEditCell;
