import React, { useEffect, useState } from 'react';
import { TertiaryButton } from '../button';
import { useTheme } from '../../providers';
import { StyledDataGridActions } from './styles';
import { Dropdown, DropdownItem } from '../dropdown';
import { DATA_TEST_ID } from '../../models';
import { DataGridActionsProps } from './types';
import { TrashFull, Download } from '../icons';
import { FlexItem } from '../flex-item';
import { exportExcel, exportPdf } from './export';
import { ParagraphSmall } from '../typography';

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
        colors: { primaryA },
        sizing: { scale300, scale400, scale500 },
        customColors: { red3, dark4 },
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
      {!hideDelete && onBulkDelete ? (
        <>
          <TertiaryButton disabled={!rowsSelected} onClick={() => onBulkDelete()} testId={DELETE_BUTTON_TEST_ID}>
            <TrashFull color={rowsSelected ? red3 : dark4} size={scale500} />
            <ParagraphSmall color={rowsSelected ? red3 : dark4} paddingLeft={scale400}>
              {translations.delete}
            </ParagraphSmall>
          </TertiaryButton>
        </>
      ) : null}
      <FlexItem marg4={scale300}>
        {!hideDownload && (
          <Dropdown
            items={dropdownItems}
            propOverrides={{
              listProps: () => ({ [DATA_TEST_ID]: EXPORT_OPTIONS_TEST_ID }),
              optionProps: () => ({ [DATA_TEST_ID]: EXPORT_OPTION_TEST_ID }),
            }}
          >
            <TertiaryButton disabled={!rowsSelected} testId={EXPORT_BUTTON_TEST_ID}>
              <Download size={scale500} color={rowsSelected ? primaryA : dark4} />
              <ParagraphSmall color={rowsSelected ? primaryA : dark4} paddingLeft={scale400}>
                {translations.export}
              </ParagraphSmall>
            </TertiaryButton>
          </Dropdown>
        )}
      </FlexItem>
    </StyledDataGridActions>
  );
};

export default DataGridActions;
