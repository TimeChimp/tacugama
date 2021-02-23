import React from 'react';
import { Translations } from './types';

export const defaultTranslations: Translations = {
  rowCountText: (count: number) => <>Showing {count} results</>,
  noRowsTitle: 'It`s a bit lonely in here',
  noRowsSubtext: 'Quick, add some items!',
  groupBy: 'Group by',
  search: 'Search',
  defaultView: 'Default view',
  viewOptions: 'View options',
  addView: 'Add view',
  viewName: 'View name',
  saveColumn: 'Save column',
  saveGrouping: 'Save grouping',
  saveFilters: 'Save filters',
  saveView: 'Save view',
  cancel: 'Cancel',
  unpinView: 'Unpin',
  renameView: 'Rename view',
  updateView: 'Update view',
  deleteView: 'Delete view',
  deleteViewConfirmation: 'Are you sure you want to delete this view?',
};
