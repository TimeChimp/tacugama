import React, { useEffect, useState } from 'react';
import { FooterRowCountProps } from '../types';
import { StyledFooterPagination } from '../styles';
import { Pagination } from '../../pagination';

const EVENT_LISTENER = 'paginationChanged';

export const FooterPagination = ({ api: gridApi, translations }: FooterRowCountProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const onPaginationChanged = () => {
      const gridApiCurrentPage = gridApi?.paginationGetCurrentPage();
      if (typeof gridApiCurrentPage === 'number' && gridApiCurrentPage + 1 !== currentPage) {
        setCurrentPage(gridApiCurrentPage + 1);
      }
      setNumPages(gridApi?.paginationGetTotalPages());
    };

    gridApi?.addEventListener(EVENT_LISTENER, onPaginationChanged);

    return () => {
      if (!gridApi?.isDestroyed()) {
        gridApi?.removeEventListener(EVENT_LISTENER, onPaginationChanged);
      }
    };
  }, [gridApi, currentPage]);

  const handlePageChange = (page: number) => {
    // Ag-grid and baseweb have a different way of counting the total number of pages
    gridApi.paginationGoToPage(page - 1);
    setCurrentPage(page);
  };

  return (
    <StyledFooterPagination>
      <Pagination
        numPages={numPages}
        currentPage={currentPage}
        onPageChange={({ nextPage }) => {
          handlePageChange(nextPage);
        }}
        labels={{
          preposition: translations.paginationOutOf,
        }}
      />
    </StyledFooterPagination>
  );
};

export default FooterPagination;
