import { mkConfig, generateCsv, download, ConfigOptions } from 'export-to-csv';
import { BasicTableColumn } from '../../components/basic-table/types';

interface Options {
  rows: any[];
  columns: BasicTableColumn[];
  config?: ConfigOptions;
  fileName?: string;
}

export const createCsv = (data: Options) => {
  const { rows, columns, config = {}, fileName } = data;

  const columnHeaders: ConfigOptions['columnHeaders'] = columns?.map((column) => ({
    key: column.field,
    displayLabel: column.label?.toString() ?? '',
  }));
  const csvConfig = mkConfig({ ...config, columnHeaders, filename: fileName });
  return { config: csvConfig, file: generateCsv(csvConfig)(rows) };
};

export const createCsvDownloadHandler = (data: Options) => {
  const { config, file } = createCsv(data);
  return () => download(config)(file);
};
