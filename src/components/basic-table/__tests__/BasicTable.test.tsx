import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicTable } from '../BasicTable';
import { COLUMNS, DATA } from './constants';

describe('BasicTable', () => {
  it('renders a table with the correct number of rows', () => {
    render(<BasicTable
      columns={COLUMNS}
      data={DATA}
    />);
    expect(screen.getAllByRole('row')).toHaveLength(6);
  });

  it('renders a table with the correct number of columns', () => {
    render(<BasicTable
      columns={COLUMNS}
      data={DATA}
    />);
    expect(screen.getAllByRole('columnheader')).toHaveLength(4);
  });

  it('renders a table with the correct number of cells', () => {
    render(<BasicTable
      columns={COLUMNS}
      data={DATA}
    />);
    expect(screen.getAllByRole('cell')).toHaveLength(20);
  });
});