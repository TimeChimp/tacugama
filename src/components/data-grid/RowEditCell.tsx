import React from 'react';
import { useTheme } from '../../providers';
import { Pencil } from '../icons';
import { TertiaryButton } from '../button';
import { RowEditCellProps } from './types';

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
      <TertiaryButton>
        {Icon?(<Icon size={scale500} color={contentTertiary} />):(<Pencil size={scale500} color={contentTertiary} />)}
      </TertiaryButton>
    </div>
  );
};

export default RowEditCell;
