import React, { useEffect, useState } from 'react';
import { TertiaryButton } from '../button';
import { useTheme } from '../../providers';
import { StyledDataGridActions } from './styles';
import { Dropdown, DropdownItem } from '../dropdown';
import { DATA_TEST_ID } from '../../models';
import { DataGridActionsProps } from './types';
import { TrashFull, Download } from '../icons';
import { padding } from '../../utils';
import { exportExcel, exportPdf } from './export';

const DELETE_BUTTON_TEST_ID = 'delete-button';
const EXPORT_BUTTON_TEST_ID = 'export-button';
const EXPORT_OPTIONS_TEST_ID = 'data-grid-export-options';
const EXPORT_OPTION_TEST_ID = 'data-grid-export-option';

export const DataGridActions = ({
  gridApi,
  gridColumnApi,
  columns,
  rowsSelected,
  onBulkDelete,
  translations,
  hideDownload,
  hideDelete,
}: DataGridActionsProps) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);

  const {
    theme: {
      current: {
        colors: { contentStateDisabled, primaryA },
        sizing: { scale200, scale400, scale500, scale600 },
        customColors: { red3 },
      },
    },
  } = useTheme();

  useEffect(() => {
    if (gridApi && columns) {
      const dropdownItems: DropdownItem[] = [
        {
          label: 'Excel',
          action: () => exportExcel(gridApi, columns),
        },
        {
          label: 'Pdf',
          action: () => exportPdf(gridApi, gridColumnApi, translations),
        },
      ];
      setDropdownItems(dropdownItems);
    }
  }, [gridApi, gridColumnApi, columns, translations]);

  if (hideDownload && hideDelete) {
    return null;
  }

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

      {!hideDelete && onBulkDelete ? (
        <>
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
            onClick={() => onBulkDelete()}
            testId={DELETE_BUTTON_TEST_ID}
          >
            <TrashFull color={rowsSelected ? red3 : contentStateDisabled} size={scale600} />
          </TertiaryButton>
        </>
      ) : null}
    </StyledDataGridActions>
  );
};

export default DataGridActions;
