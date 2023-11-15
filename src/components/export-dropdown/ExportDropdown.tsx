import React, { useMemo } from 'react';
import { ActionButton } from '../action-button';
import { createCsvSavingHandler, createXlsxDownloadHandler } from '../../utils/export';
import { ExportDropdownProps } from './types';
import { ButtonKind } from '../../models';

export const ExportDropdown = ({
  exportToCsv,
  exportToExcel,
  rows,
  columns,
  label,
  actionButtonProps,
}: ExportDropdownProps) => {
  const options = useMemo(() => {
    const items = [];
    if (exportToExcel) {
      items.push({
        label: exportToExcel.label,
        id: exportToExcel.id ?? exportToExcel.label,
        action: createXlsxDownloadHandler({ rows, columns, fileName: exportToExcel.fileName ?? 'export' }),
      });
    }

    if (exportToCsv) {
      items.push({
        label: exportToCsv.label,
        id: exportToCsv.id ?? exportToCsv.label,
        action: createCsvSavingHandler({ rows, columns, fileName: exportToCsv.fileName ?? 'export' }),
      });
    }

    return items;
  }, [exportToExcel, exportToCsv, rows, columns]);

  return (
    <ActionButton
      options={options}
      selectedOption={{ label, id: label }}
      kind={ButtonKind.secondary}
      {...actionButtonProps}
    />
  );
};
