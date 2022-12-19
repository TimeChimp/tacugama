import React from 'react';
import { useTheme } from '../../../providers';
import { EditIcon } from '../../icons/edit';
import { Button } from '../../button';
import { RowEditCellProps } from '../types';
import { ButtonKind } from '../../../models';

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
      <Button buttonKind={ButtonKind.minimal}>
        {Icon ? <Icon size={scale500} color={contentTertiary} /> : <EditIcon size={scale500} color={contentTertiary} />}
      </Button>
    </div>
  );
};

export default RowEditCell;
