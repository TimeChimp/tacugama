import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { Toggle, ToggleSize } from '../../toggle';
import { Input } from '../../input';
import React from 'react';
import { BasicTableColumnType } from '../types';

export const COLUMNS = [
  {
    label: 'Name',
    field: 'name',
  },
  {
    label: 'Age',
    type: BasicTableColumnType.Text,
    field: 'age',
    width: '50px',
  },
  {
    label: 'Address',
    type: BasicTableColumnType.Text,
    field: 'address',
  },
  {
    label: 'Actions',
    type: BasicTableColumnType.Custom,
    field: 'actions',
  },
];

export const DATA = [
  {
    name: 'John Smith',
    age: 30,
    address: '100 Market St., San Francisco, California',
    actions: <Button onClick={() => alert('Hey there!')}>Action!</Button>,
  },
  {
    name: 'Sarah Brown',
    age: 31,
    address: '100 Broadway St., New York City, New York',
    actions: <Input placeholder="Fill me in" />,
  },
  {
    name: 'Jane Doe',
    age: 32,
    address: '100 Main St., Los Angeles, California',
    actions: <Toggle size={ToggleSize.large} />,
  },
  {
    name: 'Hank Smith',
    age: 40,
    address: '100 Baker St., Dallas, Texas',
    actions: <Checkbox />,
  },
];
