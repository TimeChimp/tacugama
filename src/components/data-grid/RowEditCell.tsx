import React from 'react';
import { useTheme } from '../../providers';
import { Pencil } from '../icons';
import { TertiaryButton } from '../button';
import { RowEditCellProps } from './types';

export const RowEditCell = ({ onClick }: RowEditCellProps) => {
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
      <TertiaryButton>
        <Pencil size={scale500} color={contentTertiary} />
      </TertiaryButton>
    </div>
  );
};

export default RowEditCell;
