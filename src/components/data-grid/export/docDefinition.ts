import { ColumnApi, GridApi, ValueFormatterParams } from '@ag-grid-community/core';
import { Content, Margins, TDocumentDefinitions } from 'pdfmake/interfaces';
import { PdfHeaderCell, PdfTableCell, PrintParams } from '../types';

export const getDocDefinition = (gridApi: GridApi, columnApi: ColumnApi, printParams: PrintParams) => {
  const {
    PDF_HEADER_COLOR,
    PDF_INNER_BORDER_COLOR,
    PDF_OUTER_BORDER_COLOR,
    PDF_ODD_BKG_COLOR,
    PDF_EVEN_BKG_COLOR,
    PDF_HEADER_HEIGHT = 25,
    PDF_ROW_HEIGHT = 15,
    PDF_PAGE_ORIENTATION,
    PDF_WITH_HEADER_IMAGE,
    PDF_WITH_FOOTER_PAGE_COUNT,
    PDF_LOGO = '',
  } = printParams;

  return (function () {
    const columnGroupsToExport = getColumnGroupsToExport();

    const columnsToExport = getColumnsToExport();

    const widths = getExportedColumnsWidths(columnsToExport);

    const rowsToExport = getRowsToExport(columnsToExport);

    const body = columnGroupsToExport
      ? [columnGroupsToExport, columnsToExport, ...rowsToExport]
      : [columnsToExport, ...rowsToExport];

    const headerRows = columnGroupsToExport ? 2 : 1;

    const header = PDF_WITH_HEADER_IMAGE
      ? ({
          image: 'ag-grid-logo',
          width: 150,
          alignment: 'center',
          margin: [0, 10, 0, 10],
        } as Content)
      : undefined;

    const footer = PDF_WITH_FOOTER_PAGE_COUNT
      ? function (currentPage: number, pageCount: number) {
          const footer: Content = {
            text: currentPage.toString() + ' of ' + pageCount,
            margin: [20, 20, 20, 20],
          };
          return footer;
        }
      : undefined;

    const pageMargins: Margins = [10, PDF_WITH_HEADER_IMAGE ? 70 : 20, 10, PDF_WITH_FOOTER_PAGE_COUNT ? 40 : 10];

    const heights = (rowIndex: number) => (rowIndex < headerRows ? PDF_HEADER_HEIGHT : PDF_ROW_HEIGHT);

    const fillColor = (rowIndex: number, node: any) => {
      if (rowIndex < node.table.headerRows) {
        return PDF_HEADER_COLOR;
      }
      return rowIndex % 2 === 0 ? PDF_ODD_BKG_COLOR : PDF_EVEN_BKG_COLOR;
    };

    const hLineWidth = (i: number, node: any) => (i === 0 || i === node.table.body.length ? 1 : 1);

    const vLineWidth = (i: number, node: any) => (i === 0 || i === node.table.widths.length ? 1 : 0);

    const hLineColor = (i: number, node: any) =>
      i === 0 || i === node.table.body.length ? PDF_OUTER_BORDER_COLOR : PDF_INNER_BORDER_COLOR;

    const vLineColor = (i: number, node: any) =>
      i === 0 || i === node.table.widths.length ? PDF_OUTER_BORDER_COLOR : PDF_INNER_BORDER_COLOR;

    const docDefinition: TDocumentDefinitions = {
      pageOrientation: PDF_PAGE_ORIENTATION,
      header,
      footer,
      content: [
        {
          style: 'myTable',
          table: {
            headerRows,
            widths,
            body,
            heights,
          },
          layout: {
            fillColor,
            hLineWidth,
            vLineWidth,
            hLineColor,
            vLineColor,
          },
        },
      ],
      images: {
        'ag-grid-logo': PDF_LOGO,
      },
      styles: {
        myTable: {
          margin: [0, 0, 0, 0],
        },
        tableHeader: {
          bold: true,
          margin: [0, PDF_HEADER_HEIGHT / 3, 0, 0],
        },
      },
      pageMargins,
    };

    return docDefinition;
  })();

  function getColumnGroupsToExport() {
    const displayedColumnGroups = columnApi.getAllDisplayedColumnGroups();

    const isColumnGrouping = displayedColumnGroups?.some((col) => col.hasOwnProperty('children'));

    if (!isColumnGrouping) {
      return null;
    }

    const columnGroupsToExport: any[] = [];

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
        columnGroupsToExport.push({});
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

  function getRowsToExport(columnsToExport: any[]) {
    const rowsToExport: any[] = [];

    const selectedRows = gridApi.getSelectedRows();

    selectedRows.forEach((node) => {
      const rowToExport = columnsToExport.map((column: any) => {
        let cellValue = node[column.colId];

        if (!!column.colDef) {
          const valueFormatterParams: ValueFormatterParams = {
            api: gridApi,
            columnApi,
            column,
            node: gridApi.getRowNode(node.id),
            data: node,
            colDef: column.colDef,
            value: cellValue,
            context: undefined,
          };

          cellValue = column.valueFormatter(valueFormatterParams);
        }

        const tableCell = createTableCell(cellValue);
        return tableCell;
      });
      rowsToExport.push(rowToExport);
    });

    return rowsToExport;
  }

  function getExportedColumnsWidths(columnsToExport: PdfHeaderCell[]) {
    return columnsToExport.map(() => 100 / columnsToExport.length + '%');
  }

  function createHeaderCell(col: any) {
    const headerCell: PdfHeaderCell = {};

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
