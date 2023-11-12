import writeXlsxFile from 'write-excel-file';
import { BasicTableColumn } from '../../components/basic-table';

interface Options {
  rows: any[];
  columns: BasicTableColumn[];
}

interface HandlerOptions extends Options {
  fileName: string;
}

export const createXlsx = (data: Options) => {
  const { rows, columns } = data;

  const headerRow = columns.map((column) => ({ value: column.label }));
  const rowData = rows.map((row) => columns.map((column) => ({ value: row[column.field] })));
  return { headerRow, rowData };
};

export const createXlsxDownloadHandler = (data: HandlerOptions) => {
  const { rows, columns, fileName } = data;
  const { rowData, headerRow } = createXlsx({ rows, columns });
  return () => writeXlsxFile([headerRow, ...rowData], { fileName: `${fileName}.xlsx` });
};
