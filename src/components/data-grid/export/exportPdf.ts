import { ColumnApi, GridApi } from '@ag-grid-community/core';
import { DEFAULT_PDF_HEADER_HEIGHT, DEFAULT_PDF_ROW_HEIGHT } from '../../../models';
import { customColors, lightColors } from '../../../theme/colors';
import { Translations } from '../types';

import { getDocDefinition } from './docDefinition';
import { generateFilename } from '../../../utils';

export const exportPdf = async (
  gridApi: GridApi,
  columnApi: ColumnApi,
  translations: Translations,
  fileName?: string,
) => {
  const pdfMake = await import('pdfmake/build/pdfmake.min');
  const pdfFonts = await import('pdfmake/build/vfs_fonts');

  const fonts = pdfFonts.pdfMake.vfs;
  pdfMake.vfs = fonts;

  const docDefinition = getDocDefinition(
    gridApi,
    columnApi,
    {
      PDF_HEADER_COLOR: customColors.primarySubtle,
      PDF_INNER_BORDER_COLOR: lightColors.contentInverseSecondary,
      PDF_OUTER_BORDER_COLOR: lightColors.contentInverseSecondary,
      PDF_PAGE_ORIENTATION: 'landscape',
      PDF_WITH_HEADER_IMAGE: false,
      PDF_WITH_FOOTER_PAGE_COUNT: true,
      PDF_HEADER_HEIGHT: DEFAULT_PDF_HEADER_HEIGHT,
      PDF_ROW_HEIGHT: DEFAULT_PDF_ROW_HEIGHT,
      PDF_ODD_BKG_COLOR: customColors.primarySubtle,
      PDF_EVEN_BKG_COLOR: lightColors.primaryB,
      PDF_WITH_CELL_FORMATTING: true,
      PDF_WITH_COLUMNS_AS_LINKS: true,
    },
    translations,
  );

  pdfMake.createPdf(docDefinition, undefined, undefined, fonts).download(fileName ?? generateFilename(gridApi));
};
