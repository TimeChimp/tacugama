import React, { useEffect, useState } from 'react';
import { Button } from '../button';
import { useTheme } from '../../providers';
import { StyledDataGridActions } from './styles';
import { Dropdown, DropdownItem } from '../dropdown';
import { DATA_TEST_ID, ButtonKind, ButtonType } from '../../models';
import { DataGridActionsProps } from './types';
import { FlexItem } from '../flex-item';
import { exportExcel, exportPdf, exportCSV } from './export';
import { ParagraphSmall } from '../typography';
import { StatefulTooltip } from '../tooltip';

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
  hasGrouping,
  exportFileName,
}: DataGridActionsProps) => {
  const [dropdownItems, setDropdownItems] = useState<DropdownItem[]>([]);

  const {
    theme: {
      current: {
        colors: { primaryA, white },
        sizing: { scale300 },
        customSizing: { scale4250 },
        customColors: { dark4 },
      },
    },
  } = useTheme();

  useEffect(() => {
    if (gridApi && columns) {
      const dropdownItems: DropdownItem[] = [
        {
          label: 'Excel',
          action: () => exportExcel(gridApi, columns, exportFileName),
        },
        {
          label: 'CSV',
          action: () => exportCSV(gridApi, columns, exportFileName),
        },
        {
          label: 'Pdf',
          action: () => exportPdf(gridApi, gridColumnApi, translations, exportFileName),
        },
      ];
      setDropdownItems(dropdownItems);
    }
  }, [gridApi, gridColumnApi, columns, translations]);

  if (hideDownload && hideDelete) {
    return null;
  }

  const getTooltipText = () => {
    if (hasGrouping) {
      return translations.exportTooltipGrouping;
    }
    if (!rowsSelected) {
      return translations.exportTooltipNoSelection;
    }
    return '';
  };

  return (
    <StyledDataGridActions>
      {!hideDelete && onBulkDelete ? (
        <>
          <Button
            buttonType={ButtonType.error}
            kind={ButtonKind.quarternary}
            disabled={!rowsSelected}
            onClick={() => onBulkDelete()}
            testId={DELETE_BUTTON_TEST_ID}
          >
            <ParagraphSmall color={rowsSelected ? white : dark4}>{translations.delete}</ParagraphSmall>
          </Button>
        </>
      ) : null}
      <FlexItem marg4={!hideDelete && onBulkDelete ? scale300 : '0px'}>
        {!hideDownload && (
          <Dropdown
            items={dropdownItems}
            propOverrides={{
              listProps: () => ({ [DATA_TEST_ID]: EXPORT_OPTIONS_TEST_ID }),
              optionProps: () => ({ [DATA_TEST_ID]: EXPORT_OPTION_TEST_ID }),
            }}
          >
            <Button kind={ButtonKind.tertiary} disabled={!rowsSelected} testId={EXPORT_BUTTON_TEST_ID}>
              <StatefulTooltip
                content={getTooltipText()}
                showArrow={true}
                placement="top"
                overrides={{
                  Body: {
                    style: {
                      width: scale4250,
                    },
                  },
                }}
              >
                <ParagraphSmall color={rowsSelected ? primaryA : dark4}>{translations.export}</ParagraphSmall>
              </StatefulTooltip>
            </Button>
          </Dropdown>
        )}
      </FlexItem>
    </StyledDataGridActions>
  );
};

export default DataGridActions;
