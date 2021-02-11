import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import fetch from 'isomorphic-unfetch';
import { StyledDataGrid, getGridThemeOverrides } from './StyledDataGrid';
import { RowActionsCell } from './RowActionsCell';
import { StatusBarRowCount } from './StatusBarRowCount';
import { NoRowsTemplate } from './NoRowsTemplate';
import { HeaderCheckbox } from './HeaderCheckbox';
import { LoadingCellTemplate } from './LoadingCellTemplate';
import { Filters } from './Filters';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { ServerSideRowModelModule } from '@ag-grid-enterprise/server-side-row-model';
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import { CsvExportModule } from '@ag-grid-community/csv-export';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import {
  GridApi,
  ColumnApi,
  ValueFormatterParams,
  IServerSideDatasource,
  IServerSideGetRowsParams,
  ServerSideStoreType,
  GridReadyEvent,
} from '@ag-grid-community/core';
import { formatCurrency, formatNumber, formatDuration, TcDate } from '@timechimp/timechimp-typescript-helpers';

import {
  DataGridApi,
  DataGridColumn,
  DataGridProps,
  DataGridState,
  DataGridColumnType,
  FilterModel,
  DataGridResponse,
} from './types';
import { useTheme } from '../../providers';
import { TriangleDown, TriangleUp } from '../icons';
import { defaultFormatSettings } from './defaultFormatSettings';

export const DataGrid = ({
  columns,
  selection,
  filtering,
  grouping,
  onReady,
  rowActionItems,
  state,
  dataUrl,
  accessToken,
  sortableColumns,
  resizeableColumns,
  formatSettings = defaultFormatSettings,
  noRowsTitle,
  noRowsSubtext,
  groupByLabel,
}: DataGridProps) => {
  const [gridApi, setGridApi] = useState<GridApi>(new GridApi());
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>(new ColumnApi());
  const [gridColumns, setGridColumns] = useState<DataGridColumn[]>(columns);
  const [filterModel, setFilterModel] = useState<FilterModel>({});

  const { theme } = useTheme();

  const getGridThemeClassName = () => {
    return theme.current === theme.dark ? 'ag-theme-alpine-dark' : 'ag-theme-alpine';
  };

  const getSelectedRows = (api: GridApi) => {
    return api.getSelectedRows();
  };

  const getSelectedRow = (api: GridApi) => {
    const rows = api.getSelectedRows();
    if (rows.length === 0) {
      throw new Error('No row is selected');
    }
    if (rows.length > 1) {
      throw new Error('More then 1 row selected, use getSelectedRows method instead');
    }

    return api.getSelectedRows()[0];
  };

  const exportAsCsv = (api: GridApi) => {
    return api.exportDataAsCsv();
  };

  const exportAsExcel = (api: GridApi) => {
    return api.exportDataAsExcel();
  };

  const refreshStore = (api: GridApi) => {
    const rowCount = api.getDisplayedRowCount();
    return api.refreshServerSideStore({ purge: rowCount === 0 });
  };

  const getState = (api: GridApi, columnApi: ColumnApi) => {
    const state: DataGridState = {
      columnState: columnApi?.getColumnState(),
      columnGroupState: columnApi?.getColumnGroupState(),
      filterModel: api?.getFilterModel(),
    };
    return JSON.stringify(state);
  };

  const onGridSizeChanged = () => {
    gridApi.sizeColumnsToFit();
  };

  const onFirstDataRendered = () => {
    if (!state) {
      return;
    }
    const gridState: DataGridState = JSON.parse(state);

    if (gridState.columnState) {
      gridColumnApi.setColumnState(gridState.columnState);
    }
    if (gridState.columnGroupState) {
      gridColumnApi.setColumnGroupState(gridState.columnGroupState);
    }

    if (gridState.filterModel) {
      gridApi.setFilterModel(gridState.filterModel);
      setFilterModel(gridState.filterModel);
    }
  };

  const createServerSideDatasource = (): IServerSideDatasource => {
    return {
      getRows: async function (params: IServerSideGetRowsParams) {
        let rowData;
        let rowCount;
        try {
          const response = await fetch(dataUrl, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(params.request),
          });

          const data = (await response.json()) as DataGridResponse;
          ({ rowData, rowCount } = data);
        } catch (error) {
          params.fail();
        }

        if (!rowData || rowData.length === 0) {
          return params.api.showNoRowsOverlay();
        } else {
          params.api.hideOverlay();
        }

        return params.success({ rowData, rowCount });
      },
    };
  };

  const onGridReady = async ({ api, columnApi }: GridReadyEvent) => {
    if (onReady) {
      const dataGridApi: DataGridApi = {
        getSelectedRows: () => getSelectedRows(api),
        getSelectedRow: () => getSelectedRow(api),
        exportAsCsv: () => exportAsCsv(api),
        exportAsExcel: () => exportAsExcel(api),
        getState: () => getState(api, columnApi),
        refreshStore: () => refreshStore(api),
      };
      onReady(dataGridApi);
    }

    setGridApi(api);
    setGridColumnApi(columnApi);

    api.sizeColumnsToFit();

    const datasource = createServerSideDatasource();
    api.setServerSideDatasource(datasource);

    setFilterModel(api.getFilterModel());
  };

  const getRowNodeId = (data: any) => {
    return data.id;
  };

  const onGrouping = (rowGroups: string[]) => {
    let columns = [...gridColumns];
    columns.forEach((c) => {
      c.rowGroup = rowGroups.includes(c.field);
    });
    setGridColumns(columns);
  };

  const onFiltering = (filters: FilterModel) => {
    setFilterModel(filters);
    gridApi.setFilterModel(filters);
    gridApi.onFilterChanged();
  };

  const getValueFormatter = (params: ValueFormatterParams, type?: DataGridColumnType) => {
    const { currency, numberFormat, dateFormat, language, timeFormat, durationFormat } = formatSettings;
    switch (type) {
      case 'currency':
        return formatCurrency(params.value, currency, numberFormat);
      case 'number':
        return formatNumber(params.value, 2, numberFormat);
      case 'date':
        return new TcDate(params.value).format(dateFormat, language);
      case 'time':
        return new TcDate(params.value).format(timeFormat, language);
      case 'duration':
        return formatDuration(params.value, durationFormat, numberFormat);
    }
    return params.value;
  };

  return (
    <>
      <Filters
        columns={gridColumns}
        filtering={filtering}
        grouping={grouping}
        onGrouping={onGrouping}
        onFiltering={onFiltering}
        filterModel={filterModel}
        groupByLabel={groupByLabel}
      />
      <StyledDataGrid className={getGridThemeClassName()}>
        <style>{getGridThemeOverrides(theme.current)}</style>
        <AgGridReact
          rowSelection="multiple"
          rowModelType="serverSide"
          serverSideStoreType={ServerSideStoreType.Partial}
          noRowsOverlayComponent="noRowsTemplate"
          loadingCellRenderer="loadingCellTemplate"
          animateRows
          suppressAggFuncInHeader
          autoGroupColumnDef={{
            cellRendererParams: {
              suppressCount: false,
              checkbox: false,
            },
          }}
          pagination
          suppressPaginationPanel
          onGridReady={onGridReady}
          getRowNodeId={getRowNodeId}
          onFirstDataRendered={onFirstDataRendered}
          onGridSizeChanged={onGridSizeChanged}
          cacheBlockSize={1000}
          maxBlocksInCache={10}
          blockLoadDebounceMillis={100}
          frameworkComponents={{
            moreActionsCell: RowActionsCell,
            statusBarRowCount: StatusBarRowCount,
            noRowsTemplate: () => <NoRowsTemplate noRowsTitle={noRowsTitle} noRowsSubtext={noRowsSubtext} />,
            headerCheckbox: HeaderCheckbox,
            loadingCellTemplate: LoadingCellTemplate,
          }}
          icons={{
            sortAscending: () =>
              ReactDOMServer.renderToStaticMarkup(<TriangleDown size={theme.current.sizing.scale200} />),
            sortDescending: () =>
              ReactDOMServer.renderToStaticMarkup(<TriangleUp size={theme.current.sizing.scale200} />),
          }}
          modules={[ServerSideRowModelModule, RowGroupingModule, CsvExportModule, ExcelExportModule, StatusBarModule]}
          statusBar={{
            statusPanels: [
              {
                statusPanel: 'statusBarRowCount',
                align: 'left',
              },
            ],
          }}
        >
          <AgGridColumn
            hide={!selection}
            headerName={''}
            field={''}
            checkboxSelection={selection}
            headerComponent={selection ? 'headerCheckbox' : ''}
            minWidth={40}
            maxWidth={40}
            sortable={false}
            resizable={false}
          />
          {gridColumns.map((column) => (
            <AgGridColumn
              key={column.field}
              headerName={column.label}
              field={column.field}
              width={column.width}
              rowGroup={column.rowGroup}
              hide={column.rowGroup}
              sort={column.sort}
              valueFormatter={(params: ValueFormatterParams) => getValueFormatter(params, column.type)}
              aggFunc={column.aggFunc}
              sortable={sortableColumns}
              resizable={resizeableColumns}
            />
          ))}
          <AgGridColumn
            hide={!rowActionItems}
            headerName={''}
            field={''}
            cellRenderer="moreActionsCell"
            cellRendererParams={{ items: rowActionItems }}
            type="rightAligned"
            minWidth={60}
            maxWidth={60}
            sortable={false}
            resizable={false}
          />
        </AgGridReact>
      </StyledDataGrid>
    </>
  );
};

export default DataGrid;
