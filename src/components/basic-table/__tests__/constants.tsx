import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Toggle, ToggleSize } from '../../toggle';
import { Input } from '../../input';
import { PriceInput } from '../../input/price-input';
import React from 'react';
import { BasicTableColumnType, BasicTableRow, BasicTableColumn } from '../types';

export const COLUMNS: BasicTableColumn[] = [
  {
    label: 'Name',
    field: 'name',
  },
  {
    label: 'Address',
    field: 'address',
  },
  {
    label: 'Price',
    type: BasicTableColumnType.Financial,
    field: 'price',
    width: '200px',
  },
  {
    label: 'Actions',
    type: BasicTableColumnType.Action,
    field: 'actions',
  },
];

export const DATA: BasicTableRow[] = [
  {
    name: 'John Smith',
    price: '$30',
    address: '100 Market St., San Francisco, California',
    actions: <Button onClick={() => alert('Hey there!')}>Action!</Button>,
  },
  {
    name: 'Sarah Brown',
    price: '',
    address: '100 Broadway St., New York City, New York',
    actions: <Input placeholder="Fill me in" />,
  },
  {
    name: 'Jane Doe',
    price: (
      <PriceInput
        onChange={(e) => {
          console.log(e);
        }}
      />
    ),
    address: '100 Main St., Los Angeles, California',
    actions: <Toggle size={ToggleSize.large} />,
  },
  {
    name: 'Hank Smith',
    price: 40,
    address: '100 Baker St., Dallas, Texas',
    actions: <Checkbox />,
  },
];
