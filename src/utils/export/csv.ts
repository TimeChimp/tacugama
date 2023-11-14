import { BasicTableColumn } from '../../components/basic-table/types';
import { saveAs } from 'file-saver';

interface Options {
  rows: any[];
  columns: BasicTableColumn[];
  fileName: string;
}

export const isSafari = () => /^((?!chrome|android).)*safari/i.test(navigator?.userAgent);

export const createCsv = (data: Options) => {
  const { rows, columns } = data;
  const columnHeaders = columns?.map((column) => column.label?.toString() ?? '');
  return `${columnHeaders.join(',')}\n${rows
    .map((row) => columns.map((column) => row?.[column.field]).join(','))
    .join('\n')}`;
};

export const createCsvSavingHandler = (data: Options) => {
  return () =>
    saveAs(
      new File([createCsv(data)], `${data.fileName}.csv`, {
        type: `${isSafari() ? 'application/csv' : 'text/csv'};charset=utf-8`,
      }),
    );
};
