import React, { useRef } from 'react';
import { useTheme } from '../../providers';
import { Pencil } from '../icons';
import { TertiaryButton } from '../button';
import { RowEditCellProps } from './types';

export const RowEditCell = ({ onRowEdit }: RowEditCellProps) => {
  const {
    theme: {
      current: {
        sizing: { scale500 },
        colors: { contentTertiary },
      },
    },
  } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const onButtonClick = () => {
    // Simulate click on ag-grid row to prevent current row not being selected when clicking directly on the action menu icon
    containerRef.current?.click();
    onRowEdit();
  };

  return (
    <div className="ag-row-edit-cell" ref={containerRef} onClick={onButtonClick}>
      <TertiaryButton>
        <Pencil size={scale500} color={contentTertiary} />
      </TertiaryButton>
    </div>
  );
};

export default RowEditCell;
