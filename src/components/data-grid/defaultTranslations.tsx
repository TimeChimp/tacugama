import React from 'react';
import { Translations } from './types';

export const defaultTranslations: Translations = {
  rowCountText: (count: number) => (
    <>
      Showing <strong>{count}</strong> results
    </>
  ),
  rowCountSelectedText: (count: number) => (
    <>
      <strong>{count}</strong> entries selected
    </>
  ),
  noRowsTitle: 'It`s a bit lonely in here',
  noRowsSubtext: 'Quick, add some items!',
  groupBy: 'Group by',
  search: 'Search',
  searchBar: 'Search for a description',
  defaultView: 'Default view',
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
  showResultsBy: 'Show results by',
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
};
