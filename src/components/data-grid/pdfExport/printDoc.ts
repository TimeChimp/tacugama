import { ColumnApi, GridApi } from '@ag-grid-community/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { getDocDefinition } from './docDefinition';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const printDoc = (gridApi: GridApi, columnApi: ColumnApi) => {
  console.log('Exporting to PDF...');
  const docDefinition = getDocDefinition(gridApi, columnApi, {
    PDF_HEADER_COLOR: '#f8f8f8',
    PDF_INNER_BORDER_COLOR: '#dde2eb',
    PDF_OUTER_BORDER_COLOR: '#babfc7',
    PDF_LOGO:
      'https://raw.githubusercontent.com/AhmedAGadir/ag-grid-todo-list-react-typescript/master/src/assets/new-ag-grid-logo.png',
    PDF_PAGE_ORITENTATION: 'landscape',
    PDF_WITH_HEADER_IMAGE: false,
    PDF_WITH_FOOTER_PAGE_COUNT: true,
    PDF_HEADER_HEIGHT: 25,
    PDF_ROW_HEIGHT: 15,
    PDF_ODD_BKG_COLOR: '#fcfcfc',
    PDF_EVEN_BKG_COLOR: '#ffffff',
    PDF_WITH_CELL_FORMATTING: true,
    PDF_WITH_COLUMNS_AS_LINKS: true,
  });
  pdfMake.createPdf(docDefinition).download();
};
