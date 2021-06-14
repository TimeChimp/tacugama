import React, { useEffect, useState } from 'react';
import TertiaryButton from '../button/TertiaryButton';
import useTheme from '../../providers/ThemeProvider';
import { StyledDataGridActions } from './styles';
import { Dropdown, DropdownItem } from '../dropdown';
import { ConfirmationModalType, DATA_TEST_ID } from '../../models';
import { DataGridActionsProps } from './types';
import { ConfirmationModal } from '../confirmation-modal';
import { TrashFull, Download } from '../icons';
import { padding } from '../../utils';
import { ValueFormatterParams } from '@ag-grid-community/core';
import { printDoc } from './pdfExport';

const DELETE_BUTTON_TEST_ID = 'delete-button';
const EXPORT_BUTTON_TEST_ID = 'export-button';
const DELETE_SUBMIT_BUTTON_TEST_ID = 'bulk-delete-confirmation-button';
const EXPORT_OPTIONS_TEST_ID = 'data-grid-export-options';
const EXPORT_OPTION_TEST_ID = 'data-grid-export-option';

export const DataGridActions = ({
  gridApi,
  gridColumnApi,
  columns,
  rowsSelected,
  onBulkDelete,
  translations: { cancel, deleteEntries, deleteEntriesCount },
  hideDownload,
}: DataGridActionsProps) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false);

  const {
    theme: {
      current: {
        colors: { contentStateDisabled, primaryA },
        sizing: { scale200, scale400, scale500, scale600 },
        customColors: { red3 },
      },
    },
  } = useTheme();

  const handleBulkDelete = async () => {
    if (onBulkDelete && gridApi) {
      const selectedRows = gridApi.getSelectedRows();
      if (selectedRows.length) {
        const selectedIds = selectedRows.map((row) => row.id);
        await onBulkDelete(selectedIds);
        gridApi.deselectAll();
      }
    }
  };

  useEffect(() => {
    if (gridApi && columns) {
      const dropdownItems: DropdownItem[] = [
        {
          label: 'Excel',
          action: () =>
            gridApi.exportDataAsExcel({
              onlySelectedAllPages: true,
              columnKeys: columns.map((column) => column.field),
              processCellCallback: (params) => {
                const colDef = params.column.getColDef();
                // try to reuse valueFormatter from the colDef
                if (colDef.valueFormatter && typeof colDef.valueFormatter === 'function') {
                  const valueFormatterParams: ValueFormatterParams = {
                    ...params,
                    data: params.node && params.node.data,
                    node: params.node!,
                    colDef,
                  };

                  return colDef.valueFormatter(valueFormatterParams);
                }
                return params.value;
              },
            }),
        },
        {
          label: 'Pdf',
          action: () => printDoc(gridApi, gridColumnApi),
        },
      ];
      setDropdownItems(dropdownItems);
    }
  }, [gridApi, gridColumnApi, columns]);

  return (
    <StyledDataGridActions>
      {!hideDownload && (
        <Dropdown
          items={dropdownItems}
          propOverrides={{
            listProps: () => ({ [DATA_TEST_ID]: EXPORT_OPTIONS_TEST_ID }),
            optionProps: () => ({ [DATA_TEST_ID]: EXPORT_OPTION_TEST_ID }),
          }}
        >
          <TertiaryButton disabled={!rowsSelected} testId={EXPORT_BUTTON_TEST_ID}>
            <Download size={scale600} color={rowsSelected ? primaryA : contentStateDisabled} />
          </TertiaryButton>
        </Dropdown>
      )}

      <TertiaryButton
        overrides={{
          Root: {
            style: {
              ...padding(scale400, scale200, scale400, scale500),
              ':hover': {
                backgroundColor: 'transparent',
              },
              ':active': {
                backgroundColor: 'transparent',
              },
              ':disabled': {
                backgroundColor: 'transparent',
              },
            },
          },
        }}
        disabled={!rowsSelected}
        onClick={() => setDeleteModalIsOpen(true)}
        testId={DELETE_BUTTON_TEST_ID}
      >
        <TrashFull color={rowsSelected ? red3 : contentStateDisabled} size={scale600} />
      </TertiaryButton>
      <ConfirmationModal
        title={deleteEntries}
        description={deleteEntriesCount(rowsSelected)}
        type={ConfirmationModalType.danger}
        isOpen={deleteModalIsOpen}
        setIsOpen={setDeleteModalIsOpen}
        submitLabel={deleteEntries}
        submitOnClick={handleBulkDelete}
        cancelLabel={cancel!}
        submitButtonTestId={DELETE_SUBMIT_BUTTON_TEST_ID}
      />
    </StyledDataGridActions>
  );
};

export default DataGridActions;
