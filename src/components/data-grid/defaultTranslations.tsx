import React from 'react';
import { Translations } from './types';

export const defaultTranslations: Translations = {
  rowCountText: (count: number, totalCount: number) => (
    <>
      <strong>{count}</strong> of <strong>{totalCount}</strong> results
    </>
  ),
  rowCountSelectedText: (count: number) => (
    <>
      <strong>{count}</strong> selected
    </>
  ),
  noRowsTitle: 'It`s a bit lonely in here',
  noRowsSubtext: 'Quick, add some items!',
  groupBy: 'Group by:',
  search: 'Search',
  searchBar: 'Search for a description',
  defaultView: 'Default',
  viewOptions: 'View options',
  addView: 'Add view',
  viewName: 'View name',
  saveColumns: 'Save column',
  saveGrouping: 'Save grouping',
  saveFilters: 'Save filters',
  saveView: 'Save view',
  searchColumns: 'Search columns',
  cancel: 'Cancel',
  unpinView: 'Unpin',
  pinView: 'Pin',
  renameView: 'Rename view',
  updateView: 'Update view',
  deleteView: 'Delete view',
  deleteViewConfirmation: 'Are you sure you want to delete this view?',
  defaultViewTooltip: 'Default view cannot be edited.',
  lessFilters: 'Less filters',
  allFilters: 'All filters',
  showResultsBy: 'Show',
  paginationPrevious: 'Prev',
  paginationNext: 'Next',
  paginationOutOf: 'Of',
  paginationOutOfLong: (currentPage: number, pageCount: number) => `${currentPage} of ${pageCount}`,
  deleteEntries: 'Delete entries',
  deleteEntriesCount: (count: number) => (
    <>
      Are you sure you want to delete <strong>{count}</strong> results
    </>
  ),
  delete: 'Delete',
  export: 'Export',
  none: 'None',
};
