import { Column, ColumnApi, GridApi, ValueFormatterParams } from '@ag-grid-community/core';
import { DEFAULT_PDF_HEADER_HEIGHT, DEFAULT_PDF_ROW_HEIGHT } from '../../../models';
import { Alignment, Margins, PdfHeaderCell, PdfTableCell, PrintParams, Translations } from '../types';

export const getDocDefinition = (
  gridApi: GridApi,
  columnApi: ColumnApi,
  printParams: PrintParams,
  translations: Translations,
) => {
  const {
    PDF_HEADER_COLOR,
    PDF_INNER_BORDER_COLOR,
    PDF_OUTER_BORDER_COLOR,
    PDF_ODD_BKG_COLOR,
    PDF_EVEN_BKG_COLOR,
    PDF_HEADER_HEIGHT = DEFAULT_PDF_HEADER_HEIGHT,
    PDF_ROW_HEIGHT = DEFAULT_PDF_ROW_HEIGHT,
    PDF_PAGE_ORIENTATION,
    PDF_WITH_HEADER_IMAGE,
    PDF_WITH_FOOTER_PAGE_COUNT,
    PDF_LOGO = '',
  } = printParams;

  return (() => {
    const columnGroupsToExport = getColumnGroupsToExport();

    const columnsToExport = getColumnsToExport();

    const widths = getExportedColumnsWidths(columnsToExport);

    const rowsToExport = getRowsToExport(columnsToExport);

    const body: PdfTableCell[][] = columnGroupsToExport
      ? [columnGroupsToExport, columnsToExport, ...rowsToExport]
      : [columnsToExport, ...rowsToExport];

    const headerRows = columnGroupsToExport ? 2 : 1;

    const header = PDF_WITH_HEADER_IMAGE
      ? {
          image: 'ag-grid-logo',
          width: 150,
          alignment: 'center' as Alignment,
          margin: [0, 10, 0, 10] as Margins,
        }
      : undefined;

    const getFooter = PDF_WITH_FOOTER_PAGE_COUNT
      ? (currentPage: number, pageCount: number) => {
          const footer = {
            text: translations.paginationOutOfLong(currentPage, pageCount),
            margin: [20, 20, 20, 20] as Margins,
            tocItem: true,
          };
          return footer;
        }
      : undefined;

    const pageMargins: Margins = [10, PDF_WITH_HEADER_IMAGE ? 70 : 20, 10, PDF_WITH_FOOTER_PAGE_COUNT ? 40 : 10];

    const getHeights = (rowIndex: number) => (rowIndex < headerRows ? PDF_HEADER_HEIGHT : PDF_ROW_HEIGHT);

    const getFillColor = (rowIndex: number, node: any) => {
      if (rowIndex < node.table.headerRows) {
        return PDF_HEADER_COLOR;
      }
      return rowIndex % 2 === 0 ? PDF_ODD_BKG_COLOR : PDF_EVEN_BKG_COLOR;
    };

    const getHLineWidth = (i: number, node: any) => (i === 0 || i === node.table.body.length ? 1 : 1);

    const getVLineWidth = (i: number, node: any) => (i === 0 || i === node.table.widths.length ? 1 : 0);

    const getHLineColor = (i: number, node: any) =>
      i === 0 || i === node.table.body.length ? PDF_OUTER_BORDER_COLOR : PDF_INNER_BORDER_COLOR;

    const getVLineColor = (i: number, node: any) =>
      i === 0 || i === node.table.widths.length ? PDF_OUTER_BORDER_COLOR : PDF_INNER_BORDER_COLOR;

    const docDefinition = {
      pageOrientation: PDF_PAGE_ORIENTATION,
      header,
      footer: getFooter,
      content: [
        {
          style: 'myTable',
          table: {
            headerRows,
            widths,
            body,
            heights: getHeights,
          },
          layout: {
            fillColor: getFillColor,
            hLineWidth: getHLineWidth,
            vLineWidth: getVLineWidth,
            hLineColor: getHLineColor,
            vLineColor: getVLineColor,
          },
        },
      ],
      images: {
        'ag-grid-logo': PDF_LOGO,
      },
      styles: {
        myTable: {
          margin: [0, 0, 0, 0] as Margins,
        },
        tableHeader: {
          bold: true,
          margin: [0, PDF_HEADER_HEIGHT / 3, 0, 0] as Margins,
        },
      },
      pageMargins,
    };

    return docDefinition;
  })();

  function getColumnGroupsToExport() {
    const displayedColumnGroups = columnApi.getAllDisplayedColumnGroups();

    // eslint-disable-next-line no-prototype-builtins
    const isColumnGrouping = displayedColumnGroups?.some((col) => col.hasOwnProperty('children'));

    if (!isColumnGrouping) {
      return null;
    }

    const columnGroupsToExport: PdfHeaderCell[] = [];

    displayedColumnGroups?.forEach((colGroup: any) => {
      const isColSpanning = colGroup.children.length > 1;
      let numberOfEmptyHeaderCellsToAdd = 0;

      if (isColSpanning) {
        const headerCell = createHeaderCell(colGroup);
        columnGroupsToExport.push(headerCell);
        // subtract 1 as the column group counts as a header
        numberOfEmptyHeaderCellsToAdd--;
      }

      // add an empty header cell now for every column being spanned
      colGroup.displayedChildren.forEach(() => {
        numberOfEmptyHeaderCellsToAdd++;
      });

      for (let i = 0; i < numberOfEmptyHeaderCellsToAdd; i++) {
        columnGroupsToExport.push({ colId: null });
      }
    });

    return columnGroupsToExport;
  }

  function getColumnsToExport() {
    const columnsToExport: PdfHeaderCell[] = [];

    columnApi.getAllDisplayedColumns().forEach((col) => {
      const colDef = col.getColDef();

      if (!colDef.field) {
        return;
      }

      const headerCell = createHeaderCell(col);

      columnsToExport.push(headerCell);
    });

    return columnsToExport;
  }

  function getRowsToExport(columnsToExport: PdfHeaderCell[]) {
    const rowsToExport: PdfTableCell[][] = [];

    const selectedRows = gridApi.getSelectedNodes();

    // Sort the selected rows by the order they appear in the grid
    selectedRows.sort((a, b) => {
      if (a.rowIndex === null || b.rowIndex === null) {
        return 0;
      }
      return a.rowIndex - b.rowIndex;
    });

    selectedRows.forEach((node) => {
      if (!node.id) {
        return;
      }
      const rowToExport = columnsToExport.map((column) => {
        if (!column) {
          return createTableCell('');
        }
        let cellValue = '';

        if (column.colDef) {
          if (column.colDef.field) {
            cellValue = node.data[column?.colDef.field];
          }
          const valueFormatterParams: ValueFormatterParams = {
            api: gridApi,
            columnApi,
            column: column as unknown as Column,
            node: gridApi.getRowNode(node.id!)!,
            data: node,
            colDef: column.colDef,
            value: cellValue,
            context: undefined,
          };

          if (column.colDef.valueFormatter) {
            cellValue =
              (column?.valueFormatter &&
                typeof column.valueFormatter !== 'string' &&
                column?.valueFormatter(valueFormatterParams)) ||
              '';
          }
        }

        const tableCell = createTableCell(cellValue);
        return tableCell;
      });

      rowsToExport.push(rowToExport.filter((cell) => cell !== null) as PdfTableCell[]);
    });

    return rowsToExport;
  }

  function getExportedColumnsWidths(columnsToExport: PdfHeaderCell[]) {
    return columnsToExport.map(() => 100 / columnsToExport.length + '%');
  }

  function createHeaderCell(col: any) {
    const headerCell: PdfHeaderCell = {
      colId: null,
    };

    // eslint-disable-next-line no-prototype-builtins
    const isColGroup = col.hasOwnProperty('children');

    if (isColGroup) {
      headerCell.text = col.originalColumnGroup.colGroupDef.headerName;
      headerCell.colSpan = col.children.length;
      headerCell.colId = col.groupId;
    } else {
      let headerName = col.colDef.headerName;

      if (col.sort) {
        headerName += ` (${col.sort})`;
      }

      headerCell.text = headerName;
      headerCell.colId = col.getColId();
    }

    headerCell.style = 'tableHeader';

    // try to reuse valueFormatter from the colDef
    const colDef = col.getColDef();
    if (colDef.valueFormatter && typeof colDef.valueFormatter === 'function') {
      headerCell.valueFormatter = colDef.valueFormatter;
      headerCell.colDef = colDef;
    }

    return headerCell;
  }

  function createTableCell(cellValue: string) {
    const tableCell: PdfTableCell = {
      text: cellValue !== undefined ? cellValue : '',
      style: 'tableCell',
    };

    return tableCell;
  }
};
